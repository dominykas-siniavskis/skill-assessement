# Skill assessement task
## Table of contents
* [Task](#task)
* [My comments](#comments)
* [Routes](#routes)
* [Setup](#setup)

## Task
Our backend relies on Mongoose for database and Express.js for routing.
Your task is to theoretically create a new route that allows <u>logged in</u> users to retrieve all jobs they have placed on the platform. 
What we are looking for is your approach on route structure and file structure. You can pick the route name yourself.
Comments on why you chose the logic you chose are highly welcome.

## Comments
Altohugh I understand the task was to theoretically create a new route to get user's jobs, in order to get a bit more familiar with the technologies 
I made a functioning project and added some additional routes, hope that's okey!
<br>
<br>
I have mocked the middleware which would verify the JWT, as I thought creating routes and models for user registration and token retrieval would be too much. 
Moreover I would like to note that I planned on using environment variables, but due to lack of them I thought I wouldn't bother.
<br>
<br>
I left some comments in the code explaining some parts which might make someone wonder why was that done. Other parts were done trying to uphold clean coding standards.
However if any questions arise I would be glad to answer them.
<br>
<br>
Regarding the file structure one thing I didn't add was a directory for tests, I would have implemented it as to separate the logics:
```
app/
-- src/
-- tests/
```

## Routes
* GET /v1/jobs
* GET /v1/jobs/:id
* POST /v1/jobs

## Setup
```
git clone https://github.com/dominykas-siniavskis/skill-assessement.git
npm install
npm start
```
JWT structure if you wanted to test, although only uuid is needed as it's used as job's reference to the user:
```javascript
{
  "uuid": "1696c581-e47b-471d-b3c0-ae539022af39",
  "iat": 1516239022
}
```
