import React from "react";
import L from "leaflet";
import { bus, hospital, park, school, store, train } from "../../../assets/mapIcon";

const iconProperty: L.BaseIconOptions = {
    iconSize: [35, 35],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
};

const busIcon = new L.Icon({
    iconUrl: bus,
    ...iconProperty,
    className: `map-icon`,
});

const hospitalIcon = new L.Icon({
    iconUrl: hospital,
    ...iconProperty,
    className: `map-icon`,
});

const parkIcon = new L.Icon({
    iconUrl: park,
    ...iconProperty,
    className: `map-icon`,
});

const schoolIcon = new L.Icon({
    iconUrl: school,
    ...iconProperty,
    className: `map-icon`,
});

const storeIcon = new L.Icon({
    iconUrl: store,
    ...iconProperty,
    className: `map-icon`,
});

const trainIcon = new L.Icon({
    iconUrl: train,
    ...iconProperty,
    className: `map-icon`,
});

export { busIcon, parkIcon, storeIcon, hospitalIcon, trainIcon, schoolIcon };
