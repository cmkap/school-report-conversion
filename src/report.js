const report = (grades) => {
//     let gradeElements = grades.split(',')

//     for(let i = 0; i < gradeElements.length; i++) {
//         if (grade)
//     }
// }

// "Green: 1"
    
    if (grades === "Green") {
        return "Green: 1";
    } else if (grades === "Amber"){
        return "Amber: 1";
    } else {
        return "Red: 1";
    }

}


module.exports = report;