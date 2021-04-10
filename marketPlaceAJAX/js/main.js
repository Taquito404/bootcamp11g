let cardsContainer = document.getElementById("container");
let articlesObject = {};
//"https://ajaxclass-1ca34.firebaseio.com/11g/t5/marketplace.json"

const setArticle = () => {
  let inputs = document.querySelectorAll("form input[type='text']");
  inputs.forEach((input) => (articlesObject[input.name] = input.value));
  let select = document.getElementById("category-article");
  let category = select.options[select.selectedIndex].value;

  articlesObject = { ...articlesObject, category };

  inputs.forEach((input) => (input.value = ""));
  saveArticle(articlesObject);

  while (cardsContainer.lastElementChild) {
    cardsContainer.removeChild(cardsContainer.lastElementChild);
  }
  printCards(getArticlesCollection());
};
document.getElementById("save-article").addEventListener("click", setArticle);

const saveArticle = (element) => {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let response = xhttp.responseText;
      printCards(getArticlesCollection());
    }
  };
  xhttp.open(
    "POST",
    "https://ajaxclass-1ca34.firebaseio.com/11g/t5/marketplace.json",
    false
  );
  xhttp.send(JSON.stringify(element));
};
const getArticlesCollection = () => {
  let articlesCollection;
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      articlesCollection = JSON.parse(xhttp.response);
    }
  };
  xhttp.open(
    "GET",
    "https://ajaxclass-1ca34.firebaseio.com/11g/t5/marketplace.json",
    false
  );
  xhttp.send();

  return articlesCollection;
};
getArticlesCollection();

const printCards = (dataToPrint) => {
  while (cardsContainer.lastElementChild) {
    cardsContainer.removeChild(cardsContainer.lastElementChild);
  }

  for (key in dataToPrint) {
    let { name, url, description, price, category } = dataToPrint[key];

    let colDiv = document.createElement("div");
    colDiv.classList.add("col-12", "col-md-5", );

    let divCard = document.createElement("div");
    divCard.classList.add("card","p-1", "m-4", "bg-dark",);
    let imgCard = document.createElement("img");
    imgCard.classList.add("card-img-top");
    imgCard.src = url;
    let divCardBody = document.createElement("div");
    divCardBody.classList.add("card-body","text-white","flex-column","aling-content-center");
    let h1CardName = document.createElement("h1");
    h1CardName.classList.add("card-title","text-white","text-center");
    let h3CardPrice = document.createElement("h3");
    let pCardDescription = document.createElement("p");
    pCardDescription.classList.add("card-text","text-white");
    let pCardCategory = document.createElement("p");
    pCardCategory.classList.add("card-text", "text-white-50");
    let button = document.createElement("button");
    button.classList.add("btn", "btn-outline-warning", "btn-delete" );
    button.dataset.articleKey = key;

    let h1CardNameTx = document.createTextNode(name);
    let h3CardPriceTx = document.createTextNode(price);
    let pCardDescriptionTx = document.createTextNode(description);
    let pCardCategoryTx = document.createTextNode(category);
    let buttonTx = document.createTextNode("Eliminar");

    h1CardName.appendChild(h1CardNameTx);
    h3CardPrice.appendChild(h3CardPriceTx);
    pCardDescription.appendChild(pCardDescriptionTx);
    pCardCategory.appendChild(pCardCategoryTx);
    button.appendChild(buttonTx);

    divCardBody.appendChild(h1CardName);
    divCardBody.appendChild(h3CardPrice);
    divCardBody.appendChild(pCardDescription);
    divCardBody.appendChild(pCardCategory);
    divCardBody.appendChild(button);

    divCard.appendChild(imgCard);
    divCard.appendChild(divCardBody);

    colDiv.appendChild(divCard);

    cardsContainer.appendChild(colDiv);

    document.querySelectorAll(".btn-delete").forEach((button) => {
      button.addEventListener("click", deleteArticle);
    });
  }
};

const deleteArticle = (event) => {
  let articleKey = event.target.dataset.articleKey;

  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
    }
  };
  xhttp.open(
    "DELETE",
    `https://ajaxclass-1ca34.firebaseio.com/11g/t5/marketplace/${articleKey}/.json`,
    false
  );
  xhttp.send();

  printCards(getArticlesCollection());
  $("#delete-modal").modal("show");
};

printCards(getArticlesCollection());

const filterByCategory = (event) => {
  let arr = getArticlesCollection();

  let select = document.getElementById("filter-category");
  let category = select.options[select.selectedIndex].value;

  let newObject = {};

  if (event.target.value === "Todo") {
    printCards(arr);
  } else {
    for (key in arr) {
      if (arr[key].category == category) {
        newObject[key] = arr[key];
      }
    }

    printCards(newObject);
  }
};

document
  .getElementById("filter-category")
  .addEventListener("change", filterByCategory);
