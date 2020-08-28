const INITIAL_STATE = {

    products: [
        {
          id: 1,
          name: "Tenis adidas",
          price: 50,
          imgUrl:
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/0b9411c8634d419f84c0a9d8010d24e4_9366/Tenis_U_Path_Run_Negro_G28107_01_standard.jpg",
          description: "Tenis adidas Path Run en color negro",
          category: "Deportes",
        },
        {
          id: 2,
          name: "Remera Urban",
          price: 200,
          imgUrl:
            "https://www.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/6/4/640020852419036-1.jpg",
          description: "remera color azul",
          category: "Deportes",
        },
        {
          id: 3,
          name: "camisa adidas",
          price: 20,
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRnQBlr_-Bd6aoaokB4dRFZP5tb_bo2lNMDb6Xy8mDWI7o5lh7j2vChcupRB4h7sD50oJ_qP64&usqp=CAc",
          description: "camisa adidas Path Run en color gris",
          category: "Deportes",
        },
        {
          id: 4,
          name: "Short adidas",
          price: 69,
          imgUrl:
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/6d8a2856a3e44e92b42da805004f50b3_9366/Shorts_Parma_16_Negro_AJ5880_01_laydown.jpg",
          description: "Shorts adidas color negro deportivos",
          category: "Deportes",
        },
        {
          id: 5,
          name: "Computadora Gamer HP",
          price: 250,
          imgUrl:
            "https://d22k5h68hofcrd.cloudfront.net/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c06365240_2.png",
          description:
            "Computadora Gamer HP Pavilion color negro teclado retroiluminado",
          category: "Tecnologia",
        },
        {
          id: 6,
          name: "Gorra NIKE",
          price: 12,
          imgUrl:
            "https://www.innvictus.com/medias/IN-942212-631-1.png?context=bWFzdGVyfGltYWdlc3wxMjMzNDJ8aW1hZ2UvcG5nfGltYWdlcy9oMjEvaDFlLzkyNTMzNDMxMzM3MjYucG5nfGM4YTQ4YWYzMmI4YTJkMjE0Y2M5YzgxZmU1MTU1ZjdjNDA1ZWJlMDQ0MzJiMjc5NGI3NDkyOWJhNzY5NTNjMGI",
          description: "Gorra NIKE, color rosa, deportiva",
          category: "Deportes",
        }
      ],

      cart:{  
        
        items:[],
        total: 0
      },
    
      showCart: false,   
}

export const cartReducer = (previousState = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":{
            let cart = [...previousState.cart];
            const product = previousState.products.find((e) => e.id === action.payload);
            const productCart = cart.find(
                (item) => item.id === product.id
            );

            if(productCart){
                let index = cart.items.findIndex(
                    (item) => item.id === product.id
                );
                cart.items[index].count += 1;
            }
            else
            {
                cart.push(
                            {
                                id: product.id,
                                imgUrl: product.imgUrl,
                                name: product.name,
                                count: 1
                            }
                          );
            }
            cart.total += product.price
            console.log("AGREGANDO PRODUCTO")
            return { ...previousState, cart: cart };
        }  
        case "DELETE_PRODUCT":{
            let cart = [...previousState.cart];
            const product = previousState.products.find((e) => e.id === action.payload);
            let index = cart.items.findIndex(
                (item) => item.id === action.payload
            );
            if(cart.items[index].count === 1){
                cart.items.splice(index, 1)
            }
            else{
                cart.items[index].count -= 1;
            }
            cart.total -= product.price
            console.log("ELIMINANDO PRODUCTO")
            return { ...previousState, cart: cart };
        }
        case "SHOW_CART":{
            let showCart = [...previousState.showCart];
            showCart = action.payload
            console.log("MOSTRAR CARRITO " + action.payload)
            return { ...previousState, showCart: showCart };
        }
        default:
            return previousState;
    }    
}