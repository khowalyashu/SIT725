var express = require("express")
var app = express()
var port = process.env.port || 3000
const mongoose = require('mongoose');

// Middleware
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
mongoose.connect('mongodb://localhost:27017/myprojectDB', {
useNewUrlParser: true,
useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
  
    // Add sample project once when server starts
    const sampleProject = new Project({
      title: "Kitten 4",
      image: "images/kitten-1.jpg",
      link: "About Kitten 4",
      description: "Demo description about kitten 4"
    });
  
    sampleProject.save()
      .then(() => console.log("Sample project saved!"))
      .catch(err => console.error("Error saving sample project:", err));
  });

// 2. Define your schema and model
const ProjectSchema = new mongoose.Schema({
title: String,
image: String,
link: String,
description: String,
});
const Project = mongoose.model('Project', ProjectSchema);


// 3. REST API route
app.get('/api/project', async (req, res) => {
const projects = await Project.find({});
res.json({ statusCode: 200, data: projects, message: 'Success' });
});

// 4. Start server
app.listen(port, () => {
console.log(`App listening on port ${port}`);
});
