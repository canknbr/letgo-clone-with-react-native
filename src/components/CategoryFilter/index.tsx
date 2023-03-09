import { View, Text ,ScrollView,TouchableOpacity,Image} from 'react-native'
import React,{useState,useEffect} from 'react'
import styles from './styles'
import categoriesLetgo from '../../../assets/categories'
import { Categories } from '../../models'
const CategoryFilter = () => {
  const [categories,setCategories] = useState<Categories[]>([])
  useEffect(() => {
    setCategories(categoriesLetgo)
  }, [])
  return (
    <ScrollView 
    style={styles.scrollStyle}
    bounces={true}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    >
      {categories.map((category,index) => (
        <TouchableOpacity key={index} style={styles.categoryButton}>
          <Image source={category.src} style={styles.categoryImage} />
          <Text style={styles.categoryText}>{category.name}</Text>
        </TouchableOpacity>
      )
      )}
    </ScrollView>
  )
}

export default CategoryFilter