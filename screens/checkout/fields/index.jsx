import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './style.js'
const Fields = ({ field1, field2, field3, field4, field1PH, field2PH, field3PH, field4PH }) => {
    return (
        <View style={styles.inputHolder}>
            <View>
                <Text style={styles.label}>{field1}</Text>
                <TextInput style={styles.input} placeholder={field1PH} />
            </View>
            <View>
                <Text style={styles.label}>{field2}</Text>
                <TextInput style={styles.input} placeholder={field2PH} />
            </View>
            <View>
                <Text style={styles.label}>{field3}</Text>
                <TextInput style={styles.input} placeholder={field3PH} />
            </View>
            {
                field4 && (
                    <View>
                        <Text style={styles.label}>{field4}</Text>
                        <TextInput style={styles.input} placeholder={field4PH} />
                    </View>

                )
            }
        </View>
    )
}

export default Fields