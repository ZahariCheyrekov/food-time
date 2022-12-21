# FoodTime

You can visit the project from here: https://food-time-4e006.web.app/

# Table of Contents
  - <a href="#about">About this Project</a>
  - <a href="#how-to-run">How to run the app on your computer</a>
  - <a href="#features">Features</a>
  - <a href="#future-features">Future Features</a>
  - <a href="#project-structure">Project Structure</a>
  - <a href="#tools">Tools</a>
  - <a href="#application-pictures">Application Pictures</a>

# <p id="about">About this project</p>

FoodTime is a web application ordering platform that allows users to buy fresh and healthy food from anywhere in the world. It offers a full range of delivery solutions built by restaurant people, for restaurant people.

# <p id="how-to-run">How to run the app on your computer</p>

1. You can download the project ZIP file or you can clone the repository directly.
2. Open the project with IDE/Code Editor.
3. Open terminal with `Ctrl + J`.
4. Navigate to food-timer folder with `cd foodtime`.
4. Then navigate to `client` folder with `cd client`.
5. Install all modules that are listed on `package.json` file and their dependencies.
6. Type `npm start` to run the project in the browser. It will start on `http://localhost:3000`, but you can change it to another if necessary. Type `y` to do it.
7. Explore FoodTime.

# <p id="features">Features</p>

- <strong>Authentication</strong>
  - Login
    - log in with existing account
     
  - Register
    - create new account

- <strong>Cities</strong>
  - City
    - browse cities
    - view cities
    - create new city

- <strong>Review</strong>
  - User
    - browse meal reviews
    - create review
  
  - Guest 
    - browse meal reviews

- <strong>Meal</strong>
  - Author
    - view meal
    - read meal
    - create meal 
    - delete meal 
    - review on meal  
  
  - User
    - view meal
    - read meal
    - like meal 
    - review on meal

- <strong>Profile</strong>
  - Author
    - view created meals
    - view liked meals

# <p id="future-features">Future Features</p>

- <strong>Connections</strong>
  - Followers
    - follow user
    - unfollow user
    - block user
    - unblock user
    
  - Following
    - see who follows you
    - remove user from followers
    - block user 
    - unblock user

- <strong>Chat</strong>
  - send message to user or restaurant
  
- <strong>Discussions</strong>
  - start discussion
  - invite users to discussion
  - join discussion
  
- <strong>Giveaway</strong>
  - create meal giveaway
  - enter meal giveaway
  - invite to giveaway

- <strong>Blog</strong>
  - start meal blog
  - explore other people blogs

# <p id="project-structure">Project Structure</p>
  - Client
    - auth
      - login - login component for user authentication
      - register - register component for user authentication
    - core
      - guards
        - auth guard - navigates users to the login component if they are not authenticated 
        - not auth guard - navigates users to the home component if they try to access login or register routes
      - interfaces
        - folder that stores all of the application interfaces
      - services 
        - auth - responsible for making login or register request to the server
        - city - responsible for accessing City model and manipulating the data
        - local storage - responsible for storing user data and tokens in the browser application tab
        - meal - responsible for accessing Meal schema model and CRUD operations related to meals
        - review - responsible for accessing Review schema model and creating reviews on meal
        - upload - responsible for uploading image files to the Cloudinary and returning the corresponding data
        - user - responsible for User model and CRUD operations related to user and data of it
      
      
      
      
      
  - Server













