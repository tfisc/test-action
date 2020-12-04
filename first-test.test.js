const rewire = require("rewire")
const first_test = rewire("./first-test")
const add = first_test.__get__("add")
const addWithIf = first_test.__get__("addWithIf")
const objectTest = first_test.__get__("objectTest")
const callTest = first_test.__get__("callTest")
// @ponicode
describe("add", () => {
    test("0", () => {
        let result = add("\"#'{7855663]}ééàà", "Thank you for using PONICODE! Get to 80% coverage super fast !")
        expect(result).toBe("\"#'{7855663]}ééààThank you for using PONICODE! Get to 80% coverage super fast !")
    })

    test("1", () => {
        let result = add("\"#'{7855663]}ééàà", "p")
        expect(result).toBe("\"#'{7855663]}ééààp")
    })

    test("2", () => {
        let result = add("\"#'{7855663]}ééàà", "Ponicponicodeponiponicoooooooooode18774563")
        expect(result).toBe("\"#'{7855663]}ééààPonicponicodeponiponicoooooooooode18774563")
    })

    test("3", () => {
        let result = add("\"#'{7855663]}\u00e9\u00e9\u00e0\u00e0", "Ponicponicodeponiponicoooooooooode18774563")
        expect(result).toBe("\"#'{7855663]}ééààPonicponicodeponiponicoooooooooode18774563")
    })

    test("4", () => {
        let result = add("\"#'{7855663]}\u00e9\u00e9\u00e0\u00e0", "p")
        expect(result).toBe("\"#'{7855663]}ééààp")
    })

    test("5", () => {
        let result = add("Thank you for using PONICODE! Get to 80% coverage super fast !", "Thank you for using PONICODE! Get to 80% coverage super fast !")
        expect(result).toBe("Thank you for using PONICODE! Get to 80% coverage super fast !Thank you for using PONICODE! Get to 80% coverage super fast !")
    })

    test("6", () => {
        let result = add("Ponicponicodeponiponicoooooooooode18774563", "p")
        expect(result).toBe("Ponicponicodeponiponicoooooooooode18774563p")
    })

    test("7", () => {
        let result = add("p", "Ponicponicodeponiponicoooooooooode18774563")
        expect(result).toBe("pPonicponicodeponiponicoooooooooode18774563")
    })

    test("8", () => {
        let result = add("\"#'{7855663]}\u00e9\u00e9\u00e0\u00e0", "Thank you for using PONICODE! Get to 80% coverage super fast !")
        expect(result).toBe("\"#'{7855663]}ééààThank you for using PONICODE! Get to 80% coverage super fast !")
    })
})

// @ponicode
describe("addWithIf", () => {
    test("0", () => {
        let result = addWithIf(4, "\"#'{7855663]}ééàà")
        expect(result).toBe(NaN)
    })

    test("1", () => {
        let result = addWithIf(4, 0)
        expect(result).toBe(Infinity)
    })

    test("2", () => {
        let result = addWithIf(4.0, 0)
        expect(result).toBe(Infinity)
    })

    test("3", () => {
        let result = addWithIf(NaN, 0)
        expect(result).toBe(NaN)
    })

    test("4", () => {
        let result = addWithIf(NaN, "p")
        expect(result).toBe(NaN)
    })

    test("5", () => {
        let result = addWithIf(4, "\"#'{7855663]}\u00e9\u00e9\u00e0\u00e0")
        expect(result).toBe(NaN)
    })

    test("6", () => {
        let result = addWithIf("Thank you for using PONICODE! Get to 80% coverage super fast !", "Ponicponicodeponiponicoooooooooode18774563")
        expect(result).toBe(NaN)
    })

    test("7", () => {
        let result = addWithIf(-Infinity, 0)
        expect(result).toBe(-Infinity)
    })
})

// @ponicode
describe("objectTest", () => {
    test("0", () => {
        let result = objectTest({ name: "test" })
        expect(result).toBe("name is test")
    })

    test("1", () => {
        let result = objectTest({ name: "object" })
        expect(result).toBe("name is not test")
    })

    test("2", () => {
        let result = objectTest({ name: "array" })
        expect(result).toBe("name is not test")
    })

    test("3", () => {
        let result = objectTest({ name: "number" })
        expect(result).toBe("name is not test")
    })

    test("4", () => {
        let result = objectTest({ name: "string" })
        expect(result).toBe("name is not test")
    })
})

// @ponicode
describe("callTest", () => {
    test("0", () => {
        let result = callTest("\"#'{7855663]}ééàà")
        expect(result).toBe("\"#'{7855663]}ééàà2undefined")
    })

    test("1", () => {
        let result = callTest("\"#'{7855663]}\u00e9\u00e9\u00e0\u00e0")
        expect(result).toBe("\"#'{7855663]}ééàà2undefined")
    })

    test("2", () => {
        let result = callTest("p")
        expect(result).toBe("p2undefined")
    })

    test("3", () => {
        let result = callTest("Thank you for using PONICODE! Get to 80% coverage super fast !")
        expect(result).toBe("Thank you for using PONICODE! Get to 80% coverage super fast !2undefined")
    })
})
