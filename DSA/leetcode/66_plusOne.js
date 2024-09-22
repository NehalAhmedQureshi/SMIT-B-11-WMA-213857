let plusOne = (digits) => {

      let change = String(digits).replaceAll(',','');
      change = Number(change)
      change = change+1
      change = String(change)
      return change.split('')


      // ---------------------------==============---------------------------
      // let check = digits.length - 1
      // for (let i = check; i < digits.length; i++) {
      //       let dom = digits[i] + 1;
      //       digits.pop()
      //       digits.push(dom)
      //       console.log(digits);
      // }
}

console.log(plusOne([9]));