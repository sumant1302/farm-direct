export const getCategory =async () => {
    try {
        const response =await fetch('https://fakestoreapi.com/products/categories');
    
        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }
        const result =await response.json();
        console.log(result);
        return result;
    } catch (err) {
        console.log(err);    
    }
    
};