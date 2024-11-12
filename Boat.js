import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Boat = ({ name, description, iconName, picture }) => {
    return (
        <View>
            <Text style={{fontWeight:'Bold', fontSize: 25}}><Icon name={iconName} size={30} />{name}</Text>
            <Text>{description}</Text>
            <Image source={picture} style={{ width: 300, height: 200 }} />
        </View>
    );
};

export default Boat;
