

// console.log(date.toLocaleDateString());
function showTime() {
      let timePrinter = document.querySelector('#time')
      let datePrinter = document.querySelector('#date')
      let date = new Date()
      // console.log(date.toDateString());
      let monthsName = [
            'January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octuber', 'November', 'December'
      ]
      let day = [
            '','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'
      ]

      let daTe = date.getDate()
      let days = date.getDay()
      let month = date.getMonth()
      let year = date.getFullYear()

      // console.log(days);
      // console.log(monthsName[month]);
      // console.log(year);



      let hours = date.getHours()
      let setHours = hours > 12 ? hours - 12 : hours;
      setHours = setHours < 10 ? '0' + setHours : setHours

      // console.log(setHours);

      let minutes = date.getMinutes()
      // console.log(minutes);

      let amPm = hours < 12 ? 'AM' : 'PM'
      // console.log(amPm);

      let second = date.getSeconds()
      let milisecond = date.getMilliseconds()
      timePrinter.innerHTML = `${setHours} - ${month} - ${second} - ${milisecond}`
      setTimeout(showTime, 0.001)
      datePrinter.innerHTML = ` ${day[days]},${daTe} - ${month} - ${year}`

}
showTime()


