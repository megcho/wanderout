// API KEY: wSlcKl1LSOpHXf164FTShbQZC4cmu1VWTJiipnFk

// Assign API URL to a constant
const url = 'https://developer.nps.gov/api/v1/parks?&api_key=wSlcKl1LSOpHXf164FTShbQZC4cmu1VWTJiipnFk&limit=500'

// // Click Event Listener and Activities Selected
const wanderBtn = document.getElementById('submit')

wanderBtn.addEventListener('click', () => {
    const checked = document.querySelectorAll('#activities-dropdown :checked')
    const selected = [...checked].map(option => option.value)
    alert(selected)
})



// Activities Dropdown
const acsDrop = document.getElementById('activities-dropdown')
acsDrop.length = 0

const acsDropDefault = document.createElement('option')
acsDropDefault.text = 'How do you wander?'

acsDrop.add(acsDropDefault)
acsDrop.selectedIndex = 0

// Fetch API and render activities
fetch(url)  
  .then(res => res.json().then(nationalParks => {  
    let option

    for (let i = 0; i < nationalParks.data.length; i++) {
        for (let j = 0; j < nationalParks.data.length; j++) {
            option = document.createElement('option')
            option.text = nationalParks.data[i].activities[j].name
            option.value = nationalParks.data[i].activities[j].name
            acsDrop.add(option)
        }
    }    
  })
)  
// Catch Block
.catch(err => {  
console.error('Fetch Error', err)
})
    





//     res.json()).then
//     function(res) {  
//       if (res.status !== 200) {  
//         console.log('Looks like there was a problem. Status Code: ' + 
//           res.status)
//         return
//       }

//       // Examine the text in the response  
//       res.json().then(function(nationalParks) {  
//         let option
    
//     	for (let i = 0; i < nationalParks.data.length; i++) {
//             for (let j = 0; j < nationalParks.data.length; j++) {
//                 option = document.createElement('option')
//                 option.text = nationalParks.data[i].activities[j].name
//                 option.value = nationalParks.data[i].activities[j].name
//                 acsDrop.add(option)
//             }
//     	}    
//       })
//     }  
//   )  
//   .catch(function(err) {  
//     console.error('Fetch Error -', err)
//   })



// //NPS Dropdown
// let parksDrop = document.getElementById('nps-dropdown')
// parksDrop.length = 0

// let parksDropDefault = document.createElement('option')
// parksDropDefault.text = 'Select a national park'

// parksDrop.add(parksDropDefault)
// parksDrop.selectedIndex = 0

// fetch(url)  
//   .then(  
//     function(res) {  
//       if (res.status !== 200) {  
//         console.log('Looks like there was a problem. Status Code: ' + 
//           res.status)
//         return
//       }

//       // Examine the text in the response  
//       res.json().then(function(nationalParks) {  
//         let option
    
//     	for (let i = 0; i < nationalParks.data.length; i++) {
//           option = document.createElement('option')
//       	  option.text = nationalParks.data[i].fullName
//       	  option.value = nationalParks.data[i].fullName
//       	  parksDrop.add(option)
//     	}    
//       })
//     }  
//   )  
//   .catch(function(err) {  
//     console.error('Fetch Error -', err)
//   })



//THINGS TO WORK ON
//CREATE FUNCTION FOR FETCH
//CONNECT THE STATES TO THE PARKS TO THE ACTIVITIES
//ADD IMAGES TO DISPLAY AND DESCRIPTION
//SO MAYBE STATE -> ACTIVITIES -> PARK WITH IMAGE AND DESCRIPTION

