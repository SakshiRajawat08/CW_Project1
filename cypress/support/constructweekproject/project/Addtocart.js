class Addtocart{
    addproduct(){
        cy.contains('Add to Cart').click()
        cy.contains('Add to Cart').click()
        cy.get('button[class="btn btn-primary btn-lg btn-block"]').click()
    }
}

export default Addtocart;