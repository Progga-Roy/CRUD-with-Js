
const productsData = [];
const prepareProductsData = (prods) => {
    console.log(prods)
    const newProducts = prods.map(prod => {
        const { id = 0, price = 0, title = '', thumbnail = '', images = [] } = prod || {}
        const productObj = {
            id: id,
            name: title,
            productsPrice: price,
            image: thumbnail,
            totalImages: images.length
        }
        return productObj;
    })
    newProducts;
}
const getProducts = (data) => {
    const { limit = 0, skip = 0, total = 0, products = [] } = data || {}
    productsData = prepareProductsData(products)
}

const getProductsApi = () => {
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => getProducts(data));
}
getProductsApi()