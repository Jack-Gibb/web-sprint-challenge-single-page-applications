describe("Order Form Tests", () => {
    beforeEach(()  => {
        
        cy.visit("http://localhost:3000/pizza");
    })

    const orderNameInput = () => cy.get("input[id=name-input]");
    const specialInput = () => cy.get("textarea[id=special-text]");
    const pigBox = () => cy.get("input[name=pig]");
    const cowBox = () => cy.get("input[name=cow]");
    const fruitBox = () => cy.get("input[name=fruit]");
    const submitBtn = () => cy.get(`button[type="submit"]`);

    it('sanity test', () => {
        expect(1 + 2).to.equal(3);
    } )

    it('can type in the inputs', () => {
        
        orderNameInput()
            .should('have.value', '')
            .type('Sample Name')
            .should('have.value', 'Sample Name');

        specialInput()
            .should('have.value', '')
            .type('Sample Instructions')
            .should('have.value', 'Sample Instructions');

        
    })

    it('can check the box', () => {

        pigBox()
            .check()
            .should('be.checked')

        cowBox()
            .check()
            .should('be.checked')

        fruitBox()
            .check()
            .should('be.checked')
    })
    it('can submit', () => {
        
        submitBtn()
            .click()
    })

})