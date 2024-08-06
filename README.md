# Food-diary
This repository contains my coursework assignment, for the React course offered by SoftUni. 
This is a system for login and tracking your food intake

## Functionality 
* Registering users.
* Creating and editing foods and food diaries for registered users.
* Calories calculator and the possibility to save the result as a goal if you are registered user.
* Possibility to search for for food and add to your diary.
* Interactive editor for foods and diary.
* Interactive UI.

## Technologies 
* HTML, CSS, React.
* Backend - Back4app.

## Pages
* Home page.
* Login up page.
* Register up page.
* Food Catalog - page of created foods of the registered user.
* Diary page for each day of the year - Page where users can add and remove foods for their meals for certain days.
* Add food to Diary page - This page allows users to search for specific foods and add them to their daily diary.
* Create food - Create view for food.
* Food Editor - Edit view for food.
* Calories Calculator - Calories calculator functionality. 

## Data Structure
### Collections 
* Sessions (service)
* Users (service)
```javascript
{
    username: String,
    password: String
}
```
* Food
```javascript
{
    name: String,
    protein: Number,
    fat: Number,
    carbs: Number,
    calories: Number,
    servingSize: String,
    owner: Pointer
}
```
* Date
```javascript
{
    userId: Pointer, 
    dataString: String,
    title: String, 
    breakfast: Array,
    lunch: Array,
    diner: Array,
    snack: Array,
}
```

## Accessibility Control
* Guest users can register and calculate their calories.
* Registered users can edit their diaries, create foods and edit them, calculate their calories and save the result as a goal.
* Only the creator of a food can edit and delete it.