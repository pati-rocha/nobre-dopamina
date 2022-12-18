
import { useState, useEffect } from "react";
import { auth } from "../services/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";


export function Private({children}){
    const [loading, setLoading] = useState(true);
    const [signed, setSigned] = useState(false);


    useEffect(() => {
        
        async function checkLogin(){
            const unsub = onAuthStateChanged( auth, (user) => {
                
                if(user){
                    const userData = {
                        uid: user.uid,
                        email: user.email
                    }
                    localStorage.setItem("@detailUser", JSON.stringify(userData))
                    setLoading(false)
                    setSigned(true)
                } else{
                    setLoading(false)
                    setLoading(false)
                }
            })
        }
        checkLogin();
    },[])

    if(loading){
        return(
            <h1>Carregando</h1>
        )                 
    }

    if(!signed){
        return(
            <Navigate to="/login"/>
        )
    }
   
    return children;

   
}