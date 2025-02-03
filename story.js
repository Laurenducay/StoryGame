playerName = prompt("Hey there! What is your name?");

alert(`Hi there ${playerName}! Welcome.`);

alert(playerName + ", " + introText);
pathChoice = prompt("Will you try to capture a wild Mimikyu?");

if(pathChoice == 'yes' || pathChoice == 'Yes') {
    alert(pathText1);
    alert(endText1);
}
else if(pathChoice == 'no' || pathChoice == 'No') {
    alert(pathText2);
    alert(endText2);
}
else {
    alert(invalid);
}

