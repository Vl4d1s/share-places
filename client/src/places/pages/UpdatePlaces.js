import React from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import "./PlaceForm.css";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in he world!",
    imageUrl:
      "https://cdn.vox-cdn.com/thumbor/MSo_R1RZWCgSwg-KVHZvW1guipw=/0x0:2000x1333/920x613/filters:focal(840x507:1160x827):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65018226/151006_19_00_22_5DSR9489.0.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
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
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: "u2",
  },
];

const UpdatePlaces = () => {
  const placeId = useParams().placeId;

  const identifiedPlace = DUMMY_PLACES.find((place) => place.id === placeId);

  if (!identifiedPlace) {
    return (
      <div>
        <h2 className="center">Could not find place!</h2>
      </div>
    );
  }

  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 charactors)."
        onInput={() => {}}
        value={identifiedPlace.description}
        valid={true}
      />
      <Button type="submit" disabled={true}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlaces;
