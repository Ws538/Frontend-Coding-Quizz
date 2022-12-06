function renderMessage() {
  var lastGrade = JSON.parse(localStorage.getItem("user"));
  document.getElementById("savedInitials").innerHTML = lastGrade.initals;
  document.getElementById("savedScores").innerHTML = lastGrade.score;
  
}

renderMessage();



// //need to store more highscore data like a list, eg lesson todo list plus remove button

// var list = document.querySelectorAll("#list");

// function renderScoreKeeping() {
//   list.innerHTML = "";

//   for (var i = 0; i < list.length; i++) {
//     var lists = list[i];

//     var li = document.createElement("li");
//     li.textContent = lists;
//     li.setAttribute("data-index", i);

//     lists.appendChild(li);
//   }
// }

// function init() {
//   var storedLists = JSON.parse(localStorage.getItem("list"))

//   if (storedLists !== null) {
//     list = storedLists
//   }
// }

// init();