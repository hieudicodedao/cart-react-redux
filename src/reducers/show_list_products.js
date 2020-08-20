//import * as types from '../variables/const_var'
// var randomstring = require('randomstring')
const initialState = [
    {
        id : 1,
        img : "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
        name : "Iphone 6",
        description : "Producted by Apple",
        rating :5,
        price : 1000
    },
    {
        id : 2,
        img : "https://didongviet.vn/pub/media/catalog/product//i/p/iphone-xs-max-64gb-didongviet_4.jpg",
        name : "Phone XS",
        description : "Assembly in Chine",
        rating :3,
        price : 2500
    },
    {
        id : 3,
        img : "https://vnn-imgs-a1.vgcloud.vn/znews-photo.zadn.vn/w1024/Uploaded/lce_jwquc/2020_08_14/iPhone_12_mock_up_phonearena.jpg",
        name : "Iphone 12",
        description : "Assembly in Viet Name",
        rating :4,
        price : 5500
    },
    
]

const list_product = (state = initialState , action) =>{
    switch(action.type){
        default : 
            return [...state];
    }
}

export default list_product