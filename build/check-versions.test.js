const rewire = require("rewire")
const check_versions = rewire("./check-versions")
const exec = check_versions.__get__("exec")
// @ponicode
describe("exec", () => {
    test("0", () => {
        let callFunction = () => {
            exec("SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            exec("DELETE FROM Projects WHERE pid = %s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            exec("UNLOCK TABLES;")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            exec("DROP TABLE tmp;")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            exec("UPDATE Projects SET pname = %s WHERE pid = %s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            exec(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
