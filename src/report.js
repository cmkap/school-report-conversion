const report = (str) => {
    let arry = str.split(",")
    // console.log(arry)
    let greenCount = 0;
    let amberCount = 0;
    let redCount = 0;
    let obj = {}
    
// console.log(Object.keys(obj).length === 0)

    arry.forEach(element => {

            if (element === "Green") {
                greenCount += 1;
                obj[element] = greenCount;
            } else if (element === "Amber"){
                amberCount += 1;
                obj[element] =amberCount;
            } else {
                redCount += 1;
                obj[element] =redCount;
            }
        
    })

    for(const key in obj){
        // console.log(`${key}: ${obj[key]}`)
        return`${key}: ${obj[key]}`
    }

    
c
    

    
}


module.exports = report;