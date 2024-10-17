import React from "react";

const Product = ({productName,price}) => {
  // console.log(props)
  return (
    <div>
      <div>ÜRÜN BİLGİLERİ</div>

      <div>
        <div>İsim: {productName}</div>
        <div>Fiyat: {price}</div>
      </div>
      
    </div>
  );
};

export default Product;
