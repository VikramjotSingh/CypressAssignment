const applicationLogo = 'img.logo.img-responsive'
const signInButton = 'a.login'
const emailAddressField = '#email'
const passwordField = '#passwd'
const alreadyRegisteredSignInButton = '#SubmitLogin > span'
const pageHeaderLabel = 'h1.page-heading'
const loggedInUserName = 'div.header_user_info span'

export class LoginPage{
    
    //Method to navigate to website.
    navigate(){
      cy.visit('/')
                   }

    //Method to verify that application logo is visible
    isApplicationLogoVisible(){
        cy.get(applicationLogo).should('be.visible')
    }

        //Method to login into application.
    loginToApplication(username, password){
        cy.get(signInButton).click()

        //Verify that user is navigated to Authentication page.
        cy.get(pageHeaderLabel).should('have.text', 'Authentication');
    
           //Enter username in 'Email Address' field.
        cy.get(emailAddressField).type(username)
    
       //Enter password in 'Password' field.
       cy.get(passwordField).type(password)
    
       //Click on 'Sign In' button.
       cy.get(alreadyRegisteredSignInButton).click()
          
        }

    //Method to verify that user is successfully able to login the application.
    isCorrectLoggedInUserNameDisplayed(userName){
    cy.get(loggedInUserName).should('have.text', userName);
    }

    //Method to verify that correct page header is displayed.
    isCorrectPageHeaderDisplayed(pageHeaderName){
    cy.get(pageHeaderLabel).should('have.text', pageHeaderName);
}

}