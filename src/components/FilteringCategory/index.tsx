import { View, Text ,ScrollView} from 'react-native'
import React,{useState,useEffect} from 'react'
import filteringsLetgo from '../../../assets/filterings'
import { Filterings} from '../../models'
const FilteringCategory = () => {
  const [filterings, setFilterings] = useState<Filterings[]>([])
  useEffect(() => {
    setFilterings(filteringsLetgo)

      return () => {
          setFilterings([])
      }
  }, [])

  return (
    <ScrollView >
      <Text>FilteringCategory</Text>
    </ScrollView>
  )
}

export default FilteringCategory