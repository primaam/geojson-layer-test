import React from "react";
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CircleX } from "lucide-react";
import styles from "./ModalForm.module.css";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { LocTypeData } from "@/data/locTypeData";

interface LocData {
    type: string;
    name: string;
    typeName: string;
}
interface ModalFormProps {
    isShown: boolean;
    isEdit: boolean;
    onDelete: () => void;
    onSubmit: () => void;
    onEditSubmit: () => void;
    onSelect: (e: string) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    locData: LocData;
    onClose: () => void;
}

const ModalForm: React.FC<ModalFormProps> = ({
    isShown,
    onClose,
    isEdit,
    locData,
    onChange,
    onSelect,
    onDelete,
    onSubmit,
    onEditSubmit,
}) => {
    if (isShown === false) return null;

    return (
        <div className={styles.container}>
            <Card className={styles.cardContainer}>
                <CardHeader className={styles.cardHeader}>
                    <CardTitle style={{ color: "black" }}>
                        {isEdit ? "Edit Location" : "Add Location"}
                    </CardTitle>

                    <Button className={styles.button} variant={"ghost"} onClick={onClose}>
                        <CircleX style={{ color: "black" }} />
                    </Button>
                </CardHeader>
                <CardContent>
                    <Input
                        onChange={onChange}
                        value={locData.name}
                        className={styles.input}
                        placeholder="Location Name"
                    />
                    {isEdit ? (
                        <></>
                    ) : (
                        <>
                            <Select onValueChange={onSelect} value={locData.type}>
                                <SelectTrigger className={styles.select}>
                                    <SelectValue placeholder="Add Location Type" />
                                </SelectTrigger>
                                <SelectContent className={styles.selectContent}>
                                    <SelectGroup className={`${styles.selectGroup}`}>
                                        {LocTypeData.map((item, i) => {
                                            return (
                                                <SelectItem
                                                    key={i}
                                                    className={styles.selectItem}
                                                    value={item.value}
                                                >
                                                    {item.locTypeName}
                                                </SelectItem>
                                            );
                                        })}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </>
                    )}
                </CardContent>
                <CardFooter className={styles.cardFooter}>
                    {isEdit ? (
                        <>
                            <Button
                                className={`${styles.button} ${styles.delete}`}
                                variant={"secondary"}
                                onClick={onDelete}
                            >
                                Delete
                            </Button>
                            <Button
                                onClick={onEditSubmit}
                                className={`${styles.button} ${styles.submit}`}
                            >
                                Submit
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button
                                className={`${styles.button} ${styles.cancel}`}
                                variant={"secondary"}
                                onClick={onClose}
                            >
                                Cancel
                            </Button>
                            <Button
                                onClick={onSubmit}
                                className={`${styles.button} ${styles.submit}`}
                            >
                                Submit
                            </Button>
                        </>
                    )}
                </CardFooter>
            </Card>
        </div>
    );
};

export default ModalForm;
