import React from 'react';
import {TouchableOpacity, View, Text, ActivityIndicator} from 'react-native';
import styles from './Button.style';

function Button({text, onPress, loading, theme = 'primary'}) {
  return (
    <TouchableOpacity
      style={styles[theme].container}
      onPress={onPress}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <View style={styles[theme].button_container}>
          <Text style={styles[theme].title}>{text}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

export default Button;
