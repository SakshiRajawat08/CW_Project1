class searchfield{



Search(){

    // Enter any existing Product name into the Search text box field . 
    // Click on the button having search icon
 
    
    cy.get('input[placeholder="Search"]').type('hp')
    cy.get('button[class="btn btn-default btn-lg"]').click()
}

}

export default searchfield;