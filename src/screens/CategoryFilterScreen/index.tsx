import { View, Text, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import MessageNotification from '../../components/MessageNotification';
import MainProducts from '../../components/MainProducts';
import productsLetgo from '../../../assets/products';
import { Product } from '../../models';

const CategoryFilterScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    setProducts(productsLetgo);

    return () => {
      setProducts([]);
    }
  }, []);
  return (
    <ScrollView
      style={{
        height: '100%',
        backgroundColor: '#fff',
      }}
    >
      <MessageNotification />
      <MainProducts
        filtered={true}
       headerString="Arama Sonuçları" mainProducts={products} />
    </ScrollView>
  );
};

export default CategoryFilterScreen;
