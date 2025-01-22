import {Button, Text} from '@react-navigation/elements';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import Animated, {FadeIn, FadeOut, SlideInDown} from 'react-native-reanimated';

export function Modal() {
    const navigation = useNavigation()

    return (
        <Animated.View
            entering={FadeIn}
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#00000040',
            }}
        >
            {/* Dismiss modal when pressing outside */}

            <Animated.View
                entering={SlideInDown}
                style={{
                    width: '90%',
                    height: '80%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                }}
            >
                <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Modal Screen</Text>
                <Button onPress={() => navigation.goBack()}>
                    go back
                </Button>
            </Animated.View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        position: "absolute",
        bottom: 200,
        left: 0, right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        backgroundColor: 'yellow'
    },
});
