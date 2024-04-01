
       
//         // const queryString = window.location.search;
//         // const urlParams = new URLSearchParams(queryString);
//         // const Name = urlParams.get('Name');
//         // const city = urlParams.get('city');
//         // const score = urlParams.get('score');


        
//         // document.getElementById('name-display').textContent = Name;
//         // document.getElementById('city-display').textContent = city;
//         // document.getElementById('score-display').textContent = score;

        
// const Name = localStorage.getItem('Name');
// const city = localStorage.getItem('city');
// const score = localStorage.getItem('score');


// document.getElementById('name-display').textContent = Name;
// document.getElementById('city-display').textContent = city;
// document.getElementById('score-display').textContent = score;

// localStorage.removeItem('Name');
// localStorage.removeItem('city');
// localStorage.removeItem('score');

// const Name = localStorage.getItem('Name');
// const city = localStorage.getItem('city');
// const score = localStorage.getItem('score');

// console.log("Name:", Name);
// console.log("City:", city);
// console.log("Score:", score);


// document.getElementById('Name-display').textContent = Name;
// document.getElementById('city-display').textContent = city;
// document.getElementById('score-display').textContent = score;

// localStorage.removeItem('Name');
// localStorage.removeItem('city');
// localStorage.removeItem('score');






document.addEventListener("DOMContentLoaded", function() {
      
        var Name = localStorage.getItem("Name");
        var city = localStorage.getItem("city");
        var score = localStorage.getItem("score");

        var loginDetailsDiv = document.getElementById("login-details");
        loginDetailsDiv.innerHTML = "Name: " + Name + "<br> Name: " + Name + "<br> City: " + city;
       
    });
    




