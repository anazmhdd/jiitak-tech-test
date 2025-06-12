const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Mohammed Anas – DevOps Intern Project</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f0f4f8;
          color: #333;
          padding: 40px;
        }
        .container {
          max-width: 900px;
          margin: auto;
          background: #fff;
          padding: 30px 40px;
          border-radius: 12px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
        }
        h1 {
          color: #2c3e50;
        }
        h2 {
          color: #34495e;
          margin-top: 30px;
        }
        p {
          font-size: 18px;
          line-height: 1.6;
        }
        ul {
          font-size: 18px;
          margin-left: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Mohammed Anas – DevOps Intern Project</h1>
        <p>
          Hi, I'm Mohammed Anas, a passionate tech enthusiast with a Master's degree in Computer Applications (MCA). 
          I have hands-on experience in React, Flutter, and Python, and I’m keen to explore more in the fields of Web
           Development and DevOps. <BR> <BR> I’m driven by curiosity and a love for building intuitive, impactful solutions. With 
           strong communication and leadership skills, I’ve actively contributed beyond academics as the President of 
           the Environment Club in school and as a Tech Event Coordinator for Hestia 2024 at TKM College of Engineering. 
           I’m always ready to learn, adapt, and grow in the dynamic world of technology.


        <h2>About This Project</h2>
        <p>
          This project is part of a DevOps intern technical test and demonstrates the ability to:
        </p>
        <ul>
          <li>Build a simple web application using Node.js</li>
          <li>Containerize the application using Docker</li>
          <li>Deploy it on AWS EC2</li>
          <li>Implement Infrastructure as Code using Terraform </li>
          <li>Set up basic CI/CD pipeline</li>
        </ul>

        <h2>Tech Stack & Implementation</h2>
        <ul>
          <li>Node.js and Express for the backend server</li>
          <li>Docker for containerization</li>
          <li>AWS EC2 for deployment</li>
          <li>Terraform for provisioning cloud resources</li>
          <li>GitHub for version control</li>
        </ul>

       
    
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
