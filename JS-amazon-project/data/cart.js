export const cart = [
    {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2
    },
    {
        productId: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
        quantity: 1
    }
];

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
