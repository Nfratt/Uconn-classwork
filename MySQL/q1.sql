CREATE DATABASE animals_db;

USE animals_db;

INSERT INTO people (name, has_pet, pet_name, pet_age)
VALUES ("Ahmed", true, "Rockington", 100);

INSERT INTO people (name, has_pet)
VALUES ("peter",false);

UPDATE people
SET has_pet = true
WHERE name ="Peter" ;

INSERT INTO people (name, has_pet, pet_name, pet_age)
VALUES ('Rachael', true, 'Minnie', 2),
('Rachael', true, 'Nipper', 2);


DELETE FROM `animals_db`.`people`
WHERE pet_name = 'rockington';

