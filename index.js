// Code your solution in this file!
function distanceFromHqInBlocks (block) { 
    return Math.abs(block - 42)
}

// assuming 1 block is 264 feet
function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264
} 

function distanceTravelledInFeet (block1,block2){
    return Math.abs(block1 - block2) * 264
}

function calculatesFarePrice (start, destination){
    const distanceInFeet = distanceTravelledInFeet(start, destination) 
    if (distanceInFeet < 400) return 0;
    if (distanceInFeet > 400 && distanceInFeet < 2000)
        return (distanceInFeet - 400) * .02;
    if (distanceInFeet > 2000 && distanceInFeet < 2500 ) return 25;
    if (distanceInFeet > 2500) return "cannot travel that far"
}
