let obj;
let content = document.getElementById("main");
fetch("./challenges.json")
  .then((res) => res.json())
  .then((data) => (obj = data))
  .then(() => {
    for (let el of obj) {
      let cont = `
      <div class="col-md-6 col-lg-4">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${el.image_url}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${el.title}</h5>
          <p class="card-text">${el.title}</p>
          <a href="${el.link}" class="btn btn-primary">Day ${el.day}</a>
        </div>
      </div>
      </div>
      `;
      content.innerHTML += cont;
    }
  });
