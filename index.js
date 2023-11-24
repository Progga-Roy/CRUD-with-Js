

const body = document.getElementById('body')
const anotherDiv = document.createElement('div')
anotherDiv.innerHTML =`
<h1 id="loader">Wait for a while :)</h1>
`
body.appendChild(anotherDiv)
let productsData = [];
let loading = false;
const getLoading =()=>{
    if(loading){
        document.querySelector("#loader").style.display = 'block'
    }
    else{
        document.querySelector("#loader").style.display = 'none'
    }
}

const showAllProducts=()=>{
const div = document.createElement('div')
div.classList.add('allProducts-div')
    productsData= productsData.forEach(prod=>{
        div.innerHTML += `
   <div class="products">
        <img class="img" src=${prod.image} alt="image" >
        <div class="products-details"> 
        <h2>${prod.name}</h2>
        <h5> Brand: ${prod.productsBrand}</h5>
        <h4>Price : ${prod.productsPrice}</h4>
        </div>
    </div>
        
        `
    })
    body.appendChild(div)
}



const prepareProductsData = (prods) => {
    console.log(prods)
    const newProducts = prods.map(prod => {
        const { id = 0, price = 0, title = '', thumbnail = '',brand, images = [] } = prod || {}
        const productObj = {
            id: id,
            name: title,
            productsBrand: brand,
            productsPrice: price,
            image: thumbnail,
            totalImages: images.length
        }
        return productObj;
    })
   return newProducts;
}
const getProducts = (data) => {
    console.log(data)
    const { limit = 0, skip = 0, total = 0, products = [] } = data || {}
    productsData = prepareProductsData(products)
    console.log(productsData)
    loading = false;
    getLoading();
    showAllProducts();
    
}

const getProductsApi = () => {
   loading = true;
   getLoading();
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => getProducts(data));
}
getProductsApi()