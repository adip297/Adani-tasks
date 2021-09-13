const calculateMedian = (arr1, arr2) => {
  let newArr = [...arr1, ...arr2];
  let median = 0;
  if (newArr.length % 2 === 1) {
    median = newArr[(n + 1) / 2 - 1];
  } else {
    median = (newArr[n / 2 - 1] + newArr[n / 2]) / 2;
  }
  console.log(median);
};
