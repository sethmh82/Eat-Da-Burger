/*
Now you're going to run these SQL files.
Make sure you're in the db folder of your app.
Start MySQL command line tool and login: mysql -u root -p.
With the mysql> command line tool running, enter the command source schema.sql. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.
Now insert the entries you defined in seeds.sql by running the file: source seeds.sql.
Close out of the MySQL command line tool: exit.
*/
INSERT INTO burgers(burger_name) VALUES ('McDelicious Hamburger');
INSERT INTO burgers(burger_name) VALUES ('Steak & Eggs Burger');
INSERT INTO burgers(burger_name) VALUES ('Spinach Burger');
INSERT INTO burgers(burger_name) VALUES ('Triple Bacon Cheeseburger');
INSERT INTO burgers(burger_name) VALUES ('Tall Stack Hamburger');