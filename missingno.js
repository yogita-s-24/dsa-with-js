const missingNumber = function (nums) {
    const expectedSum = (nums.length * (nums.length + 1)) / 2;
    return expectedSum - nums.reduce((acc, num) => acc + num, 0);
  };