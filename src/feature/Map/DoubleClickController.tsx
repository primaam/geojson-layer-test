import React from "react";
import { useMapEvent } from "react-leaflet";

interface FormDataProps {
    name: string;
    type: string;
    typeName: string;
    lat: number;
    lng: number;
}

const DoubleClickController: React.FC<{
    setShowModalForm: (val: boolean) => void;
    setFormData: (val: FormDataProps) => void;
}> = ({ setShowModalForm, setFormData }) => {
    useMapEvent("dblclick", (e) => {
        setShowModalForm(true);
        setFormData({
            name: "",
            type: "",
            typeName: "",
            lat: e.latlng.lat,
            lng: e.latlng.lng,
        });
        // console.log(e.latlng.lat);
        // console.log(e.latlng.lng);
    });
    return null;
};

export default DoubleClickController;
