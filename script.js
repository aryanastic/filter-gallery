const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");
// adding the active class to the button getting clicked
const filterCards = e => {
  document.querySelector(".filter_buttons .active").classList.remove("active");
  e.target.classList.add("active");

  const selectedCategory = e.target.getAttribute("data-name");
//  getting the card data name and storing it as card category .
  filterableCards.forEach(card => {
    const cardCategory = card.getAttribute("data-name");
    
// filtering wheather to show a card or not.
    if (selectedCategory === "all" || selectedCategory === cardCategory) {
      card.classList.remove("hide"); // will show
    } else {
      card.classList.add("hide"); // will hide
    }
  });
};
const lightbox= document.getElementById("lightbox")
const lightboxImg = document.getElementById("lightboxImg")
const closeBtn = document.getElementById("close-btn")

filterableCards.forEach(card => {
  const img = card.querySelector("img");
  img.addEventListener("click", () => {
    lightbox.style.display= "flex";
    lightboxImg.src= img.src;
  });
});
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});
lightbox.addEventListener("click", (e)=> {
  if( e.target === lightbox){
    lightbox.style.display = "none";
  }
});

// Initially show all cards
filterableCards.forEach(card => card.classList.remove("hide"));

// click listeners for button cards
filterButtons.forEach(button => 
  button.addEventListener("click", filterCards)
);
