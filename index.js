// API KEY: wSlcKl1LSOpHXf164FTShbQZC4cmu1VWTJiipnFk

const url = "https://developer.nps.gov/api/v1/parks?&api_key=wSlcKl1LSOpHXf164FTShbQZC4cmu1VWTJiipnFk"

// let dropdown = document.getElementById('states-dropdown');
// dropdown.length = 0;

// let defaultOption = document.createElement('option');
// defaultOption.text = 'Select a state';

// dropdown.add(defaultOption);
// dropdown.selectedIndex = 0;

// fetch(url)  
//   .then(  
//     function(res) {  
//       if (res.status !== 200) {  
//         console.log('Looks like there was a problem. Status Code: ' + 
//           res.status);  
//         return;  
//       }

//       // Examine the text in the response  
//       res.json().then(function(nationalParks) {  
//         let option;
    
//     	for (let i = 0; i < nationalParks.data.length; i++) {
//           option = document.createElement('option');
//       	  option.text = nationalParks.data[i].states;
//       	  option.value = nationalParks.data[i].states;
//       	  dropdown.add(option);
//     	}    
//       });  
//     }  
//   )  
//   .catch(function(err) {  
//     console.error('Fetch Error -', err);  
//   });






// // fetch(url)
// // .then(function() {

// })
// .catch(function() {

// });

// function fetchParks() {
//    return fetch(url)  
//    .then(res => res.json())
//    .then(json => renderParks(json))
// }

// function renderParks(parks) {
//     const dropStates = document.querySelector('select')
//     parks.forEach(park => {
//         const h4 = document.createElement('h4')
//         h4.innerHTML = park.name
//         dropStates.appendChild(h4)
//     })
// }

// document.addEventListener('DOMContentLoaded', function() {
//     fetchParks()
// });
      

// // function fetchBooks() {
// //     return fetch('https://anapioficeandfire.com/api/books')
// //     .then(res => res.json())
// //     .then(json => renderBooks(json))
// //   }
  
// //   function renderBooks(books) {
// //     const main = document.querySelector('main');
// //     books.forEach(book => {
// //       const h2 = document.createElement('h2');
// //       h2.innerHTML = book.name;
// //       main.appendChild(h2);
// //     });
// //   }
  
// //   document.addEventListener('DOMContentLoaded', function() {
// //     fetchBooks();
// //   });
  