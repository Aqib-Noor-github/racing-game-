var blueCar = document.getElementById("bluecar");
var raceCar = document.getElementById("racecar");
var result = document.getElementById("result");
const score = document.getElementById("score");
var game = document.getElementById("game");
var counter = 0;
var jumpsound = document.getElementById("jumpsound");
var showresult = document.getElementById("showresult");
const resultshow = document.getElementById("resultshow");
var score1 = 0;
// console.log(raceCar)
// move blue Car

bluecar = addEventListener("animationiteration", function () {
    var random = ((Math.floor(Math.random() * 3)) * 130);
    var move = random + "px";
    blueCar.style.left = move;
    counter++;
    score1++;
    
})
// console.log("aqib");
// racecar move
window.addEventListener("keydown", function (e) {
    if (e.keyCode == "39") {
        var raceCarleft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));
        if (raceCarleft < 260) { raceCar.style.left = (raceCarleft + 130) + "px"; }
        jumpsound.play();
    };
    if (e.keyCode == "37") {
        var raceCarleft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));
        if (raceCarleft > 0) { raceCar.style.left = (raceCarleft - 130) + "px"; }
        jumpsound.play();
    };

})

// game over



setInterval(function Gameover(){
    showresult.innerHTML = `score : ${score1}`;
    var blueCartop = parseInt(window.getComputedStyle(blueCar).getPropertyValue("top"));
    var blueCarleft = parseInt(window.getComputedStyle(blueCar).getPropertyValue("left"));
    var raceCarleft =parseInt (window.getComputedStyle(raceCar).getPropertyValue("left"));
    if((blueCarleft === raceCarleft) && (blueCartop > 250) && (blueCartop < 450)){
        result.style.display = "block";
        game.style.display = "none";
        score.innerHTML = `score ${counter}`;
        showresult.innerHTML = `result ${score1}`;

        counter = 0;    
    }


} , 10)

