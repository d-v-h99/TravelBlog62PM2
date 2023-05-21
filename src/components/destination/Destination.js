import React from 'react';
import Mountain1 from '../../assets/1.jpg';
import Mountain2 from '../../assets/2.jpg';
import Mountain3 from '../../assets/3.jpg';
import Mountain4 from '../../assets/4.jpg';
import './DestinationStyle.css';
import DestinationData from './DestinationData';
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tour give you the opportunity the city</p>
      <DestinationData
        ClassName='first-des'
        heading="Taco vacaho hihi"
        text="One of the most iconic views in Luzon, Mt. Taal boasts a volcano
        inside a lake inside an island. If you fancy a closer look, the hike
        up to the crater is a mere 45 minutes, and is easy enough for
        beginners. Guides will assist you most of the way, and you'll see the
        peculiar environment found on an active volcano, including volcanic
        rocks and steam vents. The hike can be dusty and hot, so plan for an
        early morning trip, and then unwind with some bulalo before heading
        back home!"
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
      ClassName='first-des-reverse'
        heading="Son La Viet Nam Mien Nui Tay Bac"
        text="One of the most iconic views in Luzon, Mt. Taal boasts a volcano
        inside a lake inside an island. If you fancy a closer look, the hike
        up to the crater is a mere 45 minutes, and is easy enough for
        beginners. Guides will assist you most of the way, and you'll see the
        peculiar environment found on an active volcano, including volcanic
        rocks and steam vents. The hike can be dusty and hot, so plan for an
        early morning trip, and then unwind with some bulalo before heading
        back home!"
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
