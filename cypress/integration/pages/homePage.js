const fadedShortSleeveItemName = 'Faded Short Sleeve T-shirts'
const fadedShortSleeveTshirtProduct = "#homefeatured [alt^='Faded Short Sleeve T-shirts']"
const fadedShortSleeveTshirtAddToCartButton = "//ul[@id = 'homefeatured']//a[@title = 'Faded Short Sleeve T-shirts']/parent::h5/following-sibling::div/a/span[text()= 'Add to cart']"
const successMessageOnModal = 'div.layer_cart_product h2'
const fadedShortSleeveItemPrice = "#homefeatured a[title^='Faded Short Sleeve T-shirts']+div+a+div span"
const itemTotalPriceOnSuccessModal = '#layer_cart_product_price'
const noOfItemsInCartMessage = 'div.layer_cart_cart span.ajax_cart_product_txt'
const allProductsTotalInCart = 'span.ajax_block_products_total'
const productShippingCost = 'div.layer_cart_cart span.ajax_cart_shipping_cost'
const totalPriceInCart = 'div.layer_cart_cart span.ajax_block_cart_total'
const proceedToCheckoutButtonOnModal = 'a.btn.btn-default.button.button-medium'
const applicationLogo = 'img.logo.img-responsive'

export class HomePage {

    //Method to click on Application logo
    clickOnApplicationLogo() {
    
        cy.get(applicationLogo).click()
    }

    //Method to get item price call back.
    registerItemPriceOfTshirtCallback(priceCallback) {
        cy.get(fadedShortSleeveTshirtProduct).trigger('mouseover')
        cy.get(fadedShortSleeveItemPrice).then(($span) => {
            var itemPriceOfTshirt = $span.text().trim()
            priceCallback(itemPriceOfTshirt)
        });
    }
    //Method to get t-shirt name
    getTshirtItemName() {
        return fadedShortSleeveItemName
    }

    //Method to add item in cart
    addItemToTheCart() {
        cy.xpath(fadedShortSleeveTshirtAddToCartButton).click()

    }

    //Method to verify that correct success message is displayed on modal
    verifyThatCorrectSuccessMessageIsDisplayedOnModal(successMessageText) {
        cy.get(successMessageOnModal).should('contain.text', successMessageText);
        cy.wait(5000)
    }

    //Method to verify that correct item price is displayed on modal
    verifyThatCorrectItemPriceIsDisplayedInPopUpWindow(itemPrice) {
        cy.get(itemTotalPriceOnSuccessModal).should('have.text', itemPrice)
    }
    //Method to verify that correct item count is displayed in cart
    verifyThatCorrectItemCountIsDisplayedInCart(itemCount) {
        cy.get(noOfItemsInCartMessage).should('contain.text', itemCount)

    }

    //Method to verify total product price in cart
    verifyThatCorrectTotalProductsPriceIsDisplayedInCart(itemPrice) {
        cy.get(allProductsTotalInCart).should('have.text', itemPrice)
    }

    //Method to verify that correct shipping cost is dsiplayed in cart.
    verifyThatCorrectShippingCostIsDisplayedInCart(shippingPrice) {
        cy.get(productShippingCost).should('have.text', shippingPrice)
    }

    //Method to verify total product price in cart
    verifyThatCorrectTotalPriceIsDisplayedInCart(totalPrice) {
        cy.get(totalPriceInCart).should('have.text', totalPrice)
    }

    //Click on Proceed To Checkout button.
    clickOnProceedToCheckoutButtonOnModal() {
        cy.get(proceedToCheckoutButtonOnModal).click()
           }

}