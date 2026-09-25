'use client';
import { MainType } from "@/types/main.type";
import { createContext, ReactNode, useState } from "react";
interface MyPlanContextType {
  myPlan: MainType[];
  setMyPlan: React.Dispatch<React.SetStateAction<MainType[]>>;
  savePlan: MainType[];
  setSavePlan: React.Dispatch<React.SetStateAction<MainType[]>>;
}

export const MyPlanContext = createContext<MyPlanContextType>({
  myPlan: [],
  setMyPlan: () => {},
  savePlan: [],
  setSavePlan: () => {},
});

const MyPlanProvider = ({children}:{children:ReactNode}) => {
    const [myPlan,setMyPlan]= useState<MainType[]>([]);
    const [savePlan,setSavePlan]=useState<MainType[]>([]);
    const sharedData ={
        myPlan,
        setMyPlan,
        savePlan,
        setSavePlan
    }
    return <MyPlanContext.Provider value={sharedData}>{children}</MyPlanContext.Provider>
};

export default MyPlanProvider;