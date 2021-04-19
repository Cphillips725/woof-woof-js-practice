 showDogsList();

})

let dogFilter = 0;


function getDogs() {

 const url = "http://localhost:3000/pups";

    // Fetch for all dogs list.

    return fetch(url , {

              method: "GET"

          })

          .then(res => res.json())

}




function getDogById(id) {

 const url = `http://localhost:3000/pups/${id}`;

    // Fetch dog for id.

    return fetch(url , {

      method: "GET"

 })

  .then(res => res.json())

}




function updateGoodBadDog(id, newValue){

 const url = `http://localhost:3000/pups/${id}`;

 // Update dog by id

 return fetch(url , {

    method: "PATCH",

    headers: {

      "content-type": "application/json"

    },

    body: JSON.stringify({

      isGoodDog: newValue

    })

 })

 .then(r => r.json())

}




///////////////////////////////FETCH////////////////////////////////////////




function showDogsList() {

    getDogs().then(showDogs);

}




function showDogs(dogsArray, filter = false) {

 const dogBar = document.querySelector("#dog-bar");

 dogBar.innerHTML = "";

 if (filter) {

    dogsArray.filter(dog => dog.isGoodDog).forEach(createDogsBar)

 } else {

    dogsArray.forEach(createDogsBar);

 }

}




function createDogsBar(dogObj) {

 const dogBar = document.querySelector("#dog-bar"),

    dogSpan = document.createElement("span");