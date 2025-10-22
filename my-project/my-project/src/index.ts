// Entry point: Sets up an Express server to serve the index page
// Import Express (web server framework)
// Import Express and path using CommonJS require for compatibility
import express from 'express';
import path from 'path';
// __dirname is available by default in CommonJS

// Create an Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Serve the index.html file when the user visits the root URL
app.get('/', (req: any, res: any) => {
	// __dirname is the directory of the current file
	// We use path.join to find the index.html file in the view folder
	res.sendFile(path.join(__dirname, 'view', 'index.html'));
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});

// You can still use your MVC classes here if you want to add more features