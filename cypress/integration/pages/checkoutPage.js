const unitPriceOnCheckoutPage = 'tr.cart_item.last_item.first_item td.cart_unit span span'
const itemQuantityOnCheckoutPage = 'tr.cart_item.last_item.first_item td.cart_quantity input'
const totalPriceOnCheckoutPage = '#total_price_container span'
const proceedToCheckoutButtonOnSummaryPage = 'a.button.btn.btn-default.standard-checkout.button-medium'
const proceedToCheckoutButtonOnCheckoutPage = 'button.button.btn.btn-default.button-medium'
const useDeliveryAddressAsBillingAddressCheckbox = '#uniform-addressesAreEquals input'
const checkoutPageAddressHeader = 'li.step_current span'
const checkoutPageShippingHeader = 'li.step_current.fourth span'
const checkoutPagePayementHeader = 'li.step_current.fifth span'
const deliveryDate = 'table.resume.table.table-bordered td:nth-child(3)'
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
const deliveryAddress = '#address_delivery'
const deliveryInvoice = '#address_invoice'
const orderReferenceNumber = 'tr.first_item td.history_link'
const orderDate = 'tr.first_item td.history_date.bold'
const totalPriceOnCompletedOrderPage = 'tr.first_item td.history_price span'
const paymentMode = 'tr.first_item td.history_method'
const itemNameOnCheckoutPage = 'td.cart_description p.product-name a'
const orderCompletion = 'p.cheque-indent strong'
const shippingChargesOnShippingPage = 'div.delivery_option_price'
const unitPriceOnShippingPage = 'td.cart_unit span span'
const itemQuantityOnShippingPage = 'td.cart_quantity.text-center span'

export class CheckoutPage {

    //Method to verify if correct Item name is displayed
    isCorrectItemNameDisplayedOnCheckoutPage(itemName) {
        cy.get(itemNameOnCheckoutPage).should('have.text', itemName)

    }
    //Method to verify if correct Unit price is diplayed.
    isCorrectUnitPriceOfItemDisplayed(itemPrice) {
        cy.get(unitPriceOnCheckoutPage).should('have.text', itemPrice)
    }

    //Method to verify if correct Unit price is diplayed on Shipping page.
    isCorrectUnitPriceOfItemDisplayedOnShippingPage(itemPrice) {
    cy.get(unitPriceOnShippingPage).should('have.text', itemPrice)
}

    //Method to verify if correct Item quantity is displayed.
    iscorrectItemQuantityDisplayed(itemQuantity) {
        cy.get(itemQuantityOnCheckoutPage).should('have.value', itemQuantity)
    }

    //Method to verify Total price.
    isCorrectTotalPriceDisplayedOnCheckoutPage(totalPrice) {
        cy.get(totalPriceOnCheckoutPage).should('have.text', totalPrice)
    }

    //Method to Click on Proceed to Checkout button on Summary page.
    clickOnProceedToCheckoutButtonOnSummaryPage() {
        cy.get(proceedToCheckoutButtonOnSummaryPage).click()
    }

    //Method to Click on Proceed to Checkout button on Checkout page.
    clickOnProceedToCheckoutButtonOnCheckoutPage() {
        cy.get(proceedToCheckoutButtonOnCheckoutPage).click()
    }

    //verify that user is on correct section on checkout page.
    isUserOnCorrectSectionOnCheckoutPage(sectionName) {
        cy.get(checkoutPageAddressHeader).should('contain.text', sectionName)
    }

    //Verify that 'Use the delivery address as the billing address.' checkbox is checked.
    isUseDeliveryAddressAsBillingAddressCheckboxChecked() {
        cy.get(useDeliveryAddressAsBillingAddressCheckbox).should('be.checked')
    }

    //Verify that correct Delivery address is displayed 
    isCorrectDeliveryAddressDisplayed() {
        cy.get(deliveryAddress).find('li').should(($li) => {
            let texts = $li.map((i, el) =>
                Cypress.$(el).text())
            texts = texts.get()
            expect(texts).to.have.length(7)
            expect(texts, 'has expected text in each paragraph').to.deep.eq([
                'Your delivery address',
                'Test  User',
                '246, Company Road 166002 ',
                'Chandigarh, Florida 00000',
                'United States',
                '7888788878',
                'Update',
            ])
        })

    }
    //Verify that correct Invoice Address is displayed.
    isCorrectBillingAddressDisplayed() {
        cy.get(deliveryInvoice).find('li').should(($li) => {
            let texts = $li.map((i, el) =>
                Cypress.$(el).text())
            texts = texts.get()
            expect(texts).to.have.length(7)
            expect(texts, 'has expected text in each paragraph').to.deep.eq([
                'Your billing address',
                'Test  User',
                '246, Company Road 166002 ',
                'Chandigarh, Florida 00000',
                'United States',
                '7888788878',
                'Update',
            ])
        })

    }

    //Click on 'Terms of service' cehckbox.
    clickOnTermsOfServiceCheckbox() {
        cy.get(termsOfServiceCheckboxOnShippingPage).check()
    }

    //Click on 'Pay by bank wire' option.
    clickOnPayByBankWireOption() {
        cy.get(payByBankwireOptionOnPaymentPage).click()
    }

    //Verify that correct Page Subheader is displayed.
    isCorrectPageSubheaderDisplayed(subheaderText) {
        cy.get(bankWirePaymentHeading).should('contain.text', subheaderText)
    }

    //Verify that correct delivery option price is displayed.
    isCorrectShippingChargesDisplayed(shippingCharges) {
        cy.get(shippingChargesOnShippingPage).should('contain.text', shippingCharges)
    }

    //Verify that correct 'Short summary of Order' is displayed.
    isCorrectShortSummaryOfOrderDisplayed() {
        cy.get('div.box.cheque-box').find('p').should(($p) => {
            let texts = $p.map((i, el) =>
                Cypress.$(el).text())
            texts = texts.get()
            expect(texts).to.have.length(4)
            expect(texts, 'has expected text in each paragraph').to.deep.contain.text([
                'You have chosen to pay by bank wire. Here is a short summary of your order:',
                '- The total amount of your order comes to: $18.51 (tax incl.)',
                '- We allow the following currency to be sent via bank wire: Dollar',
                '- Bank wire account information will be displayed on the next page. - Please confirm your order by clicking "I confirm my order.".',
            ])
        })

    }

    //Method to click on 'I confirm my order' button.
    clickOnIConfirmMyOrderButton() {
        cy.get(iConfirmMyOrderButton).click()
    }

    //Method to click on 'Back to orders' page.
    clickOnBackToOrdersButton() {
        cy.get(backToOrdersButton).click()
    }

    //Verify that Page Heading is displayed.
    isCorrectPageHeadingDisplayed(pageHeading) {
        cy.get(orderHistoryPageHeading).should('have.text', pageHeading)
    }

    //Verify that correct order reference number is displayed.
    isCorrectOrderReferenceNumberDisplayed(orderNumber) {
        cy.get(orderReferenceNumber).should('have.text', orderNumber)
    }

    //Verify that correct Total Price is displayed
    isCorrectTotalPriceDisplayedOnOrderHistoryPage(totalPrice) {
        cy.get(totalPriceOnCompletedOrderPage).should('contain.text', totalPrice)

    }

    //Verify that correct Payment mode is displayed.
    isCorrectPaymentModeDisplayed() {

    }

    //Verify that Order Completion message is displayed.
    isOrderCompletionMessageDisplayed(orderCompletionMessage) {
        cy.get(orderCompletion).should('have.text', orderCompletionMessage)
    }

    //Verify that correct order completion details are displayed.
    isCorrectOrderCompletionDetailsAreDisplayed(orderCompletionMessage){
    cy.get('div.box').should('contain.text', orderCompletionMessage)
    }
    //Verify that correct order Date is displayed.
    isCorrectOrderDateDisplayed(){
        const dayjs = require('dayjs')
        const todaysDate = dayjs().format('MM/DD/YYYY')
        cy.get(orderDate).should('contain.text', todaysDate)
    }
    }
