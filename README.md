# Connect-Cuisine

In our project, we worked in a group to build a full-stack crowdfunding app using Node.js, Express.js, Sequelize, Handlebars.js, and MVC architecture.

## User Stories

* As a user, I want to see blogs about local food spots in my area.

* As a user I want to have an option to change the category of food im looking for.

* As a user, I want to be able to create an account, login, and logout.

* As a user I want to be able to create a post about my experience at restaurants in my area, and include an image.

* As a registered user, I want to be able to discuss restaurant experiences with users in my area.

### Acceptance Criteria

* It's done when the `/` homepage route renders a list of all blogs from the database.

* It's done when the `/user/:id` route renders an individuals blog based on the route parameter id.

* It's done when the `/login` route renders a form to log in and a form to create a new account.

* It's done when an existing user can enter their credentials on the login page to create a session on the server.

* It's done when a new user can create an account on the login page and then be immediately logged in with a session.

* It's done when a user on the profile page can use the form to create a new post the database.

* It's done when a user on the post page can select a "Delete" button to remove their post from the database.

* It's done when a logged-in user can select a "Logout" button to remove their session.

* It's done when the API routes to create and delete posts are protected from non logged-in users.

* It's done when the code is organized using MVC architecture.

* It's done when the views are rendered with Handlebars.js templates.

## Specifications

* The database models have the following fields and associations:

  * `UserLogin`

    * `username`

    * `email`

    * `password`

  * `Post`

    * `name`

    * `description`

    * `edit button`

    * `delete button`

    * `date_created`

    * `user_id`: foreign key that references `User.id`

  * Users have a list of other blogs, and any personal blog belongs to a user.

    * If a user is deleted, all associated blogs are also deleted.

---
