from sqlalchemy import func
import pandas as pd
import os

# SQL Alchemy
from sqlalchemy import create_engine

# PyMySQL 
import pymysql
pymysql.install_as_MySQLdb()

from flask import (
    Flask,
    render_template,
    jsonify)

app = Flask(__name__)

username = os.environ.get('remote_hiv_dbuser')
password = os.environ.get('remote_hiv_dbpwd')
port = os.environ.get('remote_db_port')
endpoint = os.environ.get('remote_db_endpoint')
db = os.environ.get('remote_hiv_dbname')

engine = create_engine(f"mysql://{username}:{password}@{endpoint}:{port}/{db}")

conn = engine.connect()

# Create a route that renders index.html template
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/income")
def income_data():
    income = pd.read_sql("SELECT * FROM income_data", conn)
    return income.to_json(orient='records')  

@app.route("/unemployment")
def unemployement_data():
    unemployment = pd.read_sql("SELECT * FROM unemployment_data", conn)
    return unemployment.to_json(orient='records')   

@app.route("/death")
def education_data():
    deaths = pd.read_sql("SELECT * FROM death_data", conn)
    return education.to_json(orient='records') 

@app.route("/diagnosis")
def hivcase_data():
    hivcase = pd.read_sql("SELECT * FROM diagnosis_data", conn)
    return hivcase.to_json(orient='records')

if __name__ == "__main__":
    app.run(debug=True)