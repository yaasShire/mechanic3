import { View, Text, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback } from 'react-native'
import React, { useMemo, useState } from 'react'
import styles from './style'
import EVCLOGO from '../../../../../assets/Products/evc_logo.png'
import { Ionicons } from '@expo/vector-icons'

const PayWith = ({ logo, title, placeHolder, title2, selectedIndex, index, onPress = () => { } }) => {
  const isShown = useMemo(() => selectedIndex == index, [selectedIndex]);

  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.evcBlockHolder} onPress={() => onPress(index)}>
      <View style={styles.logoEVCTEXTMainHOLDER}>
        <View style={styles.logoTextHolder}>
          <Image source={logo} style={{ resizeMode: 'cover', marginRight: 5, width: 100 }} />
          <Text style={styles.evcText}>{title}</Text>
          <Text style={styles.evcSmallText}>{title2}</Text>
        </View>
        <View>
          <Ionicons style={styles.checkMarkIcon} name='checkmark-circle' size={30} color={!isShown ? '#d4d6d9' : 'black'} />
          {/* <Ionicons name='che' /> */}
        </View>
      </View>
      {
        isShown && (
          <>
            <View style={styles.divider} />
            <View>
              <Text style={styles.phoneNumberText}>Phone Number</Text>
              <TextInput style={styles.inputStyle} placeholder={placeHolder} />
            </View>
          </>

        )
      }
    </TouchableOpacity>
  )
}

export default PayWith