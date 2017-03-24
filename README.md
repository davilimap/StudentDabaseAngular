# StudentDabaseAngular

Database for storing student data in Node using Angular 2. Consumes a 

## Execution

Database must be running on `localhost:3030`. After running `npm start`, access `localhost:3000` to access the main dashboard for the app

## Main Classes

The main classes for this app are found in `src/app/` and have the `.ts` extension

### Dashboard Component

Component for showing the dashboard page of the app

### Student

Defines the student object used in all other classes

### Student Service

Service for getting and updating students from the database

### Students Component

Component for viewing all students with methods for getting and updating the database

### Student Detail Component

Component for viewing student details

### Student Search Component

Component for searching for students based on name

### Student Search Service

Service for getting the searched students from the database