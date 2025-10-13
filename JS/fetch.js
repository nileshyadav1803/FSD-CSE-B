const url = "https://api.github.com/users/nileshyadavny";

fetch(url)
  .then((resp) => {
    return resp.json();  
  })
  .then((data) => {
    console.log("data : ", data); 
  })
  .catch((err) => {
    console.log("error : ", err);  
  })
  .finally(() => {
    console.log("Last Statement"); 
  });
