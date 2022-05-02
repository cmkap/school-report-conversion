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

    it("Returns two amber grades", () =>{
        expect(report("Amber,Amber")).toBe("Amber: 2")
    })

    it("Returns two red grades", () =>{
        expect(report("Red,Red")).toBe("Red: 2")
    })
    
    it("Returns three green grades", () =>{
        expect(report("Green,Green,Green")).toBe("Green: 3")
    })

    it("Returns three amber grades", () =>{
        expect(report("Amber,Amber,Amber")).toBe("Amber: 3")
    })

    it("Returns three red grades", () =>{
        expect(report("Red,Red,Red")).toBe("Red: 3")
    })

    it("Returns one green and one amber", () =>{
        expect(report("Green,Amber")).toBe("Green: 1\nAmber: 1")
    })
    it("Returns one green and one amber and one red", () =>{
        expect(report("Green,Amber,Red")).toBe("Green: 1\nAmber: 1\nRed: 1")
    })
})