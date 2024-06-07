# ExpTraxk

ExpTraxk is a simple project created using the MERN stack. The website allows you to track your daily and monthly expense. The website provides a simple and easy visualization of the expense you have made along with your income you can categorize you expense and add custom labels as well and the Dognut chart provides a total expense with the different labels. The website also lets you to see the expenses you have made in a particular month

## Features

- Add expense and income
- Custom labels
- Easy visualization of you expense

## Getting Started

Follow these instructions to set up and run the BlogZone project on your local machine.

### How to Use It

1. **Clone the Repository**

    ```bash
    git clone https://github.com/Gokulashik22014/ExpTraxk.git
    cd ExpTraxk
    ```

2. **Setting Up the Client**

    We use React for the frontend along with Tailwind CSS to style the website. Follow these steps to configure them:

    a. Install dependencies:
    
   ```bash
   npm install
   ```

    b. Run the development server:
    
   ```bash
   npm run dev
   ```

        Wait for the server to start.

3. **Setting Up the Server**

    For the backend, we use Express and Node.js, and for the database, we use MongoDB. Follow these steps to set up the server:

    a. Create a MongoDB account, set up a cluster, and create a collection.

    b. Get the URI of your MongoDB cluster and add it to a `.env` file in the server directory with the name `MONGO_URI`. Also, specify your port number in the `.env` file with the name `PORT`.

        Example `.env` file:

   ```plaintext
   MONGO_URI=your_mongodb_uri
   PORT=3000
   ```
    e. Install dependencies:
    
   ```bash
   npm install
   ```

    f. Start the server:
    
   ```bash
   npm start
   ```

Thanks for taking the time to visit this repo.The code is working fine but however at the start of the application it is bit buggy. The Dougnut chart is updating but updates wrongly the first time but when page is refreshed the chart is back to normal and the overall website is slow 😅 if you have any suggestions to improve it please let me know.  Happy Coding!
