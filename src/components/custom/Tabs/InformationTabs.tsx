import React from "react";
import styles from "./InformationTabs.module.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const InformationTabs: React.FC = () => {
    return (
        <Tabs defaultValue="add">
            <TabsList className={styles.tabsContainer}>
                <TabsTrigger value="add">Add Location</TabsTrigger>
                <TabsTrigger value="update">Update Location</TabsTrigger>
            </TabsList>
            <TabsContent value="add">
                <div className={styles.tabsContent}>
                    <h2>1. Add Location Instructions</h2>
                    <p>
                        To add a location, simply <strong>double-click</strong> on the map where you
                        want to place the location. A popup or modal will appear. Fill in the
                        location details, then click <strong>Submit</strong> to add it.
                    </p>
                </div>
            </TabsContent>
            <TabsContent value="update">
                <div className={styles.tabsContent}>
                    <h2>2. Update or Delete Location Instructions</h2>
                    <p>
                        To update a location, fill in the form with the updated details and click{" "}
                        <strong>Update</strong>. If you want to delete the location, simply click
                        the <strong>Delete</strong> button.
                    </p>
                </div>
            </TabsContent>
        </Tabs>
    );
};

export default InformationTabs;
