import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import Tab from './Tab/Tab'
import Styles from './style'
import { useState } from 'react'
import Style from './Tab/Style'
const Tabs = () => {
    const [showColor, setshowColor] = useState(true)
    const [data, setData] = useState([
        {
            id: 0,
            name: 'All',
            selected: false
        },
        {
            id: 1,
            name: 'Oil & Fluids',
            selected: false,
        },
        {
            id: 2,
            name: 'Lighting',
            selected: false
        },
        {
            id: 3,
            name: 'Brake System',
            selected: false
        }

    ])

    function showBlackColor(id) {
        console.log(id)
        setData(data.map(tabData => tabData.selected == true ? tabData.selected = false : tabData))
        setData(data.map(tabData => tabData.id == id ? { ...tabData, selected: !tabData.selected } : tabData))
    }
    return (
        <View style={Styles.tabsHolder}>
            <FlatList
                style={Styles.tabsFlatList}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={data}

                renderItem={(data) => (
                    <Tab data={data.item} showBlackColor={showBlackColor} />
                )}
            />
        </View>
    )
}

export default Tabs