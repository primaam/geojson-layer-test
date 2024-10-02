import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface LocInformProps {
    onClose: void;
    name: string;
    type: string;
}

const LocationInformationCard: React.FC = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle></CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>
        </Card>
    );
};

export default LocationInformationCard;
