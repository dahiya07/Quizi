# Quizi
## A Node + React Quiz App using sequalize nodejs

Clone my repository

go to terminal and to Quizi directory , in command line write
```
npm re-install
```
Now
```
cd back
run node server.js (its running on port 5000)
```
then open your react development server as there is no proxy
go to main quizi directory and
```
cd front
npm start 
```
database file is included , just import the database file in your database server by
config database setting in **back/config/db.config**

### Node.js
All the things are done in sequlaize i.e. no query \
All this can be found in **back/controllers/user.controller.js**\
Api's are created for :
- Creating a new user
- Getting an user details from the database
- Updating an user score in the database
- getting all the quize question for differebnt quiz tables \

