DROP TABLE IF EXISTS to_dos;


CREATE TABLE to_dos (
    id SERIAL PRIMARY KEY,
    task character varying(255), 
  	time date not null default current_date
);

DROP TABLE IF EXISTS completed_todos;



CREATE TABLE completed_dos (
    id SERIAL PRIMARY KEY,
    task character varying(255),
	completed_time date not null default current_date
);