import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import styles from "./HomePage.module.css";
import { MapContainer, TileLayer, GeoJSON, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { PopupMarkerCard } from "@/components/custom";
import { LayerController } from "@/feature";
import { firstPrioData, secondPrioData, thirdPrioData } from "@/data/layerData";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface LayerPriority {
    first: boolean;
    second: boolean;
    third: boolean;
}

interface LocData {
    type: string;
    name: string;
    typeName: string;
}

const initialState: LayerPriority = {
    first: false,
    second: false,
    third: false,
};

const HomePage: React.FC = () => {
    const [showLayerPriority, setShowLayerPriority] = useState(initialState);
    const [showLocData, setShowLocData] = useState<boolean>(false);
    const [locData, setLocData] = useState<LocData>({
        type: "",
        name: "",
        typeName: "",
    });

    const onEachFeature = (feature: any, layer: any) => {
        const { type, name, typeName } = feature.properties;

        layer.on("click", () => {
            setShowLocData(true);
            setLocData({
                name,
                type,
                typeName,
            });
        });
    };
    return (
        <div className={styles.container}>
            <div className={styles.mainContainer}>
                <h1>Hello</h1>

                <MapContainer
                    className={styles.map}
                    center={[-6.182891341340644, 106.84018211388339]}
                    zoom={15}
                    scrollWheelZoom={false}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {showLayerPriority.first && (
                        <GeoJSON onEachFeature={onEachFeature} data={firstPrioData} />
                    )}
                    {showLayerPriority.second && (
                        <GeoJSON onEachFeature={onEachFeature} data={secondPrioData} />
                    )}
                    {showLayerPriority.third && (
                        <GeoJSON onEachFeature={onEachFeature} data={thirdPrioData} />
                    )}

                    <LayerController setShowPriority={setShowLayerPriority} />
                    {showLocData && (
                        <Card
                            onClick={() => setShowLocData(false)}
                            style={{
                                cursor: "pointer",
                                position: "absolute",
                                zIndex: 1000,
                                bottom: 20,
                                left: 10,
                                width: "100%",
                                maxWidth: "300px",
                                height: "80px",
                                // textAlign: "center",
                                borderRadius: 10,
                                backgroundColor: "white",
                                color: "grey",
                                // placeItems: "center",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <CardHeader>
                                <CardTitle>
                                    <a>X</a>
                                </CardTitle>
                                <CardDescription>
                                    {locData.typeName} {locData.name}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    )}
                </MapContainer>
            </div>
        </div>
    );
};

export default HomePage;
