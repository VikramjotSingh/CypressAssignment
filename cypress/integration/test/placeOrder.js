/// <reference types="cypress" />

import { CheckoutPage } from "../pages/checkoutPage"
import { HomePage } from "../pages/homePage"
import { LoginPage } from "../pages/login"
const successMessageText = 'Product successfully added to your shopping cart'
const itemCount = 'There is 1 item in your cart.'
const shippingCharges = '$2.00'
const orderCompletionMessage = 'Your order on My Store is complete.'

describe('Test to place the order and to verify that order is placed successfully.', () => {

    const loginPage = new LoginPage
    const homePage = new HomePage
    const checkoutPage = new CheckoutPage

    beforeEach('Visit the application', () => {
        //Navigate to correct URL
        loginPage.navigate()

        //Verify that Application logo is displayed.
        loginPage.isApplicationLogoVisible()
    }),

        it('should place order of an item', () => {
            //Login to the application.
            loginPage.loginToApplication('testuser21@yopmail.com', 'test@1234')

            //Verify that user is successfully able to login the application
            loginPage.isCorrectLoggedInUserNameDisplayed('Test  User')

            //Verify that user is navigated to 'My Account' page.
            loginPage.isCorrectPageHeaderDisplayed('My account')

            //Navigate to application home page.
            homePage.clickOnApplicationLogo()

            var tshirtItemName = homePage.getTshirtItemName()

            //Get Item Price of Tshirt
            homePage.registerItemPriceOfTshirtCallback(
                function (itemPrice) {
                    //Add Item to the cart
                    homePage.addItemToTheCart()

                    //Verify that correct success message is displayed on adding item to cart.
                    homePage.verifyThatCorrectSuccessMessageIsDisplayedOnModal(successMessageText)

                    //Verify taht correct item price is displayed in popup window.
                    homePage.verifyThatCorrectItemPriceIsDisplayedInPopUpWindow(itemPrice)

                    //Verify that correct item count is displayed in cart.
                    homePage.verifyThatCorrectItemCountIsDisplayedInCart(itemCount)

                    //Verify that correct Total Products price is displayed in cart.
                    homePage.verifyThatCorrectTotalProductsPriceIsDisplayedInCart(itemPrice)

                    //Verify that correct shipping cost is displayed in cart.
                    homePage.verifyThatCorrectShippingCostIsDisplayedInCart(shippingCharges)

                    var price = parseFloat(itemPrice.replace('$', ''))
                    var shippingPrice = parseFloat(shippingCharges.replace('$', ''))
                    var totalPrice = price + shippingPrice
                    totalPrice = '$' + totalPrice

                    //Verify that correct Product total is displayed in cart.
                    homePage.verifyThatCorrectTotalPriceIsDisplayedInCart(totalPrice)

                    //Click on Proceed To Checkout button
                    homePage.clickOnProceedToCheckoutButtonOnModal()

                    //Verify that user is landed on 'Summary' section.
                    checkoutPage.isUserOnCorrectSectionOnCheckoutPage('01. Summary')

                    //Verify that correct Item name is displayed.
                    checkoutPage.isCorrectItemNameDisplayedOnCheckoutPage(tshirtItemName)

                    //Verify that correct unit price is displayed.
                    checkoutPage.isCorrectUnitPriceOfItemDisplayed(itemPrice)

                    //Verify that correct item Quantity is displayed.
                    checkoutPage.iscorrectItemQuantityDisplayed(1)

                    //Verify that correct Total price is displayed.
                    checkoutPage.isCorrectTotalPriceDisplayedOnCheckoutPage(totalPrice)

                    //Click on Proceed To Checkout button.
                    checkoutPage.clickOnProceedToCheckoutButtonOnSummaryPage()

                    //Verify that user is landed on 'Address' section.
                    checkoutPage.isUserOnCorrectSectionOnCheckoutPage('03. Address')

                    //Verify that 'Use the delivery address as the billing address.' checkbox is checked.
                    checkoutPage.isUseDeliveryAddressAsBillingAddressCheckboxChecked()

                    //Verify that correct Delivery Address is displayed.
                    checkoutPage.isCorrectDeliveryAddressDisplayed()

                    //Verify that correct Billing Address is displayed.
                    checkoutPage.isCorrectBillingAddressDisplayed()

                    //Click on Proceed To Checkout button.
                    checkoutPage.clickOnProceedToCheckoutButtonOnCheckoutPage()

                    //Verify that user is landed on 'Shipping' section.
                    checkoutPage.isUserOnCorrectSectionOnCheckoutPage('04. Shipping')

                    //Verify that correct 'Delivery Option Price' is displayed.
                    checkoutPage.isCorrectShippingChargesDisplayed(shippingCharges)

                    //Click on Terms of service checkbox.
                    checkoutPage.clickOnTermsOfServiceCheckbox()

                    //Click on Proceed To Checkout button.
                    checkoutPage.clickOnProceedToCheckoutButtonOnCheckoutPage()

                    //Verify that user is landed on 'Payment' section.
                    checkoutPage.isUserOnCorrectSectionOnCheckoutPage('05. Payment')

                    //Verify that correct Unit Price, Quantity and Total is displayed.
                    checkoutPage.isCorrectItemNameDisplayedOnCheckoutPage(tshirtItemName)
                    checkoutPage.isCorrectUnitPriceOfItemDisplayedOnShippingPage(itemPrice)
                    checkoutPage.isCorrectTotalPriceDisplayedOnCheckoutPage(totalPrice)

                    //Click on 'Pay by bank wire' option.
                    checkoutPage.clickOnPayByBankWireOption()

                    //Verify that correct Page Subheader is displayed.
                    checkoutPage.isCorrectPageSubheaderDisplayed('Bank-wire payment.')

                    //Click on I confirm my order button.
                    checkoutPage.clickOnIConfirmMyOrderButton()

                    //Verify that correct completed order summary is displayed.
                    checkoutPage.isOrderCompletionMessageDisplayed(orderCompletionMessage)

                    //Verify that correct order details are displayed.
                    checkoutPage.isCorrectOrderCompletionDetailsAreDisplayed('Amount  $18.51')
                    checkoutPage.isCorrectOrderCompletionDetailsAreDisplayed('Name of account owner  Pradeep Macharla')
                    checkoutPage.isCorrectOrderCompletionDetailsAreDisplayed('Include these details  xyz')
                    checkoutPage.isCorrectOrderCompletionDetailsAreDisplayed('Bank name  RTP')
                    checkoutPage.isCorrectOrderCompletionDetailsAreDisplayed('Your order will be sent as soon as we receive payment.')

                    //Click on 'Back to orders' page.
                    checkoutPage.clickOnBackToOrdersButton()

                    //Verify that user is on Order History page.
                    checkoutPage.isCorrectPageHeadingDisplayed('Order history')

                    //Verify that correct 'Product Details'are displayed.
                    // checkoutPage.isCorrectOrderReferenceNumberDisplayed()
                     checkoutPage.isCorrectOrderDateDisplayed()
                     checkoutPage.isCorrectTotalPriceDisplayedOnOrderHistoryPage(totalPrice)


                }
            )

        })
})