
# Project Title

Employee Poll Project

## Getting Started

This project bases on the "Employee Poll Project Instructions" to create a polling function based project.

There are six pages in the application:

- Login Page: A portal to do the authentification for emplyees.
- Dashboard Page: Show all new questions and done questions of login user.
- New Question Page: For employ to raise new poll in the polling system.
- Question Page: Show the question option if question is unanswered and show polling result if question is answered by user.
- Leaderboard Page: Show the leaderboard of all employees base on the answered poll and created poll.
- Error Page: Show the error message if user try to type the unexisted address.

### Prerequisites

Your computer should install the npm and nodejs to run the project.

### Installing

To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`
- do the project test with `npm run test`

## Note

Project update in 2022.11.09:

- Add the README.MD file.
- User will be asked to login and redirect to the request page. They should be redirected to the 404 page if page doesn't exist.
- Add the radio button in the dashboard page to show target question.
- change the `question/:question_id` route into `questions/:question_id`
- change the `/new` route into `/add`
- navigation will show in all pages.

