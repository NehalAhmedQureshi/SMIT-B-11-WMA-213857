let twoSum = (nums, target) => {
      // console.log(nums);
      // console.log(target);
      let num = nums.length - 1
      // console.log(num);
      for (let i = 0; i < num; i++) {
            for (let j = i+1; j < nums.length; j++) {

                  let check = nums[i] + nums[j]

                  if (check == target) {
                        let result = [[i], [j]]
                        console.log(result)
                  }

            }
      }
}

console.log(twoSum([3, 2, 3], 6));