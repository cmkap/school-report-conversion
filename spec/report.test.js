report = require('../src/report')

describe('report', () =>{
    // it("Green: 2,Amber: 1, Red: when  given Green, Green, Red, Amber, Red ", () =>{
    //     expect(report("Green, Green, Red, Amber, Red" ).toBe("Green: 2\nAmber: 1\nRed: 2"));
    // })
    it("Returns a single green grade",() => {
        expect(report("Green")).toBe("Green: 1")
    })

    it("Returns a single amber grade",() => {
        expect(report("Amber")).toBe("Amber: 1")
    })

    it("Returns a single red grade",() => {
        expect(report("Red")).toBe("Red: 1")
    })
    
    it("Returns two green grades", () =>{
        expect(report("Green,Green")).toBe("Green: 2")
    })

    it("Returns three green grades", () =>{
        expect(report("Green,Green,Green")).toBe("Green: 3")
    })

    it("Returns two amber grades", () =>{
        expect(report("Amber,Amber")).toBe("Amber: 2")
    })

    it("Returns three amber grades", () =>{
        expect(report("Amber,Amber,Amber")).toBe("Amber: 3")
    })
})