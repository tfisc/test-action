const rewire = require("rewire")
const first_test = rewire("./first-test")
const add = first_test.__get__("add")
// @ponicode
describe("add", () => {
    test("0", () => {
        let result = add("\"#'{7855663]}ééàà", "\"#'{7855663]}ééàà")
        expect(result).toBe("\"#'{7855663]}ééàà\"#'{7855663]}ééàà")
    })

    test("1", () => {
        let result = add("\"#'{7855663]}ééàà", "Ponicponicodeponiponicoooooooooode18774563")
        expect(result).toBe("\"#'{7855663]}ééààPonicponicodeponiponicoooooooooode18774563")
    })

    test("2", () => {
        let result = add("\"#'{7855663]}ééàà", "Thank you for using PONICODE! Get to 80% coverage super fast !")
        expect(result).toBe("\"#'{7855663]}ééààThank you for using PONICODE! Get to 80% coverage super fast !")
    })

    test("3", () => {
        let result = add("\"#'{7855663]}\u00e9\u00e9\u00e0\u00e0", "Thank you for using PONICODE! Get to 80% coverage super fast !")
        expect(result).toBe("\"#'{7855663]}ééààThank you for using PONICODE! Get to 80% coverage super fast !")
    })

    test("4", () => {
        let result = add("\"#'{7855663]}\u00e9\u00e9\u00e0\u00e0", "Ponicponicodeponiponicoooooooooode18774563")
        expect(result).toBe("\"#'{7855663]}ééààPonicponicodeponiponicoooooooooode18774563")
    })

    test("5", () => {
        let result = add("123456789", "p")
        expect(result).toBe("123456789p")
    })

    test("6", () => {
        let result = add("123456789", "123456789")
        expect(result).toBe("123456789123456789")
    })

    test("7", () => {
        let result = add("\"#'{7855663]}\u00e9\u00e9\u00e0\u00e0", "\"#'{7855663]}\u00e9\u00e9\u00e0\u00e0")
        expect(result).toBe("\"#'{7855663]}ééàà\"#'{7855663]}ééàà")
    })

    test("8", () => {
        let result = add("Ponicponicodeponiponicoooooooooode18774563", "Thank you for using PONICODE! Get to 80% coverage super fast !")
        expect(result).toBe("Ponicponicodeponiponicoooooooooode18774563Thank you for using PONICODE! Get to 80% coverage super fast !")
    })
})
