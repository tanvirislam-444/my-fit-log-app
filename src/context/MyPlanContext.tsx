'use client';
import { createContext, ReactNode, useState } from "react";

export const MyPlanContext = createContext({});

const MyPlanProvider = ({children}:{children:ReactNode}) => {
    const [myPlan,setMyPlan]=useState([]);
    const [savePlan,setSavePlan]=useState([]);
    const sharedData ={
        myPlan,
        setMyPlan,
        savePlan,
        setSavePlan
    }
    return <MyPlanContext.Provider value={sharedData}>{children}</MyPlanContext.Provider>
};

export default MyPlanProvider;