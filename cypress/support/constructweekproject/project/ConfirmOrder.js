class ConfirmOrder{
    confirm_order(){
        cy.get('input[id="button-confirm"]').click({force:true});
    }
}

export default ConfirmOrder;