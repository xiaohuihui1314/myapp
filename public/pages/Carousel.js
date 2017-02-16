import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Swiper from 'react-native-swiper';

export default class Carousel  extends Component {
    render() {
        return (
            <Swiper height={300} autoplay={true}>
                <View style={styles.slide1}>
                    <Text style={styles.text}>Hello huihui</Text>
                </View>
                < View style={styles.slide2}>
                    <Text style={styles.text}>Hello React</Text>
                </View >
                <View style={styles.slide3}>
                    <Text style={styles.text}>Hello React-Native</Text>
                </View>
            </Swiper >
        )
    }
}
const styles =  StyleSheet.create({
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
});
