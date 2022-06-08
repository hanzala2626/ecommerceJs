const wrapper = document.querySelector('.sliderWrapper');
const menuItems = document.querySelectorAll('.menuItem');

// wrapper.style.transform = translateX(-100vw)

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];
  
  let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

//around the size button select method.
currentProductSizes.forEach((size) =>{
size.addEventListener('click',()=>{
  currentProductSizes.forEach((size) => {
    size.style.backgroundColor = "wheat";
    size.style.color = "tomato"
  })
  size.style.backgroundColor = "tomato";
  size.style.color = "wheat"
})
});

// payment form popup by clicking buy now

const productButton = document.querySelector('.productButton');
const payment = document.querySelector('.payment');
const close = document.querySelector('.close');

productButton.addEventListener('click',()=>{
  payment.style.display = 'flex'
});

close.addEventListener('click',()=>{
  payment.style.display = 'none'
});

// save form information and customer greeting
const payButton = document.querySelector('.payButton');

payButton.addEventListener('click',()=>{
  alert('Item Placed Succesfully');
  payment.style.display = 'none';
});




// Sign in button Working
const signInBtn = document.querySelector('.signInBtn');
const signInForm = document.querySelector('.signInForm');
const closeS = document.querySelector('.closeS');

signInBtn.addEventListener('click',()=>{

  signInForm.style.display = 'flex';
});

closeS.addEventListener('click',()=>{
  signInForm.style.display = 'none'
});
// save form information and
const signInButton = document.querySelector('.signInButton');

signInButton.addEventListener('click',()=>{
  alert('Logged In Succesfully');
  signInForm.style.display = 'none';
});