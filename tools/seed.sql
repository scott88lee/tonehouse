DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    bandname TEXT NOT NULL,
    genre TEXT NOT NULL,
    email TEXT NOT NULL,
    bandmembers INT NOT NULL,
    contactperson TEXT NOT NULL,
    contactnumber VARCHAR(12) NOT NULL,
    approval TEXT NOT NULL,
    pwdhash VARCHAR(256) NOT NULL
);

INSERT INTO users (bandname, genre, email, bandmembers, contactperson, contactnumber, approval, pwdhash)
VALUES ('Tonehouse Studios', 'Boutique', 'admin', 2, 'Admin', '9999 9999', 'admin', 'qweqwe');

SELECT * FROM users;

-- lastname TEXT NOT NULL,
-- email VARCHAR(55) NOT NULL,
-- karma INT DEFAULT 0,
-- address TEXT,
-- pf_pic TEXT,
-- u_date DATE NOT NULL DEFAULT CURRENT_DATE
-- username
-- bandname
-- genre
-- 1st Contact person
-- HP: 
-- email
-- 2nd Contact person
-- hp:
-- email
-- memberCount
-- Credit