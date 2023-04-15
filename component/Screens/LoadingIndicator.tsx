import { ActivityIndicator, Text, View } from 'react-native'
import React from 'react'
import stylesmain from '../Stylesheets/stylesmain'

const LoadingIndicatator = () => {
    return (

        <View style={stylesmain.loadingindicator}>
            <ActivityIndicator size='large' color="#000000" />
        </View>
    )
}

export default LoadingIndicatator;