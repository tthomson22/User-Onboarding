describe('First test', () => {
    it('check test', function(){
        expect(true).to.equal(true)
        expect(true).to.equal(false)
    })

    it('visit page', () => {
        cy.visit('http://localhost:3000/')


        cy.get('.name')
            .type('cypressname')
            // .should('include', 'cypressname')

        cy.get('.email')
            .type('fake@email.com')
            
        cy.get('.password')
            .type('password')
        
        cy.get('input[id="submitBtn"]')
            .click()
    })

})

