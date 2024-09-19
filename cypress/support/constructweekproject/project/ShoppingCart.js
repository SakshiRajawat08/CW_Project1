class ShoppingCart{
    shopping(){
        cy.get('a[title="Shopping Cart"]').click()
    }
}

export default ShoppingCart;