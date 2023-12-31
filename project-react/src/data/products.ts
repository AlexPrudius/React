import {IProduct} from "../models"

export const products: IProduct[]= [
    {
        id:1,
        title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price:109.95,
        description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category:"men's clothing",
        image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating:  {
            rate:3.9,
            count:120
        }
    },
    {
        id:2,
        title:"Mens Casual Premium Slim fit T-Shirts",
        price:22.5,
        description:"Slim-fittng style",
        category:"men's clothing",
        image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating:  {
            rate:4.1,
            count:259
        }
    }
]