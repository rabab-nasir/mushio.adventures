// document.getElementById('login1-form').addEventListener('submit', function(event) {
//     event.preventDefault(); 

//     var Name = document.getElementById('Name').value;
//     var city = document.getElementById('city').value;
//     var score = document.getElementById('score').value;  
//     window.location.href = 'leaderboard.html?Name=' + encodeURIComponent(Name) + '&city=' + encodeURIComponent(city)+'&score=' + encodeURIComponent(score);
// });

// localStorage.setItem('Name', Name);
// localStorage.setItem('city', city);
// localStorage.setItem('score', score);




document.getElementById("Submit").addEventListener("click", function() {
    var Name = document.getElementById("Name").value;
    var city = document.getElementById("city").value;
    var score = document.getElementById("score").value;
    
    localStorage.setItem("Name", Name);
    localStorage.setItem("city", city);
    localStorage.setItem("score", score);
   
});








