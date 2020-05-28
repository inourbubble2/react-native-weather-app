import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import propTypes from 'prop-types';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ["#659999", "#f4791f"],
        title: "Haze",
        subtitle: "What's going on?",
    },
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ["#0f0c29", "#302b63", "#24243e"],
        title: "Thunderstorm!",
        subtitle: "U really wanna go outside?",
    }, 
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#108dc7", "#ef8e38"],
        title: "Drizzle today",
        subtitle: "Not good",
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#4286f4", "#373B44"],
        title: "Raning like a MF",
        subtitle: "For more info look outside",
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#C4E0E5", "#4CA1AF"],
        title: "See the window, It's snowy",
        subtitle: "Wanna play outside?",
    }, 
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#aa4b6b", "#6b6b83", "#3b8d99"],
        title: "Atmosphere",
        subtitle: "Don't go outside",
    }, 
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FDC830", "#F37335"],
        title: "Sunny as fuck",
        subtitle: "Wanna go outside?",
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#4ECDC4", "#556270"],
        title: "Cloudy",
        subtitle: "Wanna read a book?",
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#00d2ff", "#928DAB"],
        title: "Mist",
        subtitle: "Don't go outside",
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#FD746C", "#2C3E50"],
        title: "Dust",
        subtitle: "Don't go outside",
    },
    

};

export default function Weather({temp, condition}) {
    return (
    <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={'transparent'} translucent={true} />
        <View style={styles.halfContainer}>
            <MaterialCommunityIcons 
            size={96} 
            name={weatherOptions[condition].iconName} 
            color="white"/>
            <Text style={styles.temp}>{temp}º</Text>
        </View>
        <View style={{...styles.halfContainer, ...styles.textContainer}}>
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
            <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
        </View>
    </LinearGradient>
    
    );
};

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds",
        "Mist",
        "Haze",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    temp: {
        fontSize: 42,
        color: "white",
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 44,
        fontWeight: '300',
        marginBottom: 10,
    },
    subtitle: {
        color: 'white',
        fontWeight: '600',
        fontSize: 24,
    },
    textContainer: {
        paddingHorizontal: 30,
        alignItems: 'flex-start',
    },
});

