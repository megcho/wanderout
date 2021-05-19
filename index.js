// API KEY: wSlcKl1LSOpHXf164FTShbQZC4cmu1VWTJiipnFk

// Assign API URL to a constant
const url = 'https://developer.nps.gov/api/v1/parks?api_key=wSlcKl1LSOpHXf164FTShbQZC4cmu1VWTJiipnFk&limit=500'


// Activities Dropdown
const acsDrop = document.getElementById('activities-dropdown')
acsDrop.length = 0

const acsDropDefault = document.createElement('option')
acsDropDefault.text = 'How do you wander?'
acsDropDefault.disabled = true

acsDrop.add(acsDropDefault)
acsDrop.selectedIndex = 0

// Activites Fetch

fetch(url)  
  .then(res => res.json().then(parks => {  
    let option
    for (let i = 0; i < parks.data.length; i++) {
        for (let j = 0; j < parks.data.length; j++) {
            option = document.createElement('option')
            option.text = parks.data[i].activities[j].name
            option.value = parks.data[i].activities[j].name
            acsDrop.append(option)
        }
    }    
  })
) 
.catch(err => {  
    console.error('Fetch Error', err)
    })


// Click Event Listener and Activities Selected
const wanderBtn = document.getElementById('submit')

const letsWander = wanderBtn.addEventListener('click', () => {
    const selectedState = document.getElementById('states-dropdown')
    const checkedActivity = document.querySelectorAll('#activities-dropdown :checked')
    const selected = [...checkedActivity, selectedState].map(option => option.value)
    alert(selected)
})

const parkDiv = document.getElementById('park-results')
const selectedState = document.getElementById('states-dropdown')
const checkedActivity = document.querySelectorAll('#activities-dropdown :checked') 

// Parks Fetch

fetch(url)  
  .then(res => res.json().then(parks => {  
    for (let i = 0; i < parks.data.length; i++) {
            const ul = document.createElement('ul')
            const img = document.createElement('img')
            const descrip = document.createElement('p')
            img.src = parks.data[i].images.url
            ul.innerText = parks.data[i].fullName
            descrip.innerText = parks.data[i].description
            parkDiv.append(ul, img, descrip)
        }  
  })
) 