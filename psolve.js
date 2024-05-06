//16-Problem-Solving-Assignment

/*
    1. foot to mile (function name: fooToMile)
    2. How much woods do I need If I want to make 1 chair, 1 Table and 1 khat? (Function Name: WoodCalculator); Output will be: total woods;
    3. How many bricks do I need If I want to make a 6th, 15th floor and 22th floor building..peef feet  contains 1k bricks; (Function name: brickCalculator) (1-10: 15foot, 11-20: 12foot, 21-more: 10foot)
    4. make a function that contains an array and array contains lot of friends name; Small name will be return. (Function name: tinyFriend)

*/

//1st assignment
function footToMile(n){
    let mile = n/5280;
    return mile;
}

let result = footToMile(69);
console.log(result);