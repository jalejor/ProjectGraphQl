'use struict'

const courses =[
    {
        _id:"anyid no1",
        titile:"Mi titulo no1",
        teacher: "profesor no1",
        description: "description no1",
        topic: "programacion no1"
        
    },
    {
        _id:"anyid no2",
        titile:"Mi titulo no2",
        teacher: "profesor no2",
        description: "description no2",
        topic: "programacion no2"
        
    }
]
module.exports = {
    getCourses: () =>{
        return courses
    }
}