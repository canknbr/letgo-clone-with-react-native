import { View, Text } from 'react-native';
import React from 'react';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
const MessageNotification = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#757575',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <MaterialCommunityIcons
          name="message-text-outline"
          size={20}
          color="#F0C700"
        />
        <Text
          style={{
            fontSize: 14,
            color: '#F0C700',
            marginLeft: 10,
          }}
        >
          Mesaj Bildirimlerini Aç
        </Text>
      </View>
      <AntDesign name="right" size={20} color="#F0C700" />
    </View>
  );
};

export default MessageNotification;
