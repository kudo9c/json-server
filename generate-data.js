const casual = require('casual').en_US;
const fs = require("fs")


// Generate random sentence
// You don't need function call operator here
// because most of generators use properties mechanism
const randomCourseList = (numberOfCourse) => {
    if(numberOfCourse <= 0) return []
    const courseList = []
    Array.from(new Array(numberOfCourse)).forEach(() => {
        const course = {
            id: casual.uuid,
            courseName: casual.title,
            description: casual.description,
            image: 'https://utexlms.hcmute.edu.vn/pluginfile.php/11/theme_maker/defaultcourseimage/1639153832/course-banner.jpg',
            tuition: casual.integer(from=30,to=100),
            startTime: casual.unix_time,
            endTime: casual.unix_time,
            status: casual.random_element([-1,1,5]),
            createdAt: Date.now(),
            updatedAt: Date.now()
        }
        courseList.push(course)
    })

    return courseList
}

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
    const courseList = randomCourseList(10)
    const studentList = randomStudentList(courseList,2)
    const teacherList = randomTeacherList(courseList,1)
    const courseRegisterList = randomCourseRegisterList(courseList,1,studentList)
    const courseResultList = randomCourseResultList(courseList,1,studentList,teacherList)
    const courseAttendList = randomCourseAttendList(courseList,1,studentList,teacherList)
    const courseTuitionList = randomCourseTuitionList(courseList,1,studentList,courseRegisterList)
    // db
    const db = {
        courses: courseList,
        students: studentList,
        teachers: teacherList,
        courseRegisters: courseRegisterList,
        courseResults: courseResultList,
        courseAttends: courseAttendList,
        courseTuitions: courseTuitionList,
    }
    fs.writeFile('db.json',JSON.stringify(db), () => {
        console.log("Generate data success!")
    })
})()
