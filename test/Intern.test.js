const Intern = require("../lib/Intern")

describe("class: Intern", () => {
    describe("properties", () => { 
        it("Has a name property that is a string" , () => {
            const intern = new Intern("Charles Cox", 1, "charles.cox.iii@aol.com", "UC Berkeley")

            expect(intern.hasOwnProperty("nameInput")).toBeTruthy();
            expect(typeof intern.nameInput).toBe("string")
        })
        it("Has an id property that is a number", () => {
            const intern = new Intern("Charles Cox", 1, "charles.cox.iii@aol.com", "UC Berkeley")

            expect(intern.hasOwnProperty("id")).toBeTruthy();
            expect(typeof intern.id).toBe("number")
        })
        it("Has an email property that is a string", () => {
            const intern = new Intern("Charles Cox", 1, "charles.cox.iii@aol.com", "UC Berkeley")

            expect(intern.hasOwnProperty("email")).toBeTruthy();
            expect(typeof intern.email).toBe("string")
        })
        it("Has a school property that is a string" , () => {
            const intern = new Intern("Charles Cox", 1, "charles.cox.iii@aol.com", "UC Berkeley")

            expect(intern.hasOwnProperty("school")).toBeTruthy();
            expect(typeof intern.school).toBe("string")
        })
    })
    describe("methods", () => {
        describe("getName", () => {
            it("Should return the name of the intern", () => {
                const intern = new Intern("Charles Cox", 1, "charles.cox.iii@aol.com", "UC Berkeley")

                expect(intern.getName()).toBe("Charles Cox")
            })
        })
        describe("getId", () => {
            it("Should return the id of the intern", () => {
                const intern = new Intern("Charles Cox", 1, "charles.cox.iii@aol.com", "UC Berkeley")

                expect(intern.getId()).toBe(1)
            })
        })
        describe("getEmail", () => {
            it("Should return the email of the intern", () => {
                const intern = new Intern("Charles Cox", 1, "charles.cox.iii@aol.com", "UC Berkeley")

                expect(intern.getEmail()).toBe("charles.cox.iii@aol.com")
            })
        })
        describe("getRole", () => {
            it("Should return the role of the intern", () => {
                const intern = new Intern("Charles Cox", 1, "charles.cox.iii@aol.com", "UC Berkeley")

                expect(intern.getRole()).toBe("Intern")
            })
        })
        describe("getSchool", () => {
            it("Should return the school of the intern", () => {
                const intern = new Intern("Charles Cox", 1, "charles.cox.iii@aol.com", "UC Berkeley")

                expect(intern.getSchool()).toBe("UC Berkeley")
            })
        })
    })
})