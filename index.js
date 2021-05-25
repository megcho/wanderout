// API KEY: wSlcKl1LSOpHXf164FTShbQZC4cmu1VWTJiipnFk

window.addEventListener('DOMContentLoaded', (e) => {
    console.log('DOM fully loaded and parsed')
})

// Assign API URL to a constant
const url = 'https://developer.nps.gov/api/v1/parks?api_key=wSlcKl1LSOpHXf164FTShbQZC4cmu1VWTJiipnFk&limit=500'

// Fetch
let parks = null
getParks()

function getParks() {
	fetch(url)
		.then(res => {
			return res.json()
		})
		.then(data => {
			parks = data
			console.log(parks)
		})
}

// Event Listener for Submit and Selected State
const wanderBtn = document.getElementById('submit')

const letsWander = wanderBtn.addEventListener('click', () => {
    const state = document.getElementById('states-dropdown')
    const selectedState = [state].map(option => option.value)
    console.log(selectedState)
    renderParks(selectedState)
})

// Reset Event Listener
document.getElementById('reset').addEventListener('click', function() {
    location.reload()
  })

// Render Parks Function
const parkDiv = document.getElementById('park-results')
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

  

function renderParks(selectedState) {
    console.log(selectedState)
    let filteredParks = parks.data.filter(el => {
            return el.states.includes(selectedState)
        }
    )
    console.log(filteredParks)


    for (let i = 0; i < filteredParks.length; i++) {
            const ul = document.createElement('ul')
            const img = document.createElement('img')
            const descrip = document.createElement('p')
            const directions = document.createElement('a')
            const liker = document.createElement('button')
            liker.setAttribute("id", "liker-btn")
            liker.textContent = EMPTY_HEART
            directions.innerText = 'Get Directions'
            directions.href = filteredParks[i].directionsUrl
            directions.target = '_blank'
            img.src = filteredParks[i].images[0].url
            ul.innerText = filteredParks[i].fullName
            descrip.innerText = filteredParks[i].description
            parkDiv.append(img, ul, descrip, directions, liker) 
        }  
        const button = document.getElementById('liker-btn')
        button.addEventListener('click', toggle)
        
        function toggle() {
          const like = button.textContent
          if(like===EMPTY_HEART) {
            button.textContent = FULL_HEART
          } else {
            button.textContent = EMPTY_HEART
          }
        }
  }


