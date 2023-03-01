import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style.js'
const NextPayButton = ({ title, handleSubmit }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default NextPayButton