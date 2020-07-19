import React, {useEffect, useState} from 'react';
import styles from './Offers.module.css';
import firstOfferImage from '../../../assets/images/firstOffer.png';
import secondtOfferImage from '../../../assets/images/secondOffer.png';
import OfferItem, {IOffer} from './OfferItem';

export default function () {

    const [offers] = useState<IOffer[]>([{
        title: 'UX/UI Design',
        description: '8 years experience with big projects',
        image: firstOfferImage
    },
        {
            title: 'Usability Testing',
            description: 'Help you find the weakest parts in your UX at early stage',
            image: secondtOfferImage
        },
    ]);

    useEffect(() => {}, []);

    return (
        <div className={styles.wrapper}>
            { offers.map((item, index) => {
                return <OfferItem item={item} key={index}/>
            }) }
        </div>
    );
}
