import React, { Component, useEffect, useState } from 'react';
import ProductImage from './ProductImage';
import ProductName from './ProductName';
import axios from 'axios';
import ProductPrice from './ProductPrice';

const ProductXscroll = (props) => {
  const { children } = props;
  const scope = {
    minWidth: '100%',
    maxWidth: '100%',
  };
  return (
    <div style={scope} className="bo">
      <div id="XProduct" className="product-x-scroll ">
        <ul className="_ul ">
          {children &&
            children.map((item, index) => {
              const [productData, setProductData] = useState([
                {
                  _id: '',
                  name: '',
                  company: '',
                  price: '',
                  image: '',
                },
              ]);
              console.log(item.productId);

              useEffect(async () => {
                try {
                  const res = axios
                    .get('/api/products/readone/' + item.productId)
                    .then((response) => {
                      console.log('res name:', response.data.name);
                      const p = response.data.price;
                      setProductData({
                        _id: response.data._id,
                        name: response.data.name,
                        company: response.data.company,
                        image: response.data.image,
                        price: p
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ','),
                      });
                      console.log(productData);
                    });
                } catch (e) {
                  console.error(e.message);
                }
              }, []);

              return (
                <li class="product-item ">
                  <ProductImage>{productData.image}</ProductImage>
                  <ProductName>
                  {productData.name}
                  </ProductName>
                  <ProductPrice>{productData.price}</ProductPrice>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default ProductXscroll;
