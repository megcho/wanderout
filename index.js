// API KEY: wSlcKl1LSOpHXf164FTShbQZC4cmu1VWTJiipnFk

// Assign API URL to a constant
const url = 'https://developer.nps.gov/api/v1/parks?api_key=wSlcKl1LSOpHXf164FTShbQZC4cmu1VWTJiipnFk&limit=500'

// Fetch
let parks = null
getParks()

function getParks(){
	fetch(url)
		.then(res => {
			return res.json()
		})
		.then(data => {
			parks = data
			console.log(parks)
            renderActivities()
		})
}

// Render Activities Variable and Function
const acsDrop = document.getElementById('activities-dropdown')
acsDrop.length = 0

const acsDropDefault = document.createElement('option')
acsDropDefault.text = 'How do you wander?'
acsDropDefault.disabled = true

acsDrop.add(acsDropDefault)
acsDrop.selectedIndex = 0
function renderActivities() {  
    let option
    for (let i = 0; i < parks.data.length; i++) {
        for (let j = 0; j < parks.data.length; j++) {
            option = document.createElement('option')
            option.text = parks.data[i].activities[j].name
            option.value = parks.data[i].activities[j].name
            acsDrop.add(option)
        }
    }    
  }

// Event Listener for HTML Loaded
document.addEventListener('DOMContentLoaded', (e) => {
    renderActivities()
})

// Event Listener for Submit and Activities Selected
const wanderBtn = document.getElementById('submit')

const letsWander = wanderBtn.addEventListener('click', () => {
    const selectedState = document.getElementById('states-dropdown')
    const checkedActivity = document.querySelectorAll('#activities-dropdown :checked')
    const selected = [...checkedActivity, selectedState].map(option => option.value)
    console.log(selected)
    renderParks()
})

// Render Parks Function
const parkDiv = document.getElementById('park-results')


function renderParks() {
    for (let i = 0; i < parks.data.length; i++) {
            const ul = document.createElement('ul')
            const img = document.createElement('img')
            const descrip = document.createElement('p')
            img.src = parks.data[i].images[0].url
            ul.innerText = parks.data[i].fullName
            descrip.innerText = parks.data[i].description
            parkDiv.append(ul, img, descrip)
        }  
  }


  





// assign fetch data to a variable
// use the variable in a function to populate dropdown
// use the variable in a function to populate parks 
// return the function to populate parks in the on click function