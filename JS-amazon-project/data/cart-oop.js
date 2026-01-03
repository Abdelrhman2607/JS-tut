function Cart(localStorageKey){
    const cart = {
        cartItems: undefined,

        loadFromStorage(){
            this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));
            if (!this.cartItems){
                this.cartItems = [
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
                ];
            }
        },

        saveToStorage(){
            localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
        },

        addToCart(productId){
            let matchingItem;

            this.cartItems.forEach((cartItem) => {
                if (productId === cartItem.productId){
                    matchingItem = cartItem;
                }
            });

            if (matchingItem){
                matchingItem.quantity++;
            }
            else{
                this.cartItems.push(
                    {
                    productId: productId,
                    quantity: 1,
                    deliveryOptionId: '1'
                    }
                );
            }
            this.saveToStorage();
        },

        removeFromCart(productId){
            const newCart = [];

            this.cartItems.forEach((cartItem) => {
                if (cartItem.productId !== productId){
                    newCart.push(cartItem);
                }
            });

            this.cartItems = newCart;
            this.saveToStorage();
        },

        updateDeliveryOption(productId, deliveryOptionId){
            let matchingItem;

            this.cartItems.forEach((cartItem) => {
                if (productId === cartItem.productId){
                    matchingItem = cartItem;
                }
            });

            matchingItem.deliveryOptionId = deliveryOptionId;
            saveToStorage();
        }

    };
    return cart;
}

const cart = Cart("cart-oop");
const bcart = Cart("bcart-oop");
cart.loadFromStorage();