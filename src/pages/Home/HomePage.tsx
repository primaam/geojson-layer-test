import React, { useState, useRef, HTMLInputTypeAttribute } from "react";
import styles from "./HomePage.module.css";
import { MapContainer, TileLayer, GeoJSON, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { LocationInformationCard, ModalForm } from "@/components/custom";
import { LayerController, DoubleClickController } from "@/feature";
import { firstPrioData, secondPrioData, thirdPrioData } from "@/data/layerData";
import { LocTypeData } from "@/data/locTypeData";
import {
    busIcon,
    hospitalIcon,
    parkIcon,
    schoolIcon,
    storeIcon,
    trainIcon,
} from "@/components/custom/Icon/Icon";

interface LayerPriority {
    first: boolean;
    second: boolean;
    third: boolean;
}

interface LocData {
    type: string;
    name: string;
    typeName: string;
    lat: number | null;
    lng: number | null;
}

const initialState: LayerPriority = {
    first: false,
    second: false,
    third: false,
};

const initialLocData: LocData = {
    type: "",
    name: "",
    typeName: "",
    lat: null,
    lng: null,
};

const HomePage: React.FC = () => {
    const [showLayerPriority, setShowLayerPriority] = useState(initialState);
    const [showLocData, setShowLocData] = useState<boolean>(false);
    const [showModalForm, setShowModalForm] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [locData, setLocData] = useState<LocData>(initialLocData);

    const handleOpenModal = (e: "edit" | "add") => {
        switch (e) {
            case "add":
                setShowModalForm(true);
                setShowLocData(false);
                break;
            case "edit":
                setIsEdit(true);
                setShowModalForm(true);
                break;
            default:
                break;
        }
    };

    const handleCloseModal = () => {
        setShowModalForm(false);
        setIsEdit(false);
        setShowLocData(false);
        setLocData(initialLocData);
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;

        setLocData({
            ...locData,
            name: value,
        });
    };

    const handleOnSelect = (e: string) => {
        const filtered = LocTypeData.find((item) => {
            return item.value === e;
        });

        if (filtered) {
            setLocData({
                ...locData,
                type: e,
                typeName: filtered.locTypeName,
            });
        }
    };

    const onEachFeature = (feature: any, layer: any) => {
        const { type, name, typeName } = feature.properties;
        const { coordinates } = feature.geometry;

        layer.on("click", () => {
            setShowLocData(true);
            setLocData({
                name,
                type,
                typeName,
                lat: coordinates[1],
                lng: coordinates[0],
            });
        });
    };

    const pointToLayer = (feature: any, latlng: any) => {
        let icon;
        switch (feature.properties.type) {
            case "hospital":
                icon = hospitalIcon;
                break;
            case "mall":
                icon = storeIcon;
                break;
            case "school":
                icon = schoolIcon;
                break;
            case "trainSt":
                icon = trainIcon;
                break;
            case "busSt":
                icon = busIcon;
                break;
            case "park":
                icon = parkIcon;
                break;
            default:
                icon = storeIcon;
                break;
        }

        return L.marker(latlng, { icon });
    };

    return (
        <div className={styles.container}>
            <div className={styles.mainContainer}>
                <h1>Hello</h1>

                <MapContainer
                    className={styles.map}
                    center={[-6.170607742004966, 106.84422165155412]}
                    zoom={15}
                    scrollWheelZoom={false}
                    doubleClickZoom={false}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {showLayerPriority.first && (
                        <GeoJSON
                            onEachFeature={onEachFeature}
                            data={firstPrioData}
                            pointToLayer={pointToLayer}
                        />
                    )}
                    {showLayerPriority.second && (
                        <GeoJSON
                            onEachFeature={onEachFeature}
                            data={secondPrioData}
                            pointToLayer={pointToLayer}
                        />
                    )}
                    {showLayerPriority.third && (
                        <GeoJSON
                            onEachFeature={onEachFeature}
                            data={thirdPrioData}
                            pointToLayer={pointToLayer}
                        />
                    )}

                    {showLocData && (
                        <LocationInformationCard
                            onClose={() => setShowLocData(false)}
                            name={locData.name}
                            type={locData.typeName}
                            onEditClick={() => handleOpenModal("edit")}
                        />
                    )}
                    <LayerController setShowPriority={setShowLayerPriority} />
                    <DoubleClickController
                        setFormData={setLocData}
                        setShowModalForm={() => handleOpenModal("add")}
                    />
                </MapContainer>
                <ModalForm
                    onChange={handleOnChange}
                    locData={locData}
                    isEdit={isEdit}
                    onSelect={handleOnSelect}
                    onClose={handleCloseModal}
                    isShown={showModalForm}
                />
            </div>
        </div>
    );
};

export default HomePage;
