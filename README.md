# HPDF_task-1_expressjs:
This repository contains the files that consist of codes that are written for nodejs-express platform,
 PREREQUISITES:
 what is nodejs?
 Node_js is a open source, cross platform,javasrcipt,crossplatform runtime environmen for executing javascript code serverside.It has following advantages, 1:Event Driven Programming Model, 2:Node.js non blocking I/O,
 3:The REPL:It represents  for Read-Eval-Print-Loop which is a simple program that accepts tasks, evaluates the input, and prints their results back
 4:Parallel Code Execution
 5:NPM- The Node Package Manager:  Node.js is having an ever growing repository of different utilities and server side tasks. These modules can be installed through the Node Package Manager (NPM) in our local development environmen. The general syntax for installing a new module is:[npm install modulename].
what is express_js?
Express is a  flexible and powerful web development framework for the Node.js (Node) platform.Express is a lightweight framework,Using express framework on nodejs, Server-side web and mobile application frameworkcan be made easily.following are some of the major features of express framework:
1:Language: written in JavaScript
2:Express can be used  to build single page, multiple page web applications 
3:Common back-end functions for web applications
4:APIs (application programming interfaces),JSON based APIs
5:Templating engines: Express comes with  templating engines like, Jade and EJS, which facilitate the flow of data into a website structure.
6:MVC pattern: Express supports the Model-View-Controller architecture, a really helpful way to build websites in a model-driven format.
6:Platform: Node.js
7;Operating system: It’s cross-platform, so it’s not limited to one OS.
8:The Express Generator:let's you create complex applications quickly.
9:Realtime web applications etc.


To Install Node-js refer  to https://nodejs.org/en/download and for installing express-jsframework refer to  http://expressjs.com/en/starter/installing.html.
To run the code that is contained in this repository,please ensure that node-js and express-js are downloaded and installed correctly.
After installing  node and express in your system ,open up the folder in which you have saved this code files,change directory to that folder,and run the command:[node index],and you will notice that the code runs successfully.This code has been written inorder to fulfill following requirements, 
TASK1.1-{For this, open ur browser and go to http://localhost:8080/,there  will be a text displaying 'HELLO WORLD Message' }
A simple hello-world at http://localhost:8080/ that displays a simple string like "Hello World - Arpit"; replace "Arpit" with your own first name).

TASK1.2-{For this,open browser,and go to  http://localhost:8080/authors,this question contains list of authors name and number of post made by them ,bothof this data is fetched from different url's and displayed. }
Add a route, for e.g. http://localhost:8080/authors, which:
1:fetches a list of authors from a request to https://jsonplaceholder.typicode.com/users
2:fetches a list of posts from a request to https://jsonplaceholder.typicode.com/posts
3:Respond with only a list of authors and the count of their posts (a newline for each author).
TASK1.3-{For this,open browser,and go to  http://localhost:8080/authors,cookie is a small piece of data sent from a website and stored on the user's computer by the user's web browser while the user is browsing. Cookies were designed to be a reliable mechanism for websites to remember stateful information (such as items added in the shopping cart in an online store) or to record the user's browsing activity (including clicking particular buttons, logging in, or recording which pages were visited in the past,this was to set a cookie:}
Set a simple cookie (if it has not already been set) at http://localhost:8080/setcookie with the following values: name=<your-first-name> and age=<your-age>.
TASK1.4-{For this,open browser,and go to  http://localhost:8080/getcoookies,this page will display the cookies that were set in TASK1.3 .}
Fetch the set cookie with http://localhost:8080/getcookies and display the stored key-values in it.
TASK1.5-{For this,open browser,and go to  http://localhost:8080/robots.txt}
Deny requests to your http://localhost:8080/robots.txt page. (or you can use the response at http://httpbin.org/deny if needed)
TASK1.6-{For this,open browser,and go to  http://localhost:8080/image,This page will display content  of an Html file whuch is rendered by the browser. }
Render an HTML page at http://localhost:8080/html or an image at http://localhost:8080/image.
TASK1.7-{For this,open browser,and go to  http://localhost:8080/input,this page will take the input from the user and the enetered information will display at http://localhost:8080/form}
A text box at http://localhost:8080/input which sends the data as POST to any endpoint of your choice. This endpoint should log the received the received to stdout.
    

