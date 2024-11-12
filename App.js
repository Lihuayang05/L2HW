import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const AllBoats = () => {
    return (
        <View style={styles.appContainer}>
            <View style={styles.header}>
                <Image source={require('./img/logo.png')} style={styles.headerLogo} />
                <Text style={styles.headerTitle}>Boat Rentals</Text>
                <Icon name="anchor" style={styles.headerIcon} />
            </View>
            <ScrollView contentContainerStyle={styles.container}>
                <BoatCard
                    name="Sea Ray 500 Sundancer"
                    description="Contoured lines and dramatic styling reveal a refined and powerful presence."
                    iconName="ship"
                    picture={require('./img/sea_ray.jpg')}
                />
                <BoatCard
                    name="Four Winns Horizon 180"
                    description="A sporty look and refined details truly set the Horizon 180 above all others."
                    iconName="anchor"
                    picture={require('./img/four_winns.jpg')}
                />
                <BoatCard
                    name="Flipper 640 ST"
                    description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
                    iconName="ferry"
                    picture={require('./img/flipper.jpg')}
                />
                <BoatCard
                    name="Princess V48"
                    description="There is the option for an open design with a full-length cockpit and sunroof."
                    iconName="ferry"
                    picture={require('./img/princess.jpg')}
                />
                <BoatCard
                    name="Bayliner 175 Bowrider"
                    description="Its outboard power gives you increased cockpit space and fuel-efficient performance."
                    iconName="sailboat"
                    picture={require('./img/bayliner.jpg')}
                />
                <BoatCard
                    name="Fairline Targa 47"
                    description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
                    iconName="ship"
                    picture={require('./img/fairline.jpg')}
                />
            </ScrollView>
        </View>
    );
};

const BoatCard = ({ name, description, iconName, picture }) => {
    return (
        <View style={styles.boatContainer}>
            <Image source={picture} style={styles.boatImage} />
            <View style={styles.boatDetails}>
                <View style={styles.boatHeader}>
                    <Icon name={iconName} style={styles.boatIcon} />
                    <Text style={styles.boatName}>{name}</Text>
                </View>
                <Text style={styles.boatDescription}>{description}</Text>
                <View style={styles.rentalButton}>
                    <Text style={styles.rentalButtonText}>Select Rental Hours</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#e6f7ff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#005f99',
        paddingVertical: 20,
        paddingHorizontal: 15,
        paddingTop: 45,
    },
    headerLogo: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    headerTitle: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
        flex: 1,
    },
    headerIcon: {
        fontSize: 24,
        color: '#fff',
    },
    container: {
        flexGrow: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },
    boatContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 15,
        padding: 12,
        width: '95%',
        borderWidth: 1,
        borderColor: '#d1d9e6',
    },
    boatImage: {
        width: '100%',
        height: 180,
        borderRadius: 10,
        marginBottom: 10,
    },
    boatDetails: {
        paddingHorizontal: 5,
    },
    boatHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    boatIcon: {
        fontSize: 20,
        color: '#005f99',
        marginRight: 6,
    },
    boatName: {
        fontSize: 18,
        fontWeight: '700',
        color: '#333',
    },
    boatDescription: {
        fontSize: 14,
        color: '#666',
        lineHeight: 22,
        marginBottom: 10,
    },
    rentalButton: {
        backgroundColor: '#005f99',
        paddingVertical: 8,
        borderRadius: 5,
        alignItems: 'center',
    },
    rentalButtonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
});

export default AllBoats;
