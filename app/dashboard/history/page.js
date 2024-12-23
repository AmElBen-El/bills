"use server"
import { auth } from "@/auth"
import AuthorizationCheck from "@/config/authorization-check";
import History from "./history";

export default async function page () {
    const session = await auth();

      return (
        <>
        <AuthorizationCheck/>   
        <History userId={session?.user?.id}/>     
        </>
    )
}