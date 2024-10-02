import { GeoJSON } from "react-leaflet";

const firstPrioData: GeoJSON.FeatureCollection ={
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            properties: { 
                name: "Puskesmas Bungur", 
                type: "hospital",
                typeName: "Hospital" 
            },
            geometry: {
                type: "Point",
                coordinates: [106.84424038197616,-6.169180866095192],
            },
        },
        {
            type: "Feature",
            properties: { 
                name: "Puskesmas Senen", 
                type: "hospital",
                typeName: "Hospital"  
            },
            geometry: {
                type: "Point",
                coordinates: [106.85291074034879,-6.189397500491618 ],
            },
        },
    ],
}

const secondPrioData: GeoJSON.FeatureCollection={
    type: 'FeatureCollection',
    features: [
        {
            type: "Feature",
            properties: { 
                name: "Sekolah SMA Negeri 30 Jakarta", 
                type: "school",
                typeName: "School" 
            },
            geometry: {
                type: "Point",
                coordinates: [106.8432, -6.1758],
            },
        },
        {
            type: "Feature",
            properties: { 
                name: "Sekolah SMA Negeri 1 Jakarta", 
                type: "school",
                typeName: "School"  
            },
            geometry: {
                type: "Point",
                coordinates: [ 106.83758963664191, -6.166374824870748   ],
            },
        },
        {
            type: "Feature",
            properties: { 
                name: "Stasiun Kereta Api Senen", 
                type: "trainSt",
                typeName: "Train Station" 
            },
            geometry: {
                type: "Point",
                coordinates: [106.8474, -6.1703],
            },
        },
        {
            type: "Feature",
            properties: { 
                name: "Terminal Senen", 
                type: "busSt",
                typeName: "Bus Station" 
            },
            geometry: {
                type: "Point",
                coordinates: [106.8468, -6.1689],
            },
        },
    ],
}

const thirdPrioData: GeoJSON.FeatureCollection ={
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            properties: { 
                name: "Taman Ismail Marzuki",
                type: "park",
                typeName: "Park" 
            },
            geometry: {
                type: "Point",
                coordinates: [106.8407, -6.1924],
            },
        },
        {
            type: "Feature",
            properties: { 
                name: "Lapangan Banteng", 
                type: "park" ,
                typeName: "Park"
            },
            geometry: {
                type: "Point",
                coordinates: [ 106.83510455569359,-6.170379660831297,],
            },
        },
        {
            type: "Feature",
            properties: { 
                name: "Mall Atrium Senen", 
                type: "mall",
                typeName: "Mall" 
            },
            geometry: {
                type: "Point",
                coordinates: [106.8459, -6.1706],
            },
        },
        {
            type: "Feature",
            properties: { 
                name: "Pasar Senen", 
                type: "mall",
                typeName: "Mall" 
            },
            geometry: {
                type: "Point",
                coordinates: [ 106.84252591773719, -6.1773917573539086],
            },
        },
    ],
}

export {
    firstPrioData,
    secondPrioData,
    thirdPrioData
}