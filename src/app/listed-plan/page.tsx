'use client';
import { MyPlanContext } from "@/context/MyPlanContext";
import { useContext } from "react";

const ListedPlan = () => {
    const {myPlan,savePlan}=useContext(MyPlanContext);
    return (
        <div>
            HELLO WORLSD
        </div>
    );
};

export default ListedPlan;