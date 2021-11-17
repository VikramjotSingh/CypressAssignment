/// <reference types="cypress" />
const applicationLogo = 'img.logo.img-responsive'
const signInButton = 'a.login'
const emailAddressField = '#email'
const passwordField = '#passwd'
const alreadyRegisteredSignInButton = '#SubmitLogin > span'
const pageHeaderLabel = 'h1.page-heading'
const loggedInUserName = 'div.header_user_info span'
const fadedShortSleeveTshirtProduct = "#homefeatured [alt^='Faded Short Sleeve T-shirts']"
const fadedShortSleeveTshirtAddToCartButton = "//ul[@id = 'homefeatured']//a[@title = 'Faded Short Sleeve T-shirts']/parent::h5/following-sibling::div/a/span[text()= 'Add to cart']"
const successMessageOnModal = 'div.layer_cart_product h2'
const itemNameOnSuccessModal = '#layer_cart_product_title'
const itemColorAndSizeOnSuccessModal = '#layer_cart_product_attributes'
const itemQuantityOnSuccessModal = '#layer_cart_product_quantity'
const fadedShortSleeveItemPrice = "//ul[@id = 'homefeatured']//a[@title = 'Faded Short Sleeve T-shirts']/parent::div//div/span"
const itemTotalPriceOnSuccessModal = '#layer_cart_product_price'
const noOfItemsInCartMessage = 'div.layer_cart_cart span.ajax_cart_product_txt'
const allProductsTotalInCart = 'span.ajax_block_products_total'
const productShippingCost = 'span.ajax_cart_shipping_cost'
const totalPriceInCart = 'span.ajax_block_cart_total'
const proceedToCheckoutButtonOnModal = 'a.btn.btn-default.button.button-medium'
const proceedToCheckoutButtonOnCheckoutPage = 'a.button.btn.btn-default.standard-checkout.button-medium'
const useDeliveryAddressAsBillingAddressCheckbox = '#uniform-addressesAreEquals input'
const checkoutPageAddressHeader = 'li.step_current.third span'
const checkoutPageShippingHeader = 'li.step_current.fourth span'
const checkoutPagePayementHeader = 'li.step_current.fifth span'
const deliveryDate= 'table.resume.table.table-bordered td:nth-child(3)'
const termsOfServiceCheckboxOnShippingPage = 'p.checkbox span input'
const payByBankwireOptionOnPaymentPage = 'a.bankwire'
const bankWirePaymentHeading = 'h3.page-subheading'
const paymentModeIndent = 'p.cheque-indent strong'
const shortSumamryOrder_1 = 'div.box.cheque-box p:nth-child(3)'
const shortSumamryOrder_2 = 'div.box.cheque-box p:nth-child(4)'
const shortSumamryOrder_3 = 'div.box.cheque-box p:nth-child(5)'
const iConfirmMyOrderButton = "button[type^='submit'] span i"
const completedOrderDetails = '#center_column div.box'
const backToOrdersButton = 'p.cart_navigation.exclusive a'
const orderHistoryPageHeading = 'h1.page-heading.bottom-indent'
const orderReferenceOnOrderHistory = 'tr.first_item  td:nth-child(1) a'
const dateOnOrderHistory = 'tr.first_item  td.history_date.bold'
const totalPriceOnOrderHistory = 'tr.first_item  td.history_price'
const paymentOnOrderHistory = 'tr.first_item  td.history_method'
const statusOnOrderHistory = 'tr.first_item  td.history_state span'
const invoiceOnOrderHistory = 'tr.first_item  td.history_invoice a'
const detailsOnOrderHistory = 'tr.first_item  td a.btn.btn-default'
const reorderOnOrderHistory = 'tr.first_item  td a i.icon-refresh'

describe('Login to Application', () => {
    beforeEach('Visit the application', () => {
        cy.visit('/')
               //Verify that application logo is displayed.
        cy.get(applicationLogo).should('be.visible')
    }),
  
  it('Visit the application', () => {
    //Click on Sign in button.
    cy.get(signInButton).click()

    //Verify that user is navigated to Authentication page.
    cy.get(pageHeaderLabel).should('have.text', 'Authentication');

       //Enter username in 'Email Address' field.
    cy.get(emailAddressField).type('testuser21@yopmail.com')

   //Enter password in 'Password' field.
   cy.get(passwordField).type('test@1234')

   //Click on 'Sign In' button.
   cy.get(alreadyRegisteredSignInButton).click()

   //Verify that user is successfully able to login the application.
   cy.get(loggedInUserName).should('have.text', 'Test  User');

    //Verify that user is navigated to 'My Account' page.
    cy.get(pageHeaderLabel).should('have.text', 'My account');

    //Click on Application logo.
    cy.get(applicationLogo).click()

    //Hover the cursor over 'Faded Short Sleeve Tshirt' product.
    cy.get(fadedShortSleeveTshirtProduct).trigger('mouseover')

    const itemPrice =  cy.xpath(fadedShortSleeveItemPrice).invoke('text')

    //Click on 'Add to Cart' button.
    cy.xpath(fadedShortSleeveTshirtAddToCartButton).click()
   
    //Verify that success message is displayed in popup window.
    cy.get(successMessageOnModal).should('contain.text', 'Product successfully added to your shopping cart');

//Verify taht correct item price is displayed in popup window.
cy.get(itemTotalPriceOnSuccessModal).should('have.text', itemPrice)

//Verify that correct item count is displayed in cart.
cy.get(noOfItemsInCartMessage).should('contain.text', 'There is 1 item in your cart.')

//Verify that correct Total Products price is displayed in cart.
cy.get(allProductsTotalInCart).should('have.text', itemPrice)

//Verify that correct shipping cost is displayed in cart.
cy.get(productShippingCost).should('have.text', '$2.00')

//Verify that correct Product total is displayed in cart.
cy.get(totalPriceInCart).should('have.text', '$18.51')

//Click on Proceed To Checkout button.
cy.get(proceedToCheckoutButtonOnModal).click()

//Verify that correct Product Image is displayed

//Verify that correct Product Description is displayed.

//Verify that Item is In Stock

//Verify that correct Unit Price, Quantity and Total is displayed

//Verify that correct Total is displayed

//Verify that correct Delivery address is displayed 

//Verify that correct Invoice Address is displayed.

//Click on Proceed to Checkout button.
cy.get(proceedToCheckoutButtonOnCheckoutPage).click()

//verify that user is on 'Address' section.
cy.get(checkoutPageAddressHeader).should('contain.text', '03. Address')

//Verify that 'Use the delivery address as the billing address.' checkbox is checked.
cy.get(useDeliveryAddressAsBillingAddressCheckbox).should('be.checked')

//Verify that correct Delivery address is displayed 

//Verify that correct Invoice Address is displayed.

//Click on Proceed to Checkout button.
cy.get(proceedToCheckoutButtonOnCheckoutPage).click()

//verify that user is on 'Shipping' section.
cy.get(checkoutPageShippingHeader).should('contain.text', '04. Shipping')

//Verify that correct shipping logo is displayed.


//Verify that correct shipping day is displayed.


//Verify that correct 'Delivery Option Price' is displayed.

//Check 'Terms of service' checkbox.
cy.get(termsOfServiceCheckboxOnShippingPage).check() 

//Click on Proceed to Checkout button.
cy.get(proceedToCheckoutButtonOnCheckoutPage).click()


//verify that user is on 'Address' section.
cy.get(checkoutPageAddressHeader).should('contain.text', '05. Payment')

//Verify that correct Product Image is displayed

//Verify that correct Product Description is displayed.

//Verify that Item is In Stock

//Verify that correct Unit Price, Quantity and Total is displayed

//Verify that correct Total is displayed


//Click on 'Pay by bank wire' option.
cy.get(payByBankwireOptionOnPaymentPage).click()

//Verify that correct Page Subheader is displayed.
cy.get(shortSumamryOrder_1).should('contain.text', 'Bank-wire payment.')

//Verify that correct short summary of order is displayed.
cy.get(paymentModeIndent).should('contain.text', 'You have chosen to pay by bank wire. Here is a short summary of your order:')
cy.get(shortSumamryOrder_1).should('contain.text', '- The total amount of your order comes to: $18.51 (tax incl.)')
cy.get(shortSumamryOrder_2).should('contain.text', '- We allow the following currency to be sent via bank wire: Dollar')
cy.get(shortSumamryOrder_3).should('contain.text', '- Bank wire account information will be displayed on the next page.')
cy.get(shortSumamryOrder_3).should('contain.text', '- Please confirm your order by clicking "I confirm my order.".')

//Click on 'I confirm my order' button.
cy.get(iConfirmMyOrderButton).click()

//Verify that correct completed order summary is displayed.
cy.get(paymentModeIndent).should('contain.text', 'Your order on My Store is complete.')
cy.get(shortSumamryOrder_1).should('contain.text', '- The total amount of your order comes to: $18.51 (tax incl.)')
cy.get(shortSumamryOrder_2).should('contain.text', '- We allow the following currency to be sent via bank wire: Dollar')
cy.get(shortSumamryOrder_3).should('contain.text', '- Bank wire account information will be displayed on the next page.')
cy.get(shortSumamryOrder_3).should('contain.text', '- Please confirm your order by clicking "I confirm my order.".')

//Verify that correct completed order details are displayed.

//Click on 'Back to orders' page.
cy.get(backToOrdersButton).click()

//Verify that user is on Order History page.
cy.get(orderHistoryPageHeading).should('have.text', 'Order history')

//Verify that correct order details are displayed.



})
})