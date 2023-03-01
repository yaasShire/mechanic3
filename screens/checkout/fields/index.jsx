import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './style.js'
import * as yup from 'yup'
const Fields = ({ field1, field2, field3, field4, field1PH, field2PH, field3PH, field4PH, values, handleBlur, handleChange, errors }) => {
    return (
        <View style={styles.inputHolder}>
            <View>
                <Text style={styles.label}>{field1}</Text>
                <TextInput style={styles.input} placeholder={field1PH}
                    onChangeText={handleChange(field1)}
                    onBlur={handleBlur(field1)}
                    value={values[field1]}
                    secureTextEntry
                />
                {
                    errors[field1] && (
                        <Text style={styles.error}>{errors[field1]}</Text>
                    )
                }
            </View>
            <View>
                <Text style={styles.label}>{field2}</Text>
                <TextInput style={styles.input} placeholder={field2PH}
                    onChangeText={handleChange(field2)}
                    onBlur={handleBlur(field2)}
                    value={values[field2]}
                    secureTextEntry

                />
                {
                    errors[field2] && (
                        <Text style={styles.error}>{errors[field2]}</Text>
                    )
                }

            </View>
            <View>
                <Text style={styles.label}>{field3}</Text>
                <TextInput style={styles.input} placeholder={field3PH}
                    onChangeText={handleChange(field3)}
                    onBlur={handleBlur(field3)}
                    value={values[field3]}
                    secureTextEntry

                />
                {errors[field3] && (

                    <Text style={styles.error}>{errors[field3]}</Text>
                )
                }

            </View>
            {
                field4 && (
                    <View>
                        <Text style={styles.label}>{field4}</Text>
                        <TextInput style={styles.input} placeholder={field4PH}
                            onChangeText={handleChange(field4)}
                            onBlur={handleBlur(field4)}
                            value={values[field4]}
                            secureTextEntry
                        />
                        {
                            errors[field4] && (
                                <Text style={styles.error}>{errors[field4]}</Text>
                            )
                        }


                    </View>

                )
            }
        </View>
    )
}

export default Fields