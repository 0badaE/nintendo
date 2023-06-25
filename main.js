let name = document.querySelector("h3")
let price = document.querySelector("#price")
let sales = document.querySelector("#sales")
let releaseYear = document.querySelector("#releaseYear")




document.querySelector('#b1').addEventListener('click', setNum);
document.querySelector('#b2').addEventListener('click', setNum);
document.querySelector('#b3').addEventListener('click', setNum);
document.querySelector('#b4').addEventListener('click', setNum);
document.querySelector('#b5').addEventListener('click', setNum);

function setNum(event) {
  const id = event.target.getAttribute('id');

  // Check if the id attribute exists
  if (id) {
    const num = id.charAt(1);
    const url = `https://outstanding-kilt-deer.cyclic.app/api/${num}`;
    

    fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        name.textContent = data["name"]
        price.textContent = `Price: $${data["price"]}`
        sales.textContent = `Sales: ${data["total number of sales"]}`
        releaseYear.textContent = `Release Year: ${data["release year"]}`
        document.getElementById('#img').src = data["image"]
      })
      .catch(err => {
        console.log(`error ${err}`);
      });
  }
}