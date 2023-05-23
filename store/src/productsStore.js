import { url } from "css-tree";

const productsArray = [
    {
        id: "price_1LnUTFDM1jwCEz8OGoOSXiSM",
        title: "Channabesan",
        price: "140",
        
        
        
    },
    {
        id: "price_1LnUTxDM1jwCEz8OAqHYTwKQ",
        title: "Wheat",
        price: " 100"
    },
    {
        id: "price_1LnUUoDM1jwCEz8OvxIcJ7to",
        title: "Ragi",
        price: "250"
    },
    {
       id:"2",
       title:"tomato",
       price:"20"
      

    },
    {

     id:"3",
     title:"cabbage",
     price:40
    },
    {
     id:"4",
     title:"betrott",
     price:"50"
     

    },
    {
    id:"5",
    title:"onion",
    price:"20",

    },
    {
     id:"6",
     title:"javar",
     price:80
    },{
     id:"7",
     titlle:"chilli",
     price:20
    },
    {
      id:"9",
      title:"jinger",
      price:25
    },
    {
    id:"10",
    title:"betroot",
    price:25
    },
    {
     id:"11",
     title:"orange",
     price:30
    },
    {
   id :"12",
   title:"carrot",
   price:12
    },
    {
     id:"13",
     title:"banna",
     price:35
    },
    {
     id:15,
     title:"millet",
     price:50
    }


];

function getProductData(id) {
    let productData = productsArray.find(value=> value.id===id );

    if (productData === undefined) {
        console.log("Product data does not exist for ID: ");
        return undefined;
    }


    return productData;
}

export { productsArray, getProductData };