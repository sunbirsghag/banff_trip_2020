import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Banff",
    description: "Best Mountain Range in the World",
    imageUrl:
      "https://www.google.com/search?q=banff+mountains&tbm=isch&source=iu&ictx=1&fir=Z52MBHHt_S1mWM%252CXdUhMmnpQN9U0M%252C_&vet=1&usg=AI4_-kTJaqBE19lc8gvlH9W3CnbuIZqybw&sa=X&ved=2ahUKEwia-uet6_DqAhUzKX0KHWLuD00Q9QEwAXoECAQQLg#imgrc=Z52MBHHt_S1mWM",
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
      "https://www.google.com/search?q=jasper+mountains&tbm=isch&source=iu&ictx=1&fir=QEdMQpAmmyIGAM%252Co3s-DOKZklHsvM%252C_&vet=1&usg=AI4_-kRgaP5IZJNVTt3pShrmCTR43XUEXg&sa=X&ved=2ahUKEwjJgra77PDqAhX4IDQIHVKcDxwQ9QEwCXoECAoQOQ#imgrc=QEdMQpAmmyIGAM",
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
