// function isElevatorSafe(weights) {
//     if (!Array.isArray(weights)) {
//         return "Invalid";
//     }

//     let totalWeight = 0;

//     for (let personWeight of weights) {
//         totalWeight = totalWeight + personWeight;
//     }

//     return totalWeight <= 400;
// }

// console.log(isElevatorSafe(weights));











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

//Problem-02: Elevator Weight Safety Checker
function isElevatorSafe(weights) {
    if (!Array.isArray(weights)){
        return "Invalid";
    }

    let totalWeight = 0;

    for (let personWeight of weights){
        totalWeight = totalWeight + personWeight;
    }

    return totalWeight <=400;
}

//Problem-03: AI Token Cost Calculator
function calculateAiCost(tokensUsed) {
    if (typeof tokensUsed !== "number" || tokensUsed < 0) {
        return "Invalid";
    }

    if (tokensUsed <= 500) {
        return 0;
    }

    let extraTokens = tokensUsed - 500;
    let extraBlocks = Math.floor(extraTokens / 100);

    return extraBlocks * 5;

}

//Problem-04: Top Rated Restaurant Finder
function topRatedRestaurant(restaurants) {
    // Write your code here
}

//Problem-05: Debugging Challenge - API Response Time Monitor
/* এই ফাংশনের সব বাগ খুঁজে ঠিক করো — নাম পরিবর্তন করবে না */
function averageResponseTime(times) {
  if (Array.isArray(times) = false) {
        return "Invalid";
   }

   if (times.length = 0) {
        return "Invalid";
    }

 let total = 0;
    for (let i = 1; i <= times.length; i++) {
        total = total + time[i];
    }

  return total / times;
}

// md samim khan