import React from 'react';
import { ScrollView } from 'react-native';
import Boat from './img/Boat';

const AllBoats = () => {
    return (
        <ScrollView>
            <Boat
                name="Sea Ray 500 Sundancer"
                description="Contoured lines and dramatic styling reveal a refined and powerful presence."
                iconName="ship"
                picture={require('./img/sea_ray.jpg')}
            />
            <Boat
                name="Four Winns Horizon 180"
                description="A sporty look and refined details truly set the Horizon 180 above all others."
                iconName="anchor"
                picture={require('./img/four_winns.jpg')}
            />
            <Boat
                name="Flipper 640 ST"
                description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
                iconName="water"
                picture={require('./img/flipper.jpg')}
            />
            <Boat
                name="Princess V48"
                description="There is the option for an open design with a full-length cockpit and sunroof."
                iconName="yacht"
                picture={require('./img/princess.jpg')}
            />
            <Boat
                name="Bayliner 175 Bowrider"
                description="Its outboard power gives you increased cockpit space and fuel-efficient performance."
                iconName="sailboat"
                picture={require('./img/bayliner.jpg')}
            />
            <Boat
                name="Fairline Targa 47"
                description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
                iconName="submarine"
                picture={require('./img/fairline.jpg')}
            />
        </ScrollView>
    );
};

export default AllBoats;
