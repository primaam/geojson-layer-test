import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import styles from "./LocationInformationCard.module.css";
import { Button } from "@/components/ui/button";
import { Settings2 } from "lucide-react";

interface LocInformProps {
    onClose: () => void;
    onEditClick: () => void;
    name: string;
    type: string;
}

const LocationInformationCard: React.FC<LocInformProps> = ({
    name,
    onClose,
    type,
    onEditClick,
}) => {
    return (
        <Card style={{ bottom: 20, left: 10 }} className={styles.container}>
            <CardContent className={styles.mainContainer}>
                <Button variant={"ghost"} className={styles.description} onClick={onClose}>
                    <CardDescription>
                        {type} : {name}
                    </CardDescription>
                </Button>
                <Button variant={"outline"} className={styles.button} onClick={onEditClick}>
                    <Settings2 className={styles.iconButton} color={"black"} />
                </Button>
            </CardContent>
        </Card>
    );
};

export default LocationInformationCard;
