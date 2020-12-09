# Thought Bubble
## Contents
1. [Overview](#overview)
2. [Tech stack](#techstack)
3. [Setup](#setup)
4. [How to compose posts](#howtocomposeposts)

## Overview

A personal blog/personal diary website. Minimal in design, having consistent header and footer across all pages and blogs using EJS partials.

All posts are truncated to 100 words on the home page. There is a hidden page that allows you to compose your diary so that new pages can be created dynamically.

#### Home page,
![Home Page](https://i.ibb.co/DgPrfX8/1.jpg)
#### Compose page,
![Compose Page](https://i.ibb.co/FWRkGh0/2.jpg)
#### Blogs
![Blogs](https://i.ibb.co/SKMW508/3.jpg)
## TechStack

+ NodeJS
+ ExpressJS
+ EJS
+ Lodash
+ Bootstrap

## Setup

Before proceeding please download and install [NodeJS](https://nodejs.org/en/download/) because it is required.
1. Download/Clone the Repository
2. Navigate into the Repository folder on your disk using Terminal
3. Make sure that you have the Node and MongoDB installed
4. Run the following command to run the setup,`npm install`
5. Run server.js using node `node server.js`
6. Server will be running on port 3000.
7. To change the port open server.js locate the following and change:
    ```javascript
    app.listen(process.env.PORT||3000,()=>{
	console.log('server running on port 3000');
   });
    ```  

## HowToComposePosts

To go to the compose page for creating new post just headover to url bar and add `/compose` infront of the existing link. eg:

>https://my-thought-bubble.herokuapp.com/compose