window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed')
    getParks()
    addEventListeners()
})


// Fetch
let parks

function getParks() {
  const url = 'https://developer.nps.gov/api/v1/parks?api_key=wSlcKl1LSOpHXf164FTShbQZC4cmu1VWTJiipnFk&limit=500'
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
function addEventListeners() {
  const wanderBtn = document.getElementById('submit')

  wanderBtn.addEventListener('click', () => {
      const state = document.getElementById('states-dropdown')
      const selectedState = [state].map(option => option.value) // array with the state selected
      console.log(selectedState)
      renderParks(selectedState) 
  })
}


// Render Parks Function
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

function renderParks(selectedState) {
  console.log("hello")
    const parkDiv = document.getElementById('park-results')
    parkDiv.innerHTML = ' '
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
            liker.textContent = EMPTY_HEART
            directions.innerText = 'Get Directions'
            directions.href = filteredParks[i].directionsUrl
            directions.target = '_blank'
            img.src = filteredParks[i].images[0].url
            ul.innerText = filteredParks[i].fullName
            descrip.innerText = filteredParks[i].description
            parkDiv.append(img, ul, descrip, directions, liker) 
            liker.addEventListener('click', likePark)
            }
        }  
  

  const likePark = (e) => {
    const liker = e.target
    const like = liker.textContent
    if(like===EMPTY_HEART) {
      liker.textContent = FULL_HEART
    } else {
      liker.textContent = EMPTY_HEART
    }
  }

  // dont put things in global
  