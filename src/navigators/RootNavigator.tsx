import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator';
import {
  AntDesign,
  Ionicons,
  MaterialIcons,
  FontAwesome,
} from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        marginTop: -15,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#F0C700',
        borderWidth: 2,
        borderColor: '#fff',
      }}
      onPress={onPress}
    >
      <FontAwesome name="camera" size={20} color="#fff" />
      <Text style={{ color: '#fff' }}>Ekle</Text>
    </TouchableOpacity>
  );
};

const RootNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Ana Sayfa"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#F0C700',
        tabBarInactiveTintColor: '#757575',
        headerShown: false,
        tabBarStyle: {
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name="Ana Sayfa"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Bildirimler"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <Ionicons name="notifications" size={24} color={color} />
              <View
                style={{
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  backgroundColor: '#F0C700',
                  borderRadius: 6,
                  width: 12,
                  height: 12,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    color: 'white',
                    fontSize: 10,
                    fontWeight: 'bold',
                  }}
                >
                  2
                </Text>
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Sat"
        component={HomeNavigator}
        options={{
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          
        }}
      />
      <Tab.Screen
        name="Sohbet"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="message" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="İlanlarım"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="appstore-o" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigator;
