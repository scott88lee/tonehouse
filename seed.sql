CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    pwdhash VARCHAR(256) NOT NULL
);

INSERT INTO users (username, pwdhash)
VALUES ('admin', '123123');

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