export const getProducts = async () => {
    let result = await fetch("https://fakestoreapi.com/products");
    result = await result.json();
    return result;
};