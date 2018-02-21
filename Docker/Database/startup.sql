CREATE TABLE public.person
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
    age INT NOT NULL
);
CREATE TABLE public.tweet
(
    id SERIAL PRIMARY KEY,
    content VARCHAR(256) NOT NULL,
    person_id INT NOT NULL,
    FOREIGN KEY (person_id) REFERENCES person(id)
);
