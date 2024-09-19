class loginpo{

EnterURL(){
    cy.visit('https://tutorialsninja.com/demo/index.php?route=account/login')
}

login(){
    
    cy.get('input[id="input-email"]').type('rajawatsakshi400@gmail.com')
    cy.get('input[name="password"]').type('sakshi')
    cy.get('input[type="submit"]').click()
}


}

export default loginpo;