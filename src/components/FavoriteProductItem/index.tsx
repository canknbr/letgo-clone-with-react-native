import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import { Product } from '../../models';
import { Ionicons } from '@expo/vector-icons';
type FavoriteProductItemProps = {
  product: Product;
  prodType: string;
};
const FavoriteProductItem = ({
  product,
  prodType,
}: FavoriteProductItemProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={prodType === 'favorite' ? styles.favorite : styles.main}
    >
      <View
        style={prodType === 'favorite' ? styles.favoriteView : styles.mainView}
      >
        <Image
          resizeMode="stretch"
          source={{ uri: product.image }}
          style={
            prodType === 'favorite' ? styles.favoriteImage : styles.mainImage
          }
        />
        {prodType === 'favorite' && parseInt(product.id) % 2 != 0 && (
          <View style={styles.favoriteText}>
            <Text style={styles.favoriteTextTitle}>Öne Çıkan</Text>
          </View>
        )}

        <TouchableOpacity style={styles.favoriteButton}>
          <Ionicons name="ios-heart" size={24} color="#FFC700" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default FavoriteProductItem;
