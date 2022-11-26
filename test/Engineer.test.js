const Engineer = require("../lib/Engineer")

describe("class: Engineer", () => {
    describe("properties", () => { 
        it("Has a name property that is a string" , () => {
            const engineer = new Engineer("Charles Cox", 1, "charles.cox.iii@aol.com", "CharlesCoxC3")

            expect(engineer.hasOwnProperty("nameInput")).toBeTruthy();
            expect(typeof engineer.nameInput).toBe("string")
        })
        it("Has an id property that is a number", () => {
            const engineer = new Engineer("Charles Cox", 1, "charles.cox.iii@aol.com", "CharlesCoxC3")

            expect(engineer.hasOwnProperty("id")).toBeTruthy();
            expect(typeof engineer.id).toBe("number")
        })
        it("Has an email property that is a string", () => {
            const engineer = new Engineer("Charles Cox", 1, "charles.cox.iii@aol.com", "CharlesCoxC3")

            expect(engineer.hasOwnProperty("email")).toBeTruthy();
            expect(typeof engineer.email).toBe("string")
        })
        it("Has a github property that is a string" , () => {
            const engineer = new Engineer("Charles Cox", 1, "charles.cox.iii@aol.com", "CharlesCoxC3")

            expect(engineer.hasOwnProperty("github")).toBeTruthy();
            expect(typeof engineer.github).toBe("string")
        })
    })
    describe("methods", () => {
        describe("getName", () => {
            it("Should return the name of the engineer", () => {
                const engineer = new Engineer("Charles Cox", 1, "charles.cox.iii@aol.com", "CharlesCoxC3")

                expect(engineer.getName()).toBe("Charles Cox")
            })
        })
        describe("getId", () => {
            it("Should return the id of the engineer", () => {
                const engineer = new Engineer("Charles Cox", 1, "charles.cox.iii@aol.com", "CharlesCoxC3")

                expect(engineer.getId()).toBe(1)
            })
        })
        describe("getEmail", () => {
            it("Should return the email of the engineer", () => {
                const engineer = new Engineer("Charles Cox", 1, "charles.cox.iii@aol.com", "CharlesCoxC3")

                expect(engineer.getEmail()).toBe("charles.cox.iii@aol.com")
            })
        })
        describe("getRole", () => {
            it("Should return the role of the engineer", () => {
                const engineer = new Engineer("Charles Cox", 1, "charles.cox.iii@aol.com", "CharlesCoxC3")

                expect(engineer.getRole()).toBe("Engineer")
            })
        })
        describe("getGithub", () => {
            it("Should return the github of the engineer", () => {
                const engineer = new Engineer("Charles Cox", 1, "charles.cox.iii@aol.com", "CharlesCoxC3")

                expect(engineer.getGitHub()).toBe("CharlesCoxC3")
            })
        })
    })
})