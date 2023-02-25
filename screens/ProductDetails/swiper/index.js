
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import Gasoline1 from '../../../assets/Products/Gasoline1.png'
import Gasoline2 from '../../../assets/Products/Gasoline2.png'
import Gasoline3 from '../../../assets/Products/Gasoline3.png'
const SwiperC = () => {
  const { width, height } = new Dimensions.get('screen')
  return (
    <View style={styles.container}>
      <Swiper
        showsButtons={true}
        style={styles.wrapper}
        height={300}

        onMomentumScrollEnd={(e, state, context) =>
          console.log('index:', state.index)

        }
        dot={
          <View
            style={{
              backgroundColor: '#FFFFFF',
              width: 12,
              height: 12,
              borderRadius: 10,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#000000'
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: '#000',
              width: 12,
              height: 12,
              borderRadius: 10,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3
            }}
          />
        }

        paginationStyle={{
          bottom: 5,
          left: '45%',
          right: '45%',
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: 'green',
          flex: 1
        }}
        loop
      >

        <ProductImage image={Gasoline1} />
        <ProductImage image={Gasoline2} />
        <ProductImage image={Gasoline3} />


      </Swiper>
    </View>
  )
}

const ProductImage = ({ image }) => {
  return <View
    style={styles.slide}

  >
    <Image
      style={styles.image}
      source={image}
    />
  </View>
}

export default SwiperC

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 338,

    // backgroundColor: 'blue'
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    alignItems: 'center',
    paddingVertical: 10

  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  image: {
    // width,
    resizeMode: 'contain',
    width: "100%",
    height: "100%"
  }
})