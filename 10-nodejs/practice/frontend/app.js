const form = document.querySelector('.form');
console.log("🚀 ~ form:", form);

form.addEventListener("submit", (e) => {
   e.preventDefault();

   const name = form.children[0].value;
   const fatherName = form.children[1].value;

   console.log('child 1:', name);
   console.log('child 2:', fatherName);

   if (name !== '' && fatherName !== '') {
      console.log('Values are set');
      
      // Send data to the server using fetch
      fetch('http://localhost:3000/home', {
         method: 'POST', // Specify the method
         headers: {
            'Content-Type': 'application/json', // Set the content type
         },
         body: JSON.stringify({ // Send data as a JSON string
            name: name,
            fathername: fatherName
         }),
      })
         .then((response) => response.json()) // Convert the response to JSON
         .then((data) => console.log('Server response:', data))
         .catch((error) => console.error('Error:', error)); // Handle errors
      } else {
         console.log('Please fill in all fields');
   }
   // gettingData()
});

async function gettingData() {
   try {
      const response = await fetch('http://localhost:3000/home'); // Correct URL
      if (!response.ok) { // Check if the response is successful
         throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json(); // Parse JSON from response
      console.log(data, 'result'); // Log the parsed data
   } catch (error) {
      console.error('Error fetching data:', error); // Handle and log errors
   }
}

setInterval(() => {
   gettingData();
   
}, 10000);