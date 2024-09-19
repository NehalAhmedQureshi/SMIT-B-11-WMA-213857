function containsDuplicate(nums) {
      nums.sort(); // this is for aligning same number together

      for (let i = 0; i < nums.length; i++) {
            if (nums[i] === nums[i + 1]) {
                  return true;
                  // console.log(true);
            }
      }
      return false;
      // console.log(false);
}