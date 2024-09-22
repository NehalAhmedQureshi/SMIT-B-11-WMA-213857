
let searchInsert = () => {
      let nums = [3,4,5,6,7]
      let target = 8
      nums = nums.concat(target).sort()
      let result = nums.indexOf(target);
      console.log(result);
}


searchInsert()