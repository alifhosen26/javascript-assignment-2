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


console.log(isElevatorSafe([60, 75, 50]));
console.log(isElevatorSafe([[90, 100, 95, 120]]));
console.log(isElevatorSafe([[400]]));
console.log(isElevatorSafe("60,75,50"));