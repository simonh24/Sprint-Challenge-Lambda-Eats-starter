describe("Form Inputs", () => {
    it("can navigate to the site", () => {
        cy.visit("http://localhost:3000/")
        cy.get(".pizzaLink")
        .click()
        cy.url().should("include", "http://localhost:3000/pizza")
    })
    it("can input text to name and special instructions", () => {
        cy.get("input[name='username']")
        .type("Simon")
        cy.get("input[name='specialInstructions']")
        .type("None.")
    })
    it("can select a size", () => {
        cy.get("select")
        .select("small")
    })
    it("can select a sauce", () => {
        cy.get("input[value='garlicRanch']")
        .check()
        cy.get("input[value='originalRed']")
        .check()
    })
    it("can select multiple toppings", () => {
        cy.get("input[name='pepperoni']")
        .check()
        cy.get("input[name='sausage']").check()
        cy.get("input[name='bacon']").check()
    })
    it("can click submit", () => {
        cy.get("button").click()
        cy.get("input[name='username']")
        .should("have.value", "")
        cy.get("input[name='specialInstructions']")
        .should("have.value", "")
    })
})