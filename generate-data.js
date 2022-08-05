const casual = require('casual').en_US;
const fs = require("fs")

const courseList = [
    {
        "id": "0f6dbeb8-890e-413b-8c35-fb60a1c1947a",
        "courseName": "Learning HTML&CSS",
        "description": "Corrupti accusantium asperiores quo explicabo non consequatur vitae. Occaecati tempore repudiandae vero. Asperiores quo enim. Sunt consequatur voluptatem animi id.",
        "image": "https://tse2.mm.bing.net/th?id=OIP.q-QpE2FpQY2eo-LGSSNPmgHaEK&pid=Api&P=0",
        "tuition": 80,
        "startTime": "1 June 2022",
        "endTime": '1 July 2022',
        "status": 1,
        "createdAt": 1659546675731,
        "updatedAt": 1659546675731
    },
    {
        "id": "b3e990a6-f34d-433d-a703-b4c61ec5ada6",
        "courseName": "Learning JavaScript",
        "description": "Id eius excepturi corporis et nisi facere. Sapiente ea ut modi. Ut sint magni est consequatur cupiditate a. Sapiente ipsa voluptas.",
        "image": "https://tse3.mm.bing.net/th?id=OIP.GnVutspHEXfNvSMXRa9YhQHaHa&pid=Api&P=0",
        "tuition": 37,
        "startTime": '20 June 2022',
        "endTime": '3 August 2022',
        "status": 1,
        "createdAt": 1659546675731,
        "updatedAt": 1659546675731
    },
    {
        "id": "f574b32c-f1d7-4522-96fb-c94f62675118",
        "courseName": "Linux and Ubuntu",
        "description": "Ut labore rem rem. Quia accusantium sit illum. Quos totam provident ipsa et.",
        "image": "https://tse4.mm.bing.net/th?id=OIP.hP3KayOf9x93Taj_aJ1hcQHaFj&pid=Api&P=0",
        "tuition": 81,
        "startTime": '1 August 2022',
        "endTime": '20 September 2022',
        "status": 5,
        "createdAt": 1659546675731,
        "updatedAt": 1659546675731
    },
]
// Generate random sentence
// You don't need function call operator here
// because most of generators use properties mechanism
const randomStudentList = (courseList, numberOfStudents) => {
    if(numberOfStudents <= 0) return []
    const studentList = []
    for(const course of courseList){
        Array.from(new Array(numberOfStudents)).forEach(() => {
            const student = {
                id: casual.uuid,
                fullName: casual.full_name,
                age: casual.integer(from=16, to=24),
                gender: casual.random_element(["male","female"]),
                status: "active",
                createdAt: Date.now(),
                updatedAt: Date.now(),
                address: casual.address,
                courseId: course.id
            }
            studentList.push(student)
        })
    }
    return studentList
}

const randomTeacherList = (courseList, numberOfTeachers) => {
    if(numberOfTeachers <= 0) return []
    const teacherList = []
    for(const course of courseList){
        Array.from(new Array(numberOfTeachers)).forEach(() => {
            const teacher = {
                id: casual.uuid,
                fullName: casual.full_name,
                age: casual.integer(from=24, to=45),
                gender: casual.random_element(["male","female"]),
                status: "active",
                createdAt: Date.now(),
                updatedAt: Date.now(),
                address: casual.address,
                courseId: course.id
            }
            teacherList.push(teacher)
        })
    }
    return teacherList
}

const randomCourseRegisterList = (courseList, numberOfCourseRegisters,studentList) => {
    if(numberOfCourseRegisters <= 0) return []
    const courseRegisterList = []
    for(const course of courseList){
        for(const student of studentList){
            Array.from(new Array(numberOfCourseRegisters)).forEach(() => {
                const courseRegister = {
                    id: casual.uuid,
                    fullName: student.fullName,
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
                    studentId: student.id
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
                        studentId: student.id,
                        teacherId: teacher.id
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
                        studentId: student.id,
                        teacherId: teacher.id
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
                        studentId: student.id,
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
    const studentList = randomStudentList(courseList,2)
    const teacherList = randomTeacherList(courseList,1)
    const courseRegisterList = randomCourseRegisterList(courseList,1,studentList)
    const courseResultList = randomCourseResultList(courseList,1,studentList,teacherList)
    const courseAttendList = randomCourseAttendList(courseList,1,studentList,teacherList)
    const courseTuitionList = randomCourseTuitionList(courseList,1,studentList,courseRegisterList)
    // db
    const db = {
        course: courseList,
        student: studentList,
        teacher: teacherList,
        courseRegister: courseRegisterList,
        courseResult: courseResultList,
        courseAttendance: courseAttendList,
        courseTuition: courseTuitionList,
    }
    fs.writeFile('db.json',JSON.stringify(db), () => {
        console.log("Generate data success!")
    })
})()
