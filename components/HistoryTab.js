"use client"
import { useContext } from "react";
import { AppContext } from "@/config/context.config";
import { useRouter } from "next/navigation";
import { timestampToDate } from "./utils/timestampToDate";

export function HistoryTab({docId,amount, rate, timestamp, duration,type}) {
    const { setLoanDocId } = useContext(AppContext);
    const router = useRouter();

    return(
        <div
        onClick={() => {
            setLoanDocId(docId);
            router.push("/dashboard/loan-details")
        }}
        
        className="flex flex-col border border-blue-100 rounded-md p-3 mt-4 cursor-pointer">
                    <ul className="flex justify-between border-b border-blue-100 pb-2">
                        <li className="font-bold text-2xl text-gray-700">N{amount}</li>
                        <li className="text-xs text-blue-500">{rate}%</li>
                    </ul>

                    <ul className="flex justify-between items-center pt-2">
                        <li className="text-sm text-gray-700">{duration}</li>
                        <li className="text-sm text-gray-700">{timestampToDate(timestamp)}</li>
                        <li className="text-sm text-gray-700">{type}</li>
                    </ul>
                </div>
    )
}