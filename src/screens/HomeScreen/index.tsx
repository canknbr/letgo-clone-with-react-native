import { View, ScrollView, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';
import productsLetgo from '../../../assets/products';
import { Product } from '../../models';

import FavoriteProducts from '../../components/FavoriteProducts';
import MainProducts from '../../components/MainProducts';
import CategoryFilter from '../../components/CategoryFilter';
import MessageNotification from '../../components/MessageNotification';
const HomeScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    setProducts(productsLetgo);

    return () => {
      setProducts([]);
    };
  }, []);

  return (
    <ScrollView style={styles.container}>
      <MessageNotification />
      <CategoryFilter />
      <FavoriteProducts />
      <MainProducts
      filtered = {false}
       mainProducts={products} headerString="Ankara" />
    </ScrollView>
  );
};

export default HomeScreen;
