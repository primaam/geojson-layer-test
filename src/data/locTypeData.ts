
interface LocType{
    locTypeName: 
        "Hospital" | "School" | "Bus Station" | "Train Station" | "Park" | "Mall";
    value: 
        "hospital" | "school" | "busSt" | "trainSt" | "park" | "mall"
}

const LocTypeData: LocType[] =[
    {
        locTypeName: "Hospital",
        value: "hospital"
    },
    {
        locTypeName: "Bus Station",
        value: "busSt"
    },
    {
        locTypeName: "Mall",
        value: "mall"
    },
    {
        locTypeName: "Park",
        value: "park"
    },
    {
        locTypeName: "Train Station",
        value: "trainSt"
    },
    {
        locTypeName: "School",
        value: "school"
    }
]

export {LocTypeData}