import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface PopupMarkerProps {
    title: string;
    desc: string;
    onClose: void;
}

const PopupMarkerCard: React.FC<PopupMarkerProps> = ({ desc, title, onClose }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{desc}</CardDescription>
            </CardHeader>
        </Card>
    );
};

export default PopupMarkerCard;
