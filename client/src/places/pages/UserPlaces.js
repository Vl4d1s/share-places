import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in he world!",
    imageUrl:
      "https://cdn.vox-cdn.com/thumbor/MSo_R1RZWCgSwg-KVHZvW1guipw=/0x0:2000x1333/920x613/filters:focal(840x507:1160x827):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65018226/151006_19_00_22_5DSR9489.0.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: "40.7484405",
      lng: "-73.9878531",
    },
    creator: "u1",
  },
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in he world!",
    imageUrl:
      "https://cdn.vox-cdn.com/thumbor/MSo_R1RZWCgSwg-KVHZvW1guipw=/0x0:2000x1333/920x613/filters:focal(840x507:1160x827):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65018226/151006_19_00_22_5DSR9489.0.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: "40.7484405",
      lng: "-73.9878531",
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
