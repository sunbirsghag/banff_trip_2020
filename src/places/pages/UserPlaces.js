import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Banff",
    description: "Best Mountain Range in the World",
    imageUrl:
      "https://www.planetware.com/photos-large/CDN/canada-banff-town-street.jpg",
    address: "Improvement District No. 9, AB",
    location: {
      lat: 51.1878337,
      lng: -115.6010664,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Jasper",
    description: "Second Best Mountain Range in the World",
    imageUrl:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/0c/28/31.jpg",
    address: "Improvement District No. 12, AB T0E 1E0",
    location: {
      lat: 52.8798165,
      lng: -118.167311,
    },
    creator: "u1",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
