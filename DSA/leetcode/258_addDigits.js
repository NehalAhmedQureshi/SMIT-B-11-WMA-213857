let addDigits = (num) => {
      let check = num.toString().split('');  // split break the array from every digits and to string change the number to string
      let sum = 0
      for (let i = 0; i < check.length; i++) {
            sum += Number(check[i])
      }
      addDigits(sum)

      return sum
}
console.log(addDigits(42));