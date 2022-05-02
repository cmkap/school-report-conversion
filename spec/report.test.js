report = require('../src/report')

describe('report', () =>{
    // it("Green: 2,Amber: 1, Red: when  given Green, Green, Red, Amber, Red ", () =>{
    //     expect(report("Green, Green, Red, Amber, Red" ).toBe("Green: 2\nAmber: 1\nRed: 2"));
    // })
    it("processes a single grade",() => {
        expect(report("Green")).toBe("Green: 1")
    })
    
})