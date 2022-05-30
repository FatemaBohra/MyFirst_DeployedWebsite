const data = {
  mainTitle: "My Favourite Books",
  cardContents: [
    {
      name: "Three Men In A Boat",
      imageLink:
        "https://static.kopykitab.com/image/cache/data/ratna-sagar/rs0015-155x235.jpg",
    },
    {
      name: "The White Tiger",
      imageLink:
        "https://d30a6s96kk7rhm.cloudfront.net/original/978/184/887/9781848878082.jpg",
    },
    {
      name: "The edge of power",
      imageLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6JGRw8Iyv_pLNfZU9rIucfkG2VKKkLJ2_hA&usqp=CAU",
    },
    {
      name: "Ikigai",
      imageLink:
        "https://images-na.ssl-images-amazon.com/images/I/71tbalAHYCL.jpg",
    },
  ],
  userData: { name: "FatemaBohra", tagLine: "Baby steps into the world of web!" },
};


// Plug in title data to HTML
let mainTitleElement = document.getElementById("main-title");
mainTitleElement.innerHTML += data.mainTitle;


// Create template for card content
let getCardStructure = (name, imageLink) => {
  return `<div class="col-12 col-sm-6 mb-4">
  <div class="tile">
    <div class="tile-text text-center">
      <h5>${name}</h5>
    </div>
    <img 
      src="${imageLink}" />
  </div>
</div>`;
};

let cardRow = document.getElementById("card-row");

// Plug in card data to HTML
data.cardContents.forEach((cardContent) => {
  let { name, imageLink } = cardContent;
  cardRow.innerHTML += getCardStructure(name, imageLink);
});

// Create template for footer content
let getFooterStructure = (name, tagLine) => {
  return `<h3 class="me-3"><i class="fas fa-heart"></i> ${name}</h3>
    <p>${tagLine}</p>`;
};

let footerContent = document.getElementById("footer");
let { name, tagLine } = data.userData;

// Plug in footer data to HTML
footerContent.innerHTML += getFooterStructure(name, tagLine);
