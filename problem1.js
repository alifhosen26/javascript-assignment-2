

//Problem-01: Match Winner
function matchWinner(teamAGoals, teamBGoals) {
    if(typeof teamAGoals !== "number"){
        return "Invalid";
    }

    if(typeof teamBGoals !== "number"){
        return "Invalid";
    }

    if(teamAGoals > teamBGoals){
        return "Team A Won";
    }

    if(teamBGoals > teamAGoals){
        return "Team B Won";
    }
    return "Draw";
}

console.log(matchWinner(3,1));
console.log(matchWinner(1,4));
console.log(matchWinner(2,2));
console.log(matchWinner("3", 2));
console.log(matchWinner(3,"2"));
