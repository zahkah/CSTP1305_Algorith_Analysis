/**
 * Given a sorted array of distinct integers and a target
value, return the index if the target is found. If not, return the index
where it would be if it were inserted in order.( 5 MARKS)

Test Case 1: Target is in the array
● Input: nums = [1, 3, 5, 6], target = 5
● Expected Output: 2
● Explanation: The target 5 is found at index 2.
Test Case 2: Target is not in the array (insert position in
between)
● Input: nums = [1, 3, 5, 6], target = 2
● Expected Output: 1
● Explanation: The target 2 is not found, but it would be inserted
at index 1.
 * **/ 


//1st test case
//sorted array,Input: nums = [1, 3, 5, 6], target = 5
function searchInsert(nums, target) {
    //loop through the array to find the target
    for (let i = 0; i < nums.length; i++) {
        //if the target is found, return the index
        if (nums[i] === target) {
            return i;
        }
        //if the target is not found, check if it's smaller than the current element
        else if (nums[i] > target) {
            //return the index where it would be if it were inserted in order
            return i;
        }
    }
}

//second test case
//sorted array Test Case 2: Target is not in the array (insert position in between)
//Input: nums = [1, 3, 5, 6], target =
function searchInsert(nums, target) {
    //loop through the array to find the target
    for (let i = 0; i < nums.length; i++) {
        //if the target is found, return the index
        if (nums[i] === target) {
            return i;
        }
        //if the target is not found, check if it's smaller than the current element
        else if (nums[i] > target) {
            //return the index where it would be if it were inserted in order
            return i;
        }
    }
}
// console logs
console.log(searchInsert([1, 3, 5, 6], 5)); //2
console.log(searchInsert([1, 3, 5, 6], 2)); //1