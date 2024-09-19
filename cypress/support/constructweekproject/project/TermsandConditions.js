class TermsandConditions{
    termscondition(){
        cy.get('input[type="checkbox"]').check().should('be.checked')
    }
}
export default TermsandConditions;