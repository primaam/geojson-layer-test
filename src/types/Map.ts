export interface LocPropertiesTypes {
    name: string;
    type: string;
    typeName: string
}

export interface LocGeometryTypes{
    type: string;
    coordinates: number[]
}

export interface MapTypes {
    type: string;
    properties: LocPropertiesTypes;
    geometry: LocGeometryTypes;
}

export interface MapLayerTypes{
    type: string;
    features: MapTypes[];
}

export interface LocType{
    locTypeName: 
        "Hospital" | "School" | "Bus Station" | "Train Station" | "Park" | "Mall";
    value: 
        "hospital" | "school" | "busSt" | "trainSt" | "park" | "mall"
}

export interface LayerPriorityType{
    firstPrio: GeoJSON.FeatureCollection;
    secPrio: GeoJSON.FeatureCollection;
    thirdPrio: GeoJSON.FeatureCollection;
}

export interface LocData {
    type: string;
    name: string;
    typeName: string;
    lat: number;
    lng: number ;
}
