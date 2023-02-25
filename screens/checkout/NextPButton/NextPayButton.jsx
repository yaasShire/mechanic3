import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style.js'
const NextPayButton = ({ title }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default NextPayButton