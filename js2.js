const url = 'https://developer.nps.gov/api/v1/parks?api_key=wSlcKl1LSOpHXf164FTShbQZC4cmu1VWTJiipnFk&limit=500'


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
		});
}



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