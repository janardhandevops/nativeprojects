// import ApiManager from './ApiManager';


// export const product_api = async data => {
  
//     try {
//       const result = await ApiManager('/store/catalog/products/featured', {
//         method: 'GET',
//         timeout:6000
//         });
//         const data = await result.json();
//       return data;
//     } catch (error) {
//       return error.response.data;
//     }
//   };

  export function getProducts(){
    return 
    fetch('http://13.232.188.75:8080/api/store/catalog/products/featured').
    then(data=>data.json());
};

// export function getProduct(id){
//     return product_api.find((product) => product.id == id);
// }

