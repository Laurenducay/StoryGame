playerName = prompt("Hey there! What is your name?");

alert(`Hi there ${playerName}! Welcome.`);

alert(playerName + ", " + introText);
pathChoice = prompt("Will you try to capture a wild Mimikyu?");

if(pathChoice == "Yes" || pathChoice == "yes") {
    alert(pathText1);
    pathChoice2 = prompt("Do you wish to battle?");
    if(pathChoice2 == "Yes" || pathChoice2 == "yes") {
        alert(pathTextY)
        battleChoice = prompt("Do you want to 1. attack or 2. dodge?");
        if(battleChoice == 1) {
            alert(battle);
            alert(endText3);
        }
        else if(battleChoice == 2) {
            let b = true;
            while(b) {
                alert("You dodged Mimikyu!");
                battleChoice = prompt("Do you want to 1. attack or 2. dodge?")
                if(battleChoice == 1) {
                    alert(battle);
                    alert(endText3);
                    b = false;
                }
            }
        }
    }
    else if(pathChoice2 == "No" || pathChoice2 == "no") {
        alert(pathTextN)
        pathText3 = prompt("Are you sure you do not want to battle? (Yes or No)");
        if(pathText3== "No" || pathText3 == "no") {
            alert(pathTextY);
            alert(battle);
        }
        else if (pathText3 == "Yes" || pathText3 == "yes") {
            alert(endText1);
            alert("--------------GAME OVER--------------");
        }
        else {
            alert(invalid);
        }
    }
    else {
        alert(invalid);
    }
}
else if(pathChoice == 'no' || pathChoice == "No") {
    alert(pathText2);
    pathChoice3 = prompt("Where would you like to head now? Left: Paldea Region or Right: Kanto Region. Left or Right?");
    if(pathChoice3 == "Left" || pathChoice3 == "left") {
        alert(paldeaText);
        pathChoice4 = prompt("Which Pokemon would you like to take? Enter 1 for Fuecoco or 2 Sprigatito.")
        if(pathChoice4 == 2) {
            alert(sprigatito);
        }
        else if(pathChoice4 == 1) {
            alert(fuecoco);
        }
        else {
            alert(invalid);
        }
    }
    else if(pathChoice3 == "Right" || pathChoice3 == "right") {
        alert(kantoText);
        pathChoice5 = prompt("Which pokemon would you like to take? Enter 1 for Charmander or 2 for Squirtle.");
        if(pathChoice5 == 2) {
            alert(squirtle);
        }
        else if(pathChoice5 == 1) {
            alert(charmander);
        }
        else {
            alert(invalid);
        }
    }
    else {
    alert(invalid);
    }
    alert(endText2);
}

