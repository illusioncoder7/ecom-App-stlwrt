import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
    return(
        <Onboarding
        onSkip={() => navigation.navigate("Login")}
        onDone={() => navigation.navigate("Login")}
  pages={[
    {
      backgroundColor: '#fdeb93',
      image: <Image source={require('../../assests/onboarding-img1.png')} />,
      title: 'Search for your goal',
      subtitle: 'Heal the soul with reading your favourite',
    },
    {
      backgroundColor: '#a6e4d0',
      image: <Image source={require('../../assests/onboarding-img2.png')} />,
      title: 'Buy your favourite book',
      subtitle: 'Spread the knowledge',
    },
    {
    backgroundColor: '#e9bcbe',
      image: <Image source={require('../../assests/onboarding-img3.png')} />,
      title: 'Connect to knowledge',
      subtitle: 'This is the new way to connect with the knowledge through books',
    },
  ]}
/>
    );
};

export default OnboardingScreen;
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
