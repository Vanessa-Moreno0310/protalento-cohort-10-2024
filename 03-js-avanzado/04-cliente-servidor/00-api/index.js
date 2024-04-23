console.log("Comsumir API: https://jsonplaceholder.typicode.com/");

// URL de mi API
const API_URL = 'https://jsonplaceholder.typicode.com/';
let recurs = 'posts';
// GET para consumir y recuperar un recurso del API
fetch('https://jsonplaceholder.typicode.com/posts/1')
  // .then((response) => response.json())  // cuando responda el API
  .then(function(response) { // cuando responda el API // callback
    // console.log("response", response);
    return response.json();
  })
  .then((jsonData) => {
    const { id, title } = jsonData;
    console.log(`El post #${id} tiene se titula "${title}".`);
    console.log(jsonData);
    // return {...jsonData};
  });