import { View, ScrollView, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';
import productsLetgo from '../../../assets/products';
import { Product } from '../../models';
import FavoriteProductItem from '../../components/FavoriteProductItem';
const FavoriteProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    setProducts(productsLetgo);
  }, []);

  return (
    <View style={styles.productsContainer}>
      {/*header */}
      <View style={styles.titleProducts}>
        <Text style={styles.topicTitle}>Vitrin İlanları</Text>
        <View style={styles.seeAllContainer}>
          <Text style={styles.seeAllText}>Hepsini Gör</Text>
          <AntDesign name="right" size={20} color="#FFC700" />
        </View>
      </View>
      <ScrollView
        style={styles.products}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {products.map(product => (
          <FavoriteProductItem prodType='favorite' product={product} key={product.id} />
        ))}
      </ScrollView>
    </View>
  );
};

export default FavoriteProducts;
