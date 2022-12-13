const myRequest = new Request('https://jsonplaceholder.typicode.com/posts');

fetch(myRequest, {
  method:'POST',
  body: JSON.stringify({
    name: 'João',
    idade: '17'
  }),
  headers:{
    'Content-type':'application/json; charset=UTF-8'
  }})
  .then(response => response.json())
  .then(json => console.log(json))

 


