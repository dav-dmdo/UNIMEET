import { useEffect, useState } from "react";
import { getCategories } from "../../data/services/readCategories";


export default function useCategories(){
    const[categorie, setCategory]= useState([]);
    const [categories, setCategories]= useState(null);

    useEffect(()=> {
        const load= async ()=>{
            const categories=await getCategories();
            setCategories(categories)
        };
        load();
    }, []);
    return categories;
}