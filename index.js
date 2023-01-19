function changeImg(){
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber1);
    console.log(randomNumber2);
    if (randomNumber1 == 6) {
        var dice6 = document.getElementById('dice1');
        dice6.src = "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_6-512.png";
    } else if (randomNumber1 == 5) {
        var dice5 = document.getElementById('dice1');
        dice5.src = "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_5-512.png";
    } else if (randomNumber1 == 4) {
        var dice4 = document.getElementById('dice1');
        dice4.src = "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_4-512.png";
    } else if (randomNumber1 == 3) {
        var dice3 = document.getElementById('dice1');
        dice3.src = "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_3-512.png";
    } else if (randomNumber1 == 2) {
        var dice2 = document.getElementById('dice1');
        dice2.src = "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_2-512.png";
    } else if (randomNumber1 == 1) {
        var dice11 = document.getElementById('dice1');
        dice11.src = "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_1-512.png";
    } else {
        alert("not working");
    }

    if (randomNumber2 == 6) {
        var dice26 = document.getElementById('dice2');
        dice26.src = "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_6-512.png";
    } else if (randomNumber2 == 5) {
        var dice25 = document.getElementById('dice2');
        dice25.src = "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_5-512.png";
    } else if (randomNumber2 == 4) {
        var dice24 = document.getElementById('dice2');
        dice24.src = "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_4-512.png";
    } else if (randomNumber2 == 3) {
        var dice23 = document.getElementById('dice2');
        dice23.src = "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_3-512.png";
    } else if (randomNumber2 == 2) {
        var dice22 = document.getElementById('dice2');
        dice22.src = "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_2-512.png";
    } else if (randomNumber2 == 1) {
        var dice21 = document.getElementById('dice2');
        dice21.src = "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_1-512.png";
    }
    
    if (randomNumber1 > randomNumber2){
        document.getElementById("refresh").innerHTML = "Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
    document.getElementById("refresh").innerHTML = "Player 2 Wins!";
        
    } else if (randomNumber1 == randomNumber2){
        document.getElementById("refresh").innerHTML = "Draw";
    }
}
