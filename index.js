// API KEY: wSlcKl1LSOpHXf164FTShbQZC4cmu1VWTJiipnFk

const url = "https://developer.nps.gov/api/v1/parks?&api_key=wSlcKl1LSOpHXf164FTShbQZC4cmu1VWTJiipnFk"

fetch(url)
  .then(res => res.json())
  .then(data => console.log(data));


