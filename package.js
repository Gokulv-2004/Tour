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
    'JOG FALLS': 'ten'
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
var places=[];
async function loadPlaces() {
    try {
      const response = await fetch('places.json');
      if (!response.ok) throw new Error('Failed to load places.json');
      places = await response.json();
      populateDropdown();
    } catch (err) {
      console.error(err);
      alert("Error loading places.");
    }
  }



localStorage.setItem('places', JSON.stringify(places));
