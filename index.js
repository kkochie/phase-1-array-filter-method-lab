// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter( (possibleMatch) => possibleMatch.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, firstThree) {
        return drivers.filter( (name) => 
            name.toLowerCase().indexOf(firstThree.toLowerCase()) === 0
        );
}

function matchName(drivers, name) {
    return drivers.filter((record) => record.name === name
    )
}