import {renderOrderSummary} from '../../scripts/checkout/orderSummary.js';
import {cart, loadFromStorage} from "../../data/cart.js";
import { loadProducts } from '../../data/products.js';

describe("test suite: renderOrderSummary", () => {
    const productId1 = "e43638ce-6aa0-4b85-b27f-e1d07eb678c6";
    const productId2 = "3ebe75dc-64d2-4137-8860-1f5a963e534b";

    beforeAll((done) => {
        loadProducts(() => {
            done();
        });
    });

    beforeEach(() => {
        spyOn(localStorage, 'setItem');

        document.querySelector('.js-test-container').innerHTML = `
            <div class = 'js-order-summary'></div>
            <div class = 'js-payment-summary'></div>
        `;

        spyOn(localStorage, 'getItem').and.callFake(() => {
        return JSON.stringify([
            {
                productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                quantity: 2,
                deliveryOptionId: '1'
            },
            {
                productId: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
                quantity: 1,
                deliveryOptionId: '1'
            }
            ]);
    });
        loadFromStorage();
        renderOrderSummary();
    });

    afterEach(() => {
        document.querySelector('.js-test-container').innerHTML = '';
    });
    
    it("displays cart", () => {
        expect(document.querySelectorAll(".js-cart-item-container").length).toEqual(2);
        expect(document.querySelector(`.js-product-quantity-${productId1}`).innerText).toContain('Quantity: 2');
        expect(document.querySelector(`.js-product-quantity-${productId2}`).innerText).toContain('Quantity: 1');
    });

    it("removes a product", () => {
        document.querySelector(`.js-delete-link-${productId1}`).click();

        expect(document.querySelectorAll(".js-cart-item-container").length).toEqual(1);
        expect(document.querySelector(`.js-cart-item-container-${productId1}`)).toEqual(null);
        expect(document.querySelector(`.js-cart-item-container-${productId2}`)).not.toEqual(null);
        expect(cart.length).toEqual(1);
        expect(cart[0].productId).toEqual(productId2)
    });

});