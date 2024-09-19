let singleNumber = (nums) => {
      // console.log(nums);
      for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== nums[i+1]) {
                   console.log(nums[i]);
            }
      }
}

console.log(singleNumber([4,1,2,1,2]));