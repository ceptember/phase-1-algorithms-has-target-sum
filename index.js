function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length-1; i++){
    for (let j = i+1; j < array.length; j++){
      if (array[i] + array[j] == target){
        return true 
      }
    }
  }
  return false; 

}

/* 
  Write the Big O time complexity of your function here
  O(n^2) because of the nested loops 
*/

/* 
  Add your pseudocode here
  ---
  loop through each item "i" in the array from 0 to the scond from the end
  nest another loop that goes through each item "j" from i+1 to the end 
  if i + j == target, return true 
  when it gets to the end, return false 

*/

/*
  Add written explanation of your solution here
  I iterate through the array and add each number to each of the subsequent numbers in turn, 
  and check to see if it equals the target. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, -2], 10));


  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
