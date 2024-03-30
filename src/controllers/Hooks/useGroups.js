import { useEffect, useState } from "react";
import { getGroups } from "../../data/services/readGroups";


export default function useGroups(){
    const[group, setGroup]= useState([]);
    const [groups, setGroups]= useState(null);

    useEffect(()=> {
        const load= async ()=>{
            const groups=await getGroups();
            setGroups(groups)
        };
        load();
    }, []);
    return groups;
}

