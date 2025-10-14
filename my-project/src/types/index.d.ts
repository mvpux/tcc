const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware and routes can be set up here

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});