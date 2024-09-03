let target = 6
// console.log(nums.length);
twoSum = () => {
      
      let result ;
      for (let i = 0; i < nums.length; i++) {
            for (let j = 1; j < nums.length; j++) {
                 let check = nums[i] + nums[j]
                 if(check == target){
                  result = [ [i] , [j]]
            }
      }
}
return result
}
nums = [3, 2, 9]
twoSum()