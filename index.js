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
            option = document.createElement('option')
            option.text = parks.data[i].activities[0].name
            option.value = parks.data[i].activities[0].name
            acsDrop.append(option)
    }    
  }

// Event Listener for HTML Loaded
document.addEventListener('DOMContentLoaded', (e) => {
    renderActivities()
})

// Event Listener for Submit and Activities Selected
const wanderBtn = document.getElementById('submit')

const letsWander = wanderBtn.addEventListener('click', () => {
    const state = document.getElementById('states-dropdown')
    const activity = document.querySelectorAll('#activities-dropdown :checked')
    const selectedActivity = [...activity].map(option => option.value)
    const selectedState = [state].map(option => option.value)
    console.log(selectedState)
    console.log(selectedActivity)
    renderParks(selectedState, selectedActivity)
})

// Reset Event Listener
document.getElementById('reset').addEventListener('click', function() {
    location.reload()
  })

// Render Parks Function
const parkDiv = document.getElementById('park-results')

function renderParks(selectedState, selectedActivity) {
    console.log(selectedState)
    console.log(selectedActivity)

    let filteredParks = parks.data.filter(el => {
            return el.states.includes(selectedState)
                // && el.activities.name[0].includes("Guided Tours")
        }
    )

    console.log(filteredParks)

    for (let i = 0; i < filteredParks.length; i++) {
            const ul = document.createElement('ul')
            const img = document.createElement('img')
            const descrip = document.createElement('p')
            const directions = document.createElement('a')
            directions.innerText = 'Get Directions'
            directions.href = filteredParks[i].directionsUrl
            img.src = filteredParks[i].images[0].url
            ul.innerText = filteredParks[i].fullName
            descrip.innerText = filteredParks[i].description
            parkDiv.append(img, ul, descrip, directions) 
        }  
  }


  

