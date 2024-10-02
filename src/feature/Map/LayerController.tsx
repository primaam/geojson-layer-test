import React, { useState, useEffect } from "react";
import { useMapEvents } from "react-leaflet";

interface LayerPriority {
    first: boolean;
    second: boolean;
    third: boolean;
}

const initialState: LayerPriority = {
    first: false,
    second: false,
    third: false,
};

const LayerController: React.FC<{
    setShowPriority: (val: LayerPriority) => void;
}> = ({ setShowPriority }) => {
    useMapEvents({
        zoomend: (e) => {
            const zoomLevel = e.target.getZoom();
            if (zoomLevel === 16) {
                setShowPriority({
                    first: true,
                    second: false,
                    third: false,
                });
            } else if (zoomLevel === 17) {
                setShowPriority({
                    first: true,
                    second: true,
                    third: false,
                });
            } else if (zoomLevel >= 18) {
                setShowPriority({
                    first: true,
                    second: true,
                    third: true,
                });
            } else {
                setShowPriority(initialState);
            }
        },
    });
    return null;
};

export default LayerController;
