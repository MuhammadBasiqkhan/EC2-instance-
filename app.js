const express = require('express');
const app = express();

// Define the API route
app.get('/api/helloworld', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

// Set the port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
