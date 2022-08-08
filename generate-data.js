const casual = require('casual').en_US;
const fs = require("fs")

const courseList = [
    {
        "id": "0f6dbeb8-890e-413b-8c35-fb60a1c1947a",
        "courseName": "Learning HTML&CSS",
        "description": "To learn Web Front-end we always start with HTML and CSS, these are two languages present in every website on the internet. In this course, we will share from the most basic knowledge. After this course, you will be able to make your own 2 website interfaces, The Band and Shopee.",
        "image": "https://tse2.mm.bing.net/th?id=OIP.q-QpE2FpQY2eo-LGSSNPmgHaEK&pid=Api&P=0",
        "tuition": 80,
        "startTime": "1 June 2022",
        "endTime": '1 July 2022',
        "status": 1,
        "createdAt": 1659546675731,
        "updatedAt": 1659546675731,
        "student": ['62e7e62484939aa9e320a446','62e7e64f84939aa9e320a447'],
        "teacher": ['62e7e06284939aa9e320a43f','62e7e5b284939aa9e320a440']
    },
    {
        "id": "b3e990a6-f34d-433d-a703-b4c61ec5ada6",
        "courseName": "Learning JavaScript",
        "description": "With HTML and CSS, you can only build static websites, including only the interface and almost no interaction handling. To add rich functions and increase interactivity to your website, you need to learn Javascript.",
        "image": "https://tse3.mm.bing.net/th?id=OIP.GnVutspHEXfNvSMXRa9YhQHaHa&pid=Api&P=0",
        "tuition": 37,
        "startTime": '20 June 2022',
        "endTime": '3 August 2022',
        "status": 1,
        "createdAt": 1659546675731,
        "updatedAt": 1659546675731,
        "student": ['62e7e62484939aa9e320a446','62e7e64f84939aa9e320a447'],
        "teacher": ['62e7e06284939aa9e320a43f','62e7e5b284939aa9e320a440']
    },
    {
        "id": "f574b32c-f1d7-4522-96fb-c94f62675118",
        "courseName": "Linux and Ubuntu",
        "description": "How to work with Ubuntu/Linux operating system via Windows Terminal & WSL. When going to work, many cases you need to master the basic command lines of Ubuntu / Linux.",
        "image": "https://tse4.mm.bing.net/th?id=OIP.hP3KayOf9x93Taj_aJ1hcQHaFj&pid=Api&P=0",
        "tuition": 81,
        "startTime": '1 August 2022',
        "endTime": '20 September 2022',
        "status": 5,
        "createdAt": 1659546675731,
        "updatedAt": 1659546675731,
        "student": ['62e7e62484939aa9e320a446','62e7e64f84939aa9e320a447'],
        "teacher": ['62e7e06284939aa9e320a43f','62e7e5b284939aa9e320a440']
    },
    {
        "id": casual.uuid,
        "courseName": "Learn about IT industry",
        "description": "To follow the IT - Software industry, what skills do you need to practice? Do you already have the right qualities for the industry? Let's visit IT companies and learn about the culture and working style of this industry.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl-vEE31SeMYoMt1zDh1iZUm2aM-OnVJzyHA&usqp=CAU",
        "tuition": 30,
        "startTime": '1 September 2020',
        "endTime": '20 September 2020',
        "status": -1,
        "student": ['62e7e62484939aa9e320a446','62e7e64f84939aa9e320a447'],
        "teacher": ['62e7e06284939aa9e320a43f','62e7e5b284939aa9e320a440']
    },
    {
        "id": casual.uuid,
        "courseName": "Building Websites with ReactJS",
        "description": "ReactJS course from basic to advanced, the result of this course is that you can do most common projects with ReactJS.",
        "image": "https://files.fullstack.edu.vn/f8-prod/courses/13/13.png",
        "tuition": casual.integer(from=30, to=80),
        "startTime": '10 April 2022',
        "endTime": '19 August 2022',
        "status": 1,
        "student": ['62e7e62484939aa9e320a446','62e7e64f84939aa9e320a447'],
        "teacher": ['62e7e06284939aa9e320a43f','62e7e5b284939aa9e320a440']
    },
    {
        "id": casual.uuid,
        "courseName": "Responsive With Grid System",
        "description": "In this course we will learn how to build responsive web interface with Grid System, similar to Bootstrap 4.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLelCLwAQfSVzRB9uxamLQ5INq_dEEL0FcLA&usqp=CAU",
        "tuition": casual.integer(from=30, to=80),
        "startTime": '1 July 2021',
        "endTime": '10 November 2021',
        "status": 5,
        "student": ['62e7e62484939aa9e320a446','62e7e64f84939aa9e320a447'],
        "teacher": ['62e7e06284939aa9e320a43f','62e7e5b284939aa9e320a440']
    },
    {
        "id": casual.uuid,
        "courseName": "Advanced JavaScript Programming",
        "description": "Get a deeper understanding of how Javascript works, learn about IIFEs, closures, reference types, this keyword, bind, call, apply, prototype, ...",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkoUC86BRkIPg4AxXiWyQ2Gcj6do3kTwQ2bA&usqp=CAU",
        "tuition": casual.integer(from=30, to=80),
        "startTime": '1 April 2022',
        "endTime": '10 May 2022',
        "status": 1,
        "student": ['62e7e62484939aa9e320a446','62e7e64f84939aa9e320a447'],
        "teacher": ['62e7e06284939aa9e320a43f','62e7e5b284939aa9e320a440']
    },
    {
        "id": casual.uuid,
        "courseName": "Node & ExpressJS",
        "description": "Learn Back-end with Node & ExpressJS framework, understand Back-end concepts and build RESTful API for website.",
        "image": "https://files.fullstack.edu.vn/f8-prod/courses/6.png",
        "tuition": casual.integer(from=30, to=80),
        "startTime": '1 August 2022',
        "endTime": '10 November 2022',
        "status": 1,
        "student": ['62e7e62484939aa9e320a446','62e7e64f84939aa9e320a447'],
        "teacher": ['62e7e06284939aa9e320a43f','62e7e5b284939aa9e320a440']
    },
]
// Generate random sentence
// You don't need function call operator here
// because most of generators use properties mechanism


const randomCourseRegisterList = (courseList, numberOfCourseRegisters,studentList) => {
    if(numberOfCourseRegisters <= 0) return []
    const courseRegisterList = []
    for(const course of courseList){
        for(const student of studentList){
            Array.from(new Array(numberOfCourseRegisters)).forEach(() => {
                const courseRegister = {
                    id: casual.uuid,
                    fullName: casual.full_name,
                    address: student.address,
                    tuition: course.tuition,
                    mobile: casual.phone,
                    status: casual.random_element([-1,1,5]),
                    age: casual.integer(from=24, to=45),
                    gender: casual.random_element(["male","female"]),
                    createdAt: Date.now(),
                    updatedAt: Date.now(),
                    address: casual.address,
                    courseId: course.id,
                    courseName: course.courseName,    
                    studentId: student
                }
                courseRegisterList.push(courseRegister)
            })
        }
    }
    return courseRegisterList
}

const randomCourseResultList = (courseList, numberOfCourseResults,studentList,teacherList) => {
    if(numberOfCourseResults <= 0) return []
    const courseResultList = []
    for(const course of courseList){
        for(const student of studentList){
            for(const teacher of teacherList){
                Array.from(new Array(numberOfCourseResults)).forEach(() => {
                    const courseResult = {
                        id: casual.uuid,
                        status: casual.random_element([-1,1,5]),
                        score: Number.parseFloat(casual.double(from=4, to=10).toFixed(1)),
                        comment: casual.sentence,
                        createdAt: Date.now(),
                        updatedAt: Date.now(),
                        courseId: course.id,
                        studentId: student,
                        teacherId: teacher
                    }
                    courseResultList.push(courseResult)
                })
            }
        }
    }
    return courseResultList
}

const randomCourseAttendList = (courseList, numberOfCourseAttends,studentList,teacherList) => {
    if(numberOfCourseAttends <= 0) return []
    const courseAttendList = []
    for(const course of courseList){
        for(const student of studentList){
            for(const teacher of teacherList){
                Array.from(new Array(numberOfCourseAttends)).forEach(() => {
                    const courseAttend = {
                        id: casual.uuid,
                        status: casual.random_element(['present','late','absent']),
                        createdAt: Date.now(),
                        updatedAt: Date.now(),
                        courseId: course.id,
                        studentId: student,
                        teacherId: teacher
                    }
                    courseAttendList.push(courseAttend)
                })
            }
        }
    }
    return courseAttendList
}

const randomCourseTuitionList = (courseList, numberOfCourseTuitions,studentList,courseRegisterList) => {
    if(numberOfCourseTuitions <= 0) return []
    const courseTuitionList = []
    for(const course of courseList){
        for(const student of studentList){
            for(const courseRegister of courseRegisterList){
                Array.from(new Array(numberOfCourseTuitions)).forEach(() => {
                    const courseTuition = {
                        id: casual.uuid,
                        status: casual.random_element(['present','late','absent']),
                        createdAt: Date.now(),
                        updatedAt: Date.now(),
                        courseId: course.id,
                        studentId: student,
                        courseRegisterId: courseRegister.id
                    }
                    courseTuitionList.push(courseTuition)
                })
            }
        }
    }
    return courseTuitionList
}

(() => {
    //random data
    const studentList = ['62e7e5da84939aa9e320a443', '62e7e5ea84939aa9e320a444', '62e7e62484939aa9e320a446', '62e7e64f84939aa9e320a447', '62efd1e67ec131b24eb06de8']
    const teacherList = ['62e7e06284939aa9e320a43f', '62e7e5b284939aa9e320a440', '62e7e5c584939aa9e320a441']
    const courseRegisterList = randomCourseRegisterList(courseList,1,studentList)
    const courseResultList = randomCourseResultList(courseList,1,studentList,teacherList)
    const courseAttendList = randomCourseAttendList(courseList,1,studentList,teacherList)
    const courseTuitionList = randomCourseTuitionList(courseList,1,studentList,courseRegisterList)
    // db
    const db = {
        course: courseList,
        courseRegister: courseRegisterList,
        courseResult: courseResultList,
        courseAttendance: courseAttendList,
        courseTuition: courseTuitionList,
    }
    fs.writeFile('db.json',JSON.stringify(db), () => {
        console.log("Generate data success!")
    })
})()
