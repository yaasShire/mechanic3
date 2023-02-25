import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import styles from './styleBottom'
import Gasoline1 from '../../assets/Products/Gasoline1.png'
import { Ionicons } from '@expo/vector-icons'
import { Rating, AirbnbRating } from 'react-native-ratings';

const BottomSheetComponent = ({ setVisible, data }) => {
    return (
        <View style={styles.bottomNavigationView}>
            <View>
                <Text style={styles.LeaveReviewText}>Leave a Review</Text>
            </View>
            <View style={styles.divider} />

            <View style={styles.wholeProductHolder}>
                <View style={styles.productCom}>
                    <View style={styles.imageHolder}>
                        <Image style={styles.image} source={Gasoline1} />
                    </View>
                    <View style={styles.productDescriptionHolder}>
                        <Text style={styles.productName}>{data.name.length > 18 ? data.name.slice(0, 17) + '...' : data.name}</Text>
                        <View >
                            <View style={styles.completedRating}>
                                <View style={styles.completedHolder}>
                                    <Text style={styles.completedText}>Completed</Text>
                                </View>
                                <View style={styles.ratingIconStar}>
                                    <Ionicons name='star-half-sharp' color='#D88B18' size={20} />
                                    <Text style={styles.reviewText}>4.2(32 reviews)</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.price}>$3.5</Text>
                            </View>
                        </View>
                    </View>
                </View>

            </View>
            <View style={styles.divider} />
            <View style={styles.reviewQuestionRequestHolder}>
                <Text style={styles.reviewQuestion}>How is this oil?</Text>
                <Text style={styles.reviewRuquestText}>Please give your rating and review</Text>
                <AirbnbRating
                    count={5}
                    defaultRating={11}
                    size={20}
                    reviewSize={0}
                    ratingContainerStyle={styles.ratingHolder}
                />
            </View>
            <View>
                <Text style={styles.textInputReviewText}>Review</Text>
                <View style={styles.textInputHolderStyle}>
                    <TextInput multiline style={styles.textInputStyle} placeholder='Type Message' />
                </View>
                <View style={styles.btnHolder}>
                    <TouchableOpacity style={styles.closeBtn} onPress={() => setVisible(false)}>
                        <Text style={styles.btnTextWhiteText}>Close</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.submitBtn}>
                        <Text style={styles.btnBlackText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default BottomSheetComponent