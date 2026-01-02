export const cart = [];

export function addToCart(productId){
    let matchingcartItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId){
            matchingcartItem = cartItem;
        }
    });

    if (matchingItem){
        matchingItem.quantity++;
    }
    else{
        cart.push(
            {
            productId: productId,
            quantity: 1
            }
        );
    }
}
