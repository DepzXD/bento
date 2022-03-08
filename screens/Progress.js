import React from 'react';
import { Text, View } from 'react-native';

const Progress = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#27323A',
        color: '#fff',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ color: '#fff', fontSize: 20 }}>Progress Page</Text>
    </View>
  );
};

export default Progress;
