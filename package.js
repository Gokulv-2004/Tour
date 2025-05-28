document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const inputBox = document.getElementById('inputbox');
    const datalist = document.getElementById('places');


    // Mapping input to section IDs for scrolling
    const placeMap = {
    'MYSORE': 'one',
    'LALBAGH': 'two',
    'HAMPI': 'three',
    'GOKARNA': 'four',
    'MURUDESHWARA': 'five',
    'DANDELI': 'six',
    'SHRAVANBELGOLA': 'seven',
    'CHIKMAGALURE': 'eight',
    'ISKCON': 'nine',
    'JOG FALLS': 'ten',
    'SEASONAL(SPRING)': 'spring',
    'SEASONAL(SUMMER)': 'summer',
    'SEASONAL(MONSOON)': 'monsoon',
    'SEASONAL(WINTER)': 'winter'
};


    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent page reload

        const userInput = inputBox.value.toUpperCase();
        const sectionId = placeMap[userInput];

        if (sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            alert("Please choose a valid place from the list.");
        }
    });
});
/* admin page access of drop down*/
const places = [
  {
    name: "goa",
    desc: "Peaceful hill station in Tamil Nadu",
    img: "oote.jpg",
    price: 2500
  },
  {
    name: "don",
    desc: "Famous for beaches and parties",
    img: "rann,jpg",
    price: 4000
  }
  // Add more if needed
];

localStorage.setItem('places', JSON.stringify(places));
