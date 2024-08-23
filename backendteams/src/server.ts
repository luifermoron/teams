import app from './index';  // Import the app from your main file

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default server;  // Export the server instance for testing
