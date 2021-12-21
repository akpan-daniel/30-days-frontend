let obj;
let content = document.getElementById("main");
fetch("./challenges.json")
  .then((res) => res.json())
  .then((data) => (obj = data))
  .then(() => {
    for (let el of obj) {
      let cont = `
      <div class="row__item">
        <div class="card">
          <img class="card__img" src="${el.image_url}" alt="Card image cap">
          <div class="card__body">

            <h5>Day - ${el.day}</h5>

            <p>${el.title}</p>
            
            
            </div>
            <a href="${el.link}" class="card__link">View Page</a>

        </div>
      </div>
      `;
      content.innerHTML += cont;
    }
  });
