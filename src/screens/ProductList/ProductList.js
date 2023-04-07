import React,{useEffect, useState} from 'react';
import {StyleSheet,FlatList,View,Text,TouchableOpacity,Left,Thumbnail,Image, Button,Alert } from 'react-native';
import { getProducts } from "../../api/product_api";
import {Product} from "../../components/Product";
import axios from "axios";

const ProductList = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [products, setProducts] = React.useState([]);

  // const getDataUsingSimpleGetCall = () => {
  //   axios
  //     .get('http://13.232.188.75:8080/api/store/catalog/products/featured')
  //     .then(function (response) {
  //       // handle success
  //       // alert(JSON.stringify(response.data));
  //       setProducts(JSON.stringify(response.data));
  //       // alert(products)
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       alert(error.message);
  //     })
  //     .finally(function () {
  //       // always executed
  //       alert('Finally called');
  //     });

  //   }
  //   function renderProduct({item: product}){
  //       return(
  //           <Product 
  //               {...product}
  //               // onPress={() => {
  //               //     navigation.navigate('ProductDetails', {productId: product.id})
  //               // }}
  //           />
            
  //       )
  //   }
    
    
  //  let respJson[]=await resp.json();
  //        console.warn(respJson);
    // useEffect(()=>{
      
    

    // },[products]);
    // console.warn(products);
    const addtocart=(item)=>{
      Alert.alert('Add to cart!'+item.price);
    }

    useEffect(() => {
      // fetch('http://13.232.188.75:8080/api/store/catalog/products/featured')
      //   .then((response) => response.json())
      //   .then((json) => setProducts(json))
      //   .catch((error) => console.error(error))
      //   .finally(() => setLoading(false));
      axios.get('http://13.232.188.75:8080/api/store/catalog/products/featured').then((response) => {
        setProducts(response.data);
      });

    }, []);
    return (
      <View>

     
      <FlatList
        style={styles.productsList}
        contentContainerStyle={styles.productsListContainer}
        keyExtractor={(item) => item.productName.toString()}
        data={products}
        renderItem={({ item }) => (
          <><Text>{item.sku + '. '+item.price }</Text>
         
          <Image source={{uri:item.imageUrl.toString()}} style = {{ width: 200, height: 200 }}/>
          <Button onPress={addtocart(item)} title="addtocart" />
         </>
        )} />
         </View>
    // );
    // <View>{products.map(item => {item.productName})}
    // </View>
  //  <View>
  //   <Text>Hello</Text>
  //   <TouchableOpacity
  //       style={styles.buttonStyle}
  //       onPress={getDataUsingSimpleGetCall}>
  //       <Text>Simple Get Call</Text>
  //     </TouchableOpacity>
  //     </View>
    );
  }
  const styles = StyleSheet.create({
    productsList: {
      backgroundColor: "#eeeeee",
    },
    productsListContainer: {
      backgroundColor: "#eeeeee",
      paddingVertical: 8,
      marginHorizontal: 8,
    },
    buttonStyle: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      width: '100%',
      marginTop: 16,
    },
    image: {
      width: '100%',
      height:'50%',
      aspectRatio: 1
  },
  });
  
  
export default ProductList;
