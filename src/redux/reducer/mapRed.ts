import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { LocType , LayerPriorityType, LocData} from "@/types/Map";
import { firstPrioData, secondPrioData, thirdPrioData } from "@/data/layerData";

const initialState: LayerPriorityType ={
    firstPrio: firstPrioData,
    secPrio: secondPrioData,
    thirdPrio: thirdPrioData
}

const mapSlice = createSlice({
    name: "map",
    initialState,
    reducers:{
        addLocation(state, action: PayloadAction<LocData>){
            const data:GeoJSON.Feature = {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [action.payload.lng, action.payload.lat]
                },
                properties:{
                    type: action.payload.type,
                    typeName: action.payload.typeName,
                    name: action.payload.name
                }
            }

            switch (action.payload.type) {
                case "hospital":
                    return{
                        ...state,
                        firstPrio: {
                            ...state.firstPrio,
                            features: [...state.firstPrio.features, data]
                        }
                    }
                case "school":
                case "busSt":
                case "trainSt":
                    return {
                        ...state,
                        secPrio:{
                            ...state.secPrio,
                            features: [...state.secPrio.features, data]
                        }
                    }
                case "park":
                case "mall":
                    return {
                        ...state,
                        thirdPrio:{
                            ...state.thirdPrio,
                            features: [...state.thirdPrio.features, data]
                        }
                    }
                default:
                    return state
            }
        },
        updateLocationInformation(state, action: PayloadAction<LocData>){
            switch (action.payload.type) {
                case "hospital":
                    const firstPrioId = state.firstPrio.features.findIndex((item)=>{
                        return item.geometry.type === "Point" && 
                            item.geometry.coordinates[0] === action.payload.lng && 
                            item.geometry.coordinates[1] === action.payload.lat
                    })
                    if(firstPrioId !== undefined && firstPrioId !== -1){
                        if(state.firstPrio.features[firstPrioId].properties){
                            state.firstPrio.features[firstPrioId].properties.name = action.payload.name
                        }
                    } 
                    break;
                case "school":
                case "busSt":
                case "trainSt":
                    const secPrioId = state.secPrio.features.findIndex((item)=>{
                        return item.geometry.type === "Point" && 
                            item.geometry.coordinates[0] === action.payload.lng && 
                            item.geometry.coordinates[1] === action.payload.lat
                    })
                    if(secPrioId !== undefined && secPrioId !== -1){
                        if(state.secPrio.features[secPrioId].properties){
                            state.secPrio.features[secPrioId].properties.name = action.payload.name
                        }
                    } 
                    break;
                case "park":
                case "mall":
                     const thirdPrioId = state.thirdPrio.features.findIndex((item)=>{
                        return item.geometry.type === "Point" && 
                            item.geometry.coordinates[0] === action.payload.lng && 
                            item.geometry.coordinates[1] === action.payload.lat
                    })
                    if(thirdPrioId !== undefined && thirdPrioId !== -1){
                        if(state.thirdPrio.features[thirdPrioId].properties){
                            state.thirdPrio.features[thirdPrioId].properties.name = action.payload.name
                        }
                    } 
                    break;
                default:
                    break;
            }
        },
        deleteLocation(state, action:PayloadAction<LocData>){
            switch (action.payload.type) {
                case "hospital":
                    const firstPrioId = state.firstPrio.features.findIndex((item)=>{
                        return item.geometry.type === "Point" && 
                            item.geometry.coordinates[0] === action.payload.lng && 
                            item.geometry.coordinates[1] === action.payload.lat
                    })

                    if(firstPrioId != undefined){
                        state.firstPrio.features.splice(firstPrioId, 1);
                    }
                    break;
                case "school":
                case "busSt":
                case "trainSt":
                    const secPrioId = state.secPrio.features.findIndex((item)=>{
                        return item.geometry.type === "Point" && 
                            item.geometry.coordinates[0] === action.payload.lng && 
                            item.geometry.coordinates[1] === action.payload.lat
                    })
                    if(secPrioId != undefined){
                        state.firstPrio.features.splice(secPrioId, 1);
                    }
                    break;
                case "park":
                case "mall":
                    const thirdPrioId = state.thirdPrio.features.findIndex((item)=>{
                        return item.geometry.type === "Point" && 
                            item.geometry.coordinates[0] === action.payload.lng && 
                            item.geometry.coordinates[1] === action.payload.lat
                    })
                    if(thirdPrioId != undefined){
                        state.firstPrio.features.splice(thirdPrioId, 1);
                    }
                    break;
                default:
                    break;
            }
        }
    }
})

export const {addLocation, deleteLocation,updateLocationInformation} = mapSlice.actions
export default mapSlice.reducer