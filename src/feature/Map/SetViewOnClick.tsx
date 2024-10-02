import React from "react";
import { useMapEvent } from "react-leaflet";

interface SetViewProps {
    animateRef: React.RefObject<boolean>;
}

const SetViewOnClick: React.FC<SetViewProps> = ({ animateRef }) => {
    const map = useMapEvent("click", (e) => {
        map.setView(e.latlng, map.getZoom(), {
            animate: animateRef.current || false,
        });
    });

    return null;
};

export default SetViewOnClick;
