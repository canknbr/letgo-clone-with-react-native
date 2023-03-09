import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';
import { Product } from '../../models';
import { AntDesign } from '@expo/vector-icons';
import FavoriteProductItem from '../FavoriteProductItem';
type MainProductsProps = {
  mainProducts: Product[];

};
const MainProducts = ({ mainProducts }: MainProductsProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleProduct}>
        <Text style={styles.topicTitle}>Ankara</Text>
        <View style={styles.seeAllContainer}>
          <Text style={styles.detailTitle}>Düzelt</Text>

          <AntDesign name="right" size={14} color="#FFC700" />
        </View>
      </View>
      <View style={
        styles.productContainer
      }>
        {mainProducts.map(product => (
          <FavoriteProductItem
            key={product.id}
           prodType="main" product={product} />
        ))}
      </View>
    </View>
  );
};

export default MainProducts;
