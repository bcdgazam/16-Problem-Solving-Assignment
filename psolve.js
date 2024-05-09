//16-Problem-Solving-Assignment

/*
    1. foot to mile (function name: fooToMile)
    2. How much woods do I need If I want to make 1 chair, 1 Table and 1 khat? (Function Name: WoodCalculator); Output will be: total woods;
    3. How many bricks do I need If I want to make a 6th, 15th floor and 22th floor building..peef feet  contains 1k bricks; (Function name: brickCalculator) (1-10: 15foot, 11-20: 12foot, 21-more: 10foot)
    4. make a function that contains an array and array contains lot of friends name; Small name will be return. (Function name: tinyFriend)

*/

//Foot To Mile assignment
/*function footToMile(n){
    let mile = n/5280;
    return mile;
}

let result = footToMile(69);
console.log(result);*/

//Wood Calculator assignment
function WoodCalculator() {
    // Dimensions for chair
    const chairSeatWidth = 18; // inches
    const chairSeatDepth = 18; // inches
    const chairBackrestHeight = 36; // inches
    const chairThickness = 1; // inch

    // Dimensions for table
    const tableLength = 60; // inches
    const tableWidth = 36; // inches
    const tableThickness = 1.5; // inches

    // Dimensions for khat (assuming a standard size)
    const khatLength = 72; // inches
    const khatWidth = 36; // inches
    const khatThickness = 1; // inch

    // Calculate wood for chair
    const chairSurfaceArea = 2 * (chairSeatWidth * chairSeatDepth) +
        2 * (chairSeatWidth * chairBackrestHeight) +
        2 * (chairSeatDepth * chairBackrestHeight);
    const woodForChair = chairSurfaceArea * chairThickness;

    // Calculate wood for table
    const tableSurfaceArea = tableLength * tableWidth;
    const woodForTable = tableSurfaceArea * tableThickness;

    // Calculate wood for khat
    const khatSurfaceArea = khatLength * khatWidth;
    const woodForKhat = khatSurfaceArea * khatThickness;

    // Total wood required
    const totalWood = woodForChair + woodForTable + woodForKhat;

    return totalWood;
}

// Example usage
const totalWoodsNeeded = WoodCalculator();
console.log(`Total wood needed: ${totalWoodsNeeded} cubic inches`);
