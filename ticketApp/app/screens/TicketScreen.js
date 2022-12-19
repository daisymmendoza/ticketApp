import React from 'react';
import { SafeAreaView, StyleSheet, Image, TouchableWithoutFeedback, View } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.screen}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("Concerts")}>
                <View style={styles.container}>
                    <Image
                        style={styles.image}
                        source={require("../assets/BrowseConcerts.png")}
                    />
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white'
    },
    container: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 200,
        alignSelf: 'center',
        borderRadius: 10
    }
})

export default HomeScreen;