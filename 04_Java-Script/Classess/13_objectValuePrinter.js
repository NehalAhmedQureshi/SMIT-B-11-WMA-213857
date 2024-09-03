const studentInfo = {
    name : 'Nehal' ,
    age : 17 ,
    rollNumber : 'WMA-213857' ,
    isPresent : true
}

for (const keys in studentInfo) {

    console.log("🚀 ~ keys:", keys)

    const keyValue = studentInfo[keys]
    console.log("🚀 ~ keyValue:", keyValue)

}