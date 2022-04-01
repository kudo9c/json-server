const casual = require('casual').en_US;
const fs = require("fs")


// Generate random sentence
// You don't need function call operator here
// because most of generators use properties mechanism
const randomCityList = (numberOfCities) => {
    if(numberOfCities <= 0) return []
    const cityList = []
    Array.from(new Array(numberOfCities)).forEach(() => {
        const city = {
            id: casual.uuid,
            city: casual.city,
            createdAt: Date.now(),
            updatedAt: Date.now()
        }
        cityList.push(city)
    })

    return cityList
}

const randomStudentList = (cityList, numberOfStudents) => {
    if(numberOfStudents <= 0) return []
    const studentList = [] 

    for (const city of cityList) {
        Array.from(new Array(numberOfStudents)).forEach(() => {
            const student = {
                id: casual.uuid,
                name: casual.full_name,
                age: casual.integer(from=16, to=24),
                mark: Number.parseFloat(casual.double(from=1, to=10).toFixed(1)),
                gender: casual.random_element(["male","female"]),
                createdAt: Date.now(),
                updatedAt: Date.now(),
                city: city.id

            }
            studentList.push(student)
        })
    }

    return studentList
}

(() => {
    //random data
    const cityList = randomCityList(5)
    const studentList = randomStudentList(cityList,10)
    // db
    const db = {
        cities: cityList,
        students: studentList
    }
    fs.writeFile('db.json',JSON.stringify(db), () => {
        console.log("Generate data success!")
    })
})()