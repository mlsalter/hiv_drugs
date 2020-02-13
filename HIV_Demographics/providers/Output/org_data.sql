DROP TABLE org_data;

CREATE TABLE org_data (
    id SERIAL NOT NULL,
    org_name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    phone_num VARCHAR(15) NOT NULL
	);

--Check to see if all data is here
SELECT * FROM org_data;

--Add column to table
ALTER TABLE org_data
ADD COLUMN state VARCHAR(255)
ADD COLUMN country VARCHAR(255);

-- Query only the `address field
SELECT address
FROM org_data;

-- Update column country with the US for those with US in the address column
UPDATE org_data 
SET country='United States'
WHERE address LIKE '%United States%';

-- Update column state with the state name queried from
--address table
UPDATE org_data
SET state='District of Colombia' WHERE address LIKE '%DC%'
;

--Check to see if all data is here
SELECT * FROM org_data;
