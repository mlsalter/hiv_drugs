#Dependencies/Libraries necessary
import os
import pandas as pd
from sqlalchemy import func

# SQL Alchemy
from sqlalchemy import create_engine

# PyMySQL 
import pymysql
pymysql.install_as_MySQLdb()

from flask import (
    Flask,
    render_template,
    jsonify)


#################################################
# Flask Setup
#################################################

app = Flask(__name__)

#################################################
# Database Setup
#################################################

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

@app.route("/prep")
def prep_data():
    prep = pd.read_sql("SELECT * FROM prep_data", conn)
    return prep.to_json(orient='records')  

@app.route("/prevalence")
def prev_data():
    prevalence = pd.read_sql("SELECT * FROM prevalence_data", conn)
    return prevalence.to_json(orient='records')   

@app.route("/death")
def death_data():
    death = pd.read_sql("SELECT * FROM death_data", conn)
    return death.to_json(orient='records') 

@app.route("/diagnosis")
def diagnosis_data():
    diagnosis = pd.read_sql("SELECT * FROM diagnosis_data", conn)
    return diagnosis.to_json(orient='records')

@app.route("/income")
def income_data():
    income = pd.read_sql("SELECT * FROM income_data", conn)
    return income.to_json(orient='records')  

@app.route("/unemployment")
def unemployement_data():
    unemployment = pd.read_sql("SELECT * FROM unemployment_data", conn)
    return unemployment.to_json(orient='records')   

@app.route("/education")
def education_data():
    education = pd.read_sql("SELECT * FROM education_data", conn)
    return education.to_json(orient='records') 

if __name__ == "__main__":
    app.run(debug=True)
