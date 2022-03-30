// Code your solution here
function findMatching(nameArr, namesStr){
    const result = nameArr.filter(word => word.toLowerCase() === namesStr.toLowerCase());
    return result;

}
function fuzzyMatch(driverNames, aLetter){
    const result = driverNames.filter(word => word.charAt(0).toUpperCase() === aLetter.charAt(0).toUpperCase());
    return result;


}
function matchName(driver, objString ){
    const result = driver.filter(word => word.name === objString);
    return result;
}