"use client"
import { useState, useEffect} from "react";
import {TextField } from "@mui/material";
import { db } from "@/config/google_firebase.config";
import { addDoc,collection } from "firebase/firestore";
import { CircularProgress } from "@mui/material";
import { useFormik} from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
    amount: yup.number().required().min(1000),
})

const duration = [
    {id:"7d",days:7},
    {id:"30d",days:30},
    {id:"90d",days:90},
];
export function Borrow({userId}) { 
    const [clickedRate,setClickedRate] = useState(undefined);
    const [rate,setRate] = useState(0);
    const [payback,setPayback] = useState(0);
    const [days,setDays] = useState(0);
    const [opsProgress,setOpsProgress] = useState(false);
    
    const {handleSubmit,handleChange,values,touched,errors} = useFormik({
        initialValues:{
            amount:undefined
        },      
        onSubmit: async()=>{
            setOpsProgress(true);
            await addDoc(collection(db, "loans"), {
                user:userId,
                amount:values.amount,
                payback:payback,
                rate:rate,
                days:days,
                timecreated: new Date().getTime()
            })
            .then(() => {
                setOpsProgress(false);
                alert(`You have successfully borrowed ${values.amount} at the rate of ${rate}`)
            })
            .catch(e =>{
                setOpsProgress(false);
                console.error(e);
                alert("Encountered an unknown error")
            })

        }, 
        validationSchema:schema
    })
   
    useEffect(()=> {
        if (values.amount >= 1){
        const interest = (rate * values.amount)/100;
        setPayback(values.amount + interest)
    }
    },[values.amount,rate]);

    return (
        <main className="min-h-screen flex justify-center py-4 md:py-6 lg:py-8 px-4 md:px-12 lg:px-16 bg-gray-100">
            <div className="w-full md:w-[380px] flex flex-col gap-4 border border-gray-200 rounded-md bg-gray-50 p-2 md:p-6">
                <blockquote className="border-b border-gray-200 pb-3">
                    <span className="font-thin text-lg text-blue-800">Get an Instant Loan</span>
                </blockquote>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <TextField
                        id="amount"
                        type="number"
                        variant="outlined"
                        placeholder="loan amount"
                        value={values.amount}
                        onChange={handleChange}
                        />
                        {touched.amount && errors.amount ? <span className="text-xs text-red-500">{errors.amount} </span> :null}
                    </div>

                    <div className="border-dashed border border-blue-500 p-4 rounded-md">
                    <p className="text-blue-700 text-sm mb-3">Choose loan duration</p>
                    <ul className="grid grid-col-3 gap-2">
                       {
                            duration.map(item =>  <li
                                 key={item.id}
                                 onClick ={() => {
                                    setClickedRate(item.id)
                                    if (item.days === 7) {
                                        setRate(15.5)                                        
                                    } else if (item.days === 30) {
                                     
                                        setRate(12)
                                    } else if (item.days === 90) {
                                        setRate(9.5)                                        
                                    }                                   
                                    if (item.days === 7) {
                                        setDays(7)                                        
                                    } else if (item.days === 30) {
                                     
                                        setDays(30)
                                    } else if (item.days === 90) {
                                        setDays(90)
                                        
                                    }
                                 }}
                                  className={`h-16 flex justify-center items-center bg-blue-700 text-white text-md uppercase rounded-md`}>{item.days} days</li>)
                       }
                    </ul>

                </div >

                <div className="flex flex-col gap-3 border-dashed border border-blue-500 p-4 rounded-md">
                    <p className="text-gray-800">Interest rate for {days} days</p>
                    <p className="text-6xl text-blue-600">{rate}%</p>
                </div>
                    
                <div className="flex flex-col gap-3 bg-gradient-to-b from-blue-600 to-blue-800 border-dashed border border-blue-500 p-4 rounded-md">
                    <p className="text-blue-50">You will payback</p>
                    <p className="text-4xl text-white">₦{payback}</p>
                </div>                
                <div className=" flex item-center gap-1 mt-1">
                    <button type="submit" className="p-2 rounded-md bg-blue-600 text-white text-xl uppercase">Get Loan</button>
                    <CircularProgress style={{display:!opsProgress ? "none" : "flex"}} />
                </div>
                </form>
               
          
            </div>
        </main>
    )
}