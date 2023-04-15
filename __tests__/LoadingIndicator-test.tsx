import React from "react";
import { render } from '@testing-library/react-native'
import {View, ActivityIndicator} from 'react-native'
import LoadingIndicatator from "../component/Screens/LoadingIndicator";

it('if accessbility label matches it should return true',() => {
    const { getByAccessibilityHint} = render(
        <View>
            <ActivityIndicator accessibilityHint = 'loading'/>
        </View>
    )
    getByAccessibilityHint("loading")
})