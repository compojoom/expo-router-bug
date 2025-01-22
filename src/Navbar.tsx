import {BlurredIdenticonBackground} from './BlurredIdenticonBackground'
import {SafeAreaView} from 'react-native-safe-area-context'
import {StyleSheet, View, Text, Pressable} from 'react-native'
import React from 'react'
import {useNavigation} from "@react-navigation/native";


export const Navbar = () => {
    const navigation = useNavigation()
    return (
        <BlurredIdenticonBackground address={"0x776Be428BAf003F6501A04Ac546e70e47a8d90F1"}>
            <SafeAreaView style={[styles.headerContainer]}>


                <Pressable onPress={() => navigation.navigate('Modal')}>
                    <Text>test</Text>
                </Pressable>


            </SafeAreaView>
        </BlurredIdenticonBackground>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 16,
        paddingBottom: 0,
    },
})
