const fadedShortSleeveItemName = 'Faded Short Sleeve T-shirts'
const fadedShortSleeveTshirtProduct = "#homefeatured [alt^='Faded Short Sleeve T-shirts']"
const fadedShortSleeveTshirtAddToCartButton = "//ul[@id = 'homefeatured']//a[@title = 'Faded Short Sleeve T-shirts']/parent::h5/following-sibling::div/a/span[text()= 'Add to cart']"
const successMessageOnModal = 'div.layer_cart_product h2'
const itemNameOnSuccessModal = '#layer_cart_product_title'
const itemColorAndSizeOnSuccessModal = '#layer_cart_product_attributes'
const itemQuantityOnSuccessModal = '#layer_cart_product_quantity'
const fadedShortSleeveItemPrice = "#homefeatured a[title^='Faded Short Sleeve T-shirts']+div+a+div span"
const itemTotalPriceOnSuccessModal = '#layer_cart_product_price'
const noOfItemsInCartMessage = 'div.layer_cart_cart span.ajax_cart_product_txt'
const allProductsTotalInCart = 'span.ajax_block_products_total'
const productShippingCost = 'div.layer_cart_cart span.ajax_cart_shipping_cost'
const totalPriceInCart = 'div.layer_cart_cart span.ajax_block_cart_total'
const proceedToCheckoutButtonOnModal = 'a.btn.btn-default.button.button-medium'
const applicationLogo = 'img.logo.img-responsive'
const itemNameOnHomeScreen = "#homefeatured div.right-block a[title^='Faded Short Sleeve T-shirts']"

export class HomePage {

    clickOnApplicationLogo() {
        //Click on Application logo.
        cy.get(applicationLogo).click()
    }

    registerItemPriceOfTshirtCallback(priceCallback) {
        cy.get(fadedShortSleeveTshirtProduct).trigger('mouseover')
        cy.get(fadedShortSleeveItemPrice).then(($span) => {
            var itemPriceOfTshirt = $span.text().trim()
            priceCallback(itemPriceOfTshirt)
        });
    }

    getTshirtItemName() {
        return fadedShortSleeveItemName
    }

    addItemToTheCart() {
        //cy.get(fadedShortSleeveTshirtProduct).trigger('mouseover', { force: true })
        cy.xpath(fadedShortSleeveTshirtAddToCartButton).click()

    }

    verifyThatCorrectSuccessMessageIsDisplayedOnModal(successMessageText) {
        cy.get(successMessageOnModal).should('contain.text', successMessageText);
        cy.wait(5000)
    }

    verifyThatCorrectItemPriceIsDisplayedInPopUpWindow(itemPrice) {
        cy.get(itemTotalPriceOnSuccessModal).should('have.text', itemPrice)
    }

    verifyThatCorrectItemCountIsDisplayedInCart(itemCount) {
        cy.get(noOfItemsInCartMessage).should('contain.text', itemCount)

    }

    verifyThatCorrectTotalProductsPriceIsDisplayedInCart(itemPrice) {
        cy.get(allProductsTotalInCart).should('have.text', itemPrice)
    }

    verifyThatCorrectShippingCostIsDisplayedInCart(shippingPrice) {
        cy.get(productShippingCost).should('have.text', shippingPrice)
    }

    verifyThatCorrectTotalPriceIsDisplayedInCart(totalPrice) {
        cy.get(totalPriceInCart).should('have.text', totalPrice)
    }

    //Click on Proceed To Checkout button.
    clickOnProceedToCheckoutButtonOnModal() {
        cy.get(proceedToCheckoutButtonOnModal).click()
           }

}