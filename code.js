let inputVal = document.querySelector('#searchItem');
let fbNewLink = [];
let minPrice = document.querySelector('#minCheckBox');
let maxPrice = document.querySelector('#maxCheckBox');

let minVal;
let maxVal;

let city = [
  'portland',
  'la',
  'dallas',
  'houston',
  'denver',
  'chicago',
  'jacksonville',
  'dc',
  'atlanta',
  'boston',
];

let checkedBox = () => {
  if (minPrice.checked) {
    console.log('works');
    document.getElementById('minPriceInput').style.visibility = 'visible';
  } else {
    document.getElementById('minPriceInput').style.visibility = 'hidden';
  }
};

$('.searchBtn').on('click', (e) => {
  e.preventDefault();
  minVal = document.getElementById('minPriceInput');

  if (inputVal.value != '' && minPrice.checked === false) {
    city.forEach((cities) => {
      let fbLink = `https://www.facebook.com/marketplace/${cities}/search?query=${inputVal.value}`;
      fbNewLink.push(fbLink);
    });
  } else if (inputVal.value != '' && minPrice.checked) {
    city.forEach((cities) => {
      let fbLink = `https://www.facebook.com/marketplace/${cities}/search?minPrice=${minVal.value.trim()}&query=${
        inputVal.value
      }`;
      fbNewLink.push(fbLink);
    });
  } else {
    alert('Please Enter something in the search field');
  }

  // Create a FB link with array of search Cities

  // Opens 10 pages with search iteam and different cities
  for (let i in fbNewLink) {
    window.open(fbNewLink[i]);
  }

  console.log(inputVal.value);
  inputVal.value = '';
  fbNewLink = [];
});
