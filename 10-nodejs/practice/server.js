import express from 'express';
import cors from 'cors'; // Import cors

const data = [];
const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// GET request for the root route
app.get('/', (req, res) => {
   res.status(200).send({
      message: 'Hello, I am here!',
   });
});

// GET request for the /home route
app.get('/home', (req, res) => {
   res.status(200).send({
      status: 200,
      data,
   });
});

// POST request for the /home route
app.post('/home', (req, res) => {
   console.log('Received data:', req.body);

   // Push received data to the array
   data.push(req.body);

   console.log('Data successfully added to the array.');

   // Send response back to the client
   res.status(201).send({
      status: 201,
      message: 'Data successfully added!',
      data: req.body,
   });
});

// Start the server
app.listen(port, "0.0.0.0", () => {
   console.log(`Server running on http://0.0.0.0:${port}`);
});
