import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons'
import styles from './style'
import { ScrollView } from 'react-native-gesture-handler'
const Privacy = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.contentContainer}>
                <View style={styles.backIconHolder}>
                    <Ionicons name='arrow-back' size={30} color='#53e677' />
                </View>
                <View>
                    <Text style={styles.privacyText}>PRIVACY POLICY</Text>
                </View>
                <View>
                    <Text style={styles.privacyDesText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, recusandae similique nostrum, velit incidunt
                        voluptate dicta quas qui, id consequatur vero exercitationem tempora saepe aliquam. Maxime harum, debitis porro
                        voluptas nam officiis. Doloremque minus voluptatum veniam unde dicta adipisci dolor facere
                        excepturi molestias, repudiandae tenetur? Cumque praesentium maiores expedita qui. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto odit sunt ipsam soluta non aliquid tempore vero totam facilis animi voluptatem aliquam minus, labore eum consectetur nulla, provident dolore accusantium corrupti adipisci? Nam officiis, commodi voluptatem incidunt fuga, dolore illum illo repellendus reiciendis minus nesciunt
                        quaerat odio itaque pariatur dolorum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum sunt labore repudiandae voluptas maxime sint inventore, impedit, deleniti quas ad sapiente accusamus et. Vel quod laudantium esse labore accusamus rem error asperiores veniam voluptas dolor minima maiores, deserunt, neque quam quas, delectus doloribus? Corrupti deleniti, reiciendis quaerat tenetur quos provident? Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti est odit, eum necessitatibus perferendis tempora consequatur ad provident reiciendis enim reprehenderit. Quasi itaque quam cupiditate natus maxime molestiae quos incidunt officiis numquam. Tempore aut iure enim recusandae exercitationem, voluptates delectus dolorem quaerat doloribus ipsa error nihil iusto, sunt suscipit ratione. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia saepe iure quas earum velit, molestiae ducimus fugiat error itaque harum odit tenetur, in soluta, dolor tempore cumque possimus sit natus blanditiis rem. Possimus velit beatae aliquid quidem veniam vero optio voluptatem deleniti asperiores exercitationem corporis similique laboriosam ipsum debitis vitae sit ratione repellat tenetur explicabo commodi qui, dicta iure libero. Neque cum veniam quam laborum consectetur, architecto optio voluptate ad, corrupti nulla accusantium beatae officia sunt distinctio, unde libero praesentium. Quae odio deserunt molestias voluptatum quis aliquam, sunt nihil blanditiis rerum? Eum rem ut, veniam porro hic facilis dicta reiciendis?</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Privacy