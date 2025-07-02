# c465-fullstack
CS-465 Full Stack Development with MEAN

<<<<<<< HEAD

**Architecture**
This project uses different ways to build the parts users see and interact with. For the customer side, I used basic tools like HTML and JavaScript with Express to show pages and handle simple tasks. Later, I built the admin side using Angular, which works more like an app you’d install on your phone—fast, smooth, and able to update parts of the screen without reloading the whole page.

Behind the scenes, the app stores information in MongoDB, which is a type of database that doesn’t need a strict layout. This made it easier to save things like user details and trip info, and it worked well with the rest of the system since it uses a format (JSON) that all parts of the app can understand.

**Functionality**
JSON is just a way to organize and send data between the front and back parts of the app. It’s not the same as JavaScript, but they work well together. For example, when a user submits a form, the data is sent as JSON to the server, and the server sends back a response—also in JSON.

While building the app, I cleaned up and improved my code in places. I combined repeated parts into reusable pieces, like making one trip form that works in multiple places. This saved time and made the app easier to update later.

**Testing**
To make sure everything worked properly, I tested how the app talks to the server. I used tools like Postman to check that each part—like getting data, adding new items, or deleting them—was doing what it should. Once I added secure admin login, testing got trickier. I had to check that only logged-in users could access certain features and that unauthorized users were blocked.

I also learned how the app handles different types of requests and how it keeps things secure using tokens that prove someone is logged in.

**Reflection**
This course helped me learn how to build a full working web app from start to finish. I got better at using tools like Angular, Express, and MongoDB, and I learned how to make the app secure for users and admins.
=======
>>>>>>> module7
