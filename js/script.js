let elList = document.querySelector(".card__list");

for (let pokemon of pokemons) {
  //CREATING ELEMENT
  let newCardItem = document.createElement("li");
  let newCardImg = document.createElement("img");
  let newCardHr = document.createElement("hr");
  let newCardBody = document.createElement("div");
  let newCardBodyImg = document.createElement("img");
  let newCardBodyTitle = document.createElement("p");
  let newCardBodyText = document.createElement("p");
  let newCardBodyDesc = document.createElement("p");
  let newCardBodyDescTwo = document.createElement("p");
  //SET ATTRIBUTE
  newCardItem.setAttribute("class", "card__item");
  newCardImg.setAttribute("class", "card__img");
  newCardImg.setAttribute("src", pokemon.img);
  newCardImg.setAttribute("width", "157");
  newCardImg.setAttribute("height", "157");
  newCardHr.setAttribute("class", "hr");
  newCardBody.setAttribute("class", "card__body position-relative");
  newCardBodyImg.setAttribute("class", "position-absolute top-0 end-0 me-4");
  newCardBodyImg.setAttribute("src", "./img/heart.svg");
  newCardBodyImg.setAttribute("width", "30");
  newCardBodyTitle.setAttribute("class", "card__title");
  newCardBodyDesc.setAttribute("class", "card__desc");
  newCardBodyDescTwo.setAttribute("class", "card__desc ms-4");
  //TEXT CONTENT
  newCardBodyTitle.textContent = pokemon.name;
  newCardBodyText.textContent = pokemon.type;
  newCardBodyDesc.textContent = pokemon.weight;
  if (pokemon.candy_count == undefined) {
    newCardBodyDescTwo.textContent = "Indefinite";
  } else {
    newCardBodyDescTwo.textContent = pokemon.candy_count + " age";
  }
  //APPEND CHILD
  elList.appendChild(newCardItem);
  newCardItem.appendChild(newCardImg);
  newCardItem.appendChild(newCardHr);
  newCardItem.appendChild(newCardBody);
  newCardBody.appendChild(newCardBodyImg);
  newCardBody.appendChild(newCardBodyTitle);
  newCardBody.appendChild(newCardBodyText);
  newCardBody.appendChild(newCardBodyDesc);
  newCardBody.appendChild(newCardBodyDescTwo);
}
