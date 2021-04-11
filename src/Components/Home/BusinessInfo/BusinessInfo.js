import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';


const infoData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background:'primary'
    },
    {
        title: 'Our Location',
        description: 'brooklyn, b4/0988',
        icon: faMapMarkerAlt,
        background:'dark'
    },
    {
        title: 'Call Now',
        description: '+102520110',
        icon: faPhoneAlt,
        background:'primary'
    }
]

const BusinessInfo = () => {
    return (
        <section className="container">
            <div className="row">
                {
                    infoData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;