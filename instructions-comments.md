# Instructions for us

## 1. Create start page - (MATS) 74d2a76

### 1.1 Start by copying default tenmplate from here: http://getbootstrap.com/examples/theme/

It's all here. just copy-paste, that we do so well nowadays.

### 1.2. Replace css with correct ones

Since they have linked to local and other css that we want, fix this

### 1.3. Adding the missing css entries for index.html

### 1.4. Remove content of page

Better to remove stuff than have to write.

### 1.5. Move styles to separate file

Lets start small, but to divide your app into several file is something you really wanna do.

### 1.6. Edit menu

Lets make this menu fit our app. Which btw is gonna be a server administrator

### 1.6.1 Show console / Discover missing jquery

Well it might not show an error but the dropdown menu certainly doesn't work.
Bootstrap comes packas with a huge set of CSS along with javascript components for the functionality to work.
These components are written in jQuery, old stuff...

### 1.6.2 Add jquery

But lets make it work just for the sake of it.

### 1.7. Remove theme css

Lets use our main.css instead

### 1.8. Move menu to right

Lets adjust the dro down so it appears on the right instead.

---

## 2. Create angular-js application - (MICKE) b60c029

Ok onto some Angular action!

### 2.1 Create the app.js module

As said before you do wanna split things up..

### 2.2.1 Add all required sj

- Explain that we still have to include all files, just as before, in classic js-development

### 2.2.2 Explain why we need a "new bootstrap library"

- Also explain the real problem with jQuery

### 2.2.3 Why is the menu not  working?

- The problem with java script!
- Remove the menu

### 2.3. Add the controller (server.js)

- Classic MVC has controllers, so do this

### 2.4. Add ng-app/ng-controller to the page

- Explain that what you really define here is the _scope_ 

### 2.5. Add a bound variable

- To bind variables, what does it mean?

### 2.6. Add counter

- Explain dependencies
- Explain functions (lambdas)

---

## 3. Create a view and add routing - (MATS) 6da04f0

### 3.1 Create the view

_Why am I doing this?_ To separate things, get things managable. You really want to split up your spa in html-fragments
classic mvc style. enable for routing

### 3.2 Add the ng-view

_This is the placeholder for the templates to be shown._

### 3.3 Add routing

- nails the navigation between these newly created fragments.
- MVC

### 3.4 Explain why this is significant

- _Important cause it solves the problem of how you can route to_
- _different pages in your app without reloading your page, SPA_
- _history, back and forward buttons will work, bookmarks, share links etc_

---

## 4. Create a table - (MICKE) c05c3d9

### 4.1 Show the table section on bootstrap docs page

### 4.2 Add basic table with headers

### 4.3 Add a sample row

---

## 5. Adding a service - (MATS) d90ab5c

### 5.1 Add the service file

Good practise is to separate services in different files. Split up things, just as in classic mvc.

use strict is ECMAScript version 5, must for example declare variables.

### 5.2 Create a basic service

The $resource component! 

A factory which creates a resource object that lets you interact with RESTful server-side data sources.

- discuss the options
- Ajax cll
- REST mention the verbs.
- Communication to back-end is done from a service.

### 5.3 Include it in index.html

Could be a pain to do these includes in the long run. Thats why gulp/grunt exists. Explain that these are build systems for js
Gulp och grunt which help minifiing, adding repetitive tasks such as include
the static file. Merge the files to one. Basically to facilitate for some one new to the project to
get upp to speed with continue developing.

### 5.4 Add ng-repeat

Loop your things. Something that you abviously do a lot. Här görs det grejer i backgrunden. Saker å ting injeiceras, 
Mycket händer bakomliggeande. Repeat, the static content.

### 5.5 Add the mock server (explain that this is a fake API)

Förklara att man inte behöver nån kod för att få till detta!
Användsbarheten är också viktigt. Magnling av data. Filtrering.


---

## 6. Bind variables - (MICKE) 4c1d4e4

### 6.1 Bind all variables

- Show how nice and easy it is
- Show the json object if they need to know the "interface"

---

## 7. Create icons and change styles - (MATS) 0d1d3fd

### 7.1 Show bootstrap icons
### 7.2 Show font awesome
### 7.3 Add the status icon
### 7.4 Add the type icon

- explain that you can do it with the ng-class or do it with concat..

### 7.5 Add a color lable around status icon

Font awesome, use that if you like better styling.

---

## 8 Adding functions - (MICKE) d9b5706

### 8.1 Add top text.
### 8.2 Creat bound function (refresh())
### 8.3 Why is refresh "flickering" ?
### 8.4 Fix flickering
### 8.5 Reuse refresh call
### 8.6 Ditch the "Old" stuff (intevall etc)

---

## 9. Implement refresh & filter - (MATS) 9b00f48

Focus on how easy it is. That we are really just manipulating java-lists. Never worrying about how it is reflected in the gui.
The bind part does that for us.

### 9.1 Add ordering and filtering to repeat
### 9.2 Add fields for sorting, reverse and filter
### 9.3 Add funtion to set sort items
### 9.4 Add missing css for search clear


## Done 35f556e

