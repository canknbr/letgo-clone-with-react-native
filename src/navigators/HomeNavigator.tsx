import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CategoryFilterScreen from '../screens/CategoryFilterScreen';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const Stack = createStackNavigator();

const MainHeaderComponent = () => {
  return (
    <SafeAreaView
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 20,
      }}
    >
      <TouchableOpacity>
        <Image
          style={{ width: 40, height: 40, borderRadius: 20 }}
          source={{
            uri: 'https://avatars.githubusercontent.com/u/39174475?v=4',
          }}
        />
      </TouchableOpacity>
      <TextInput
        style={{
          backgroundColor: '#f9f9f9',
          flex: 1,
          height: 40,
          borderRadius: 20,
          paddingHorizontal: 20,
          marginHorizontal: 10,
        }}
        placeholder="Search"
      />
      <Text
        style={{
          color: '#f0c700',
          fontSize: 16,
        }}
      >
        Filtrele
      </Text>
    </SafeAreaView>
  );
};
const CategoryHeaderComponent = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 20,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <FontAwesome5
          name="arrow-left"
          size={24}
          color="#f0c700"
        />
      </TouchableOpacity>
      <TextInput
        style={{
          backgroundColor: '#f9f9f9',
          flex: 1,
          height: 40,
          borderRadius: 20,
          paddingHorizontal: 20,
          marginHorizontal: 10,
        }}
        placeholder="Search"
      />
      <Text
        style={{
          color: '#f0c700',
          fontSize: 16,
        }}
      >
        Filtrele (1)
      </Text>
    </SafeAreaView>
  );
};
const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: () => <MainHeaderComponent />,
        }}
      />
      <Stack.Screen
        name="CategoryFiltering"
        component={CategoryFilterScreen}
        options={{
          headerLeft: () => null,
          header: () => <CategoryHeaderComponent />,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
