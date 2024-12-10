"use server"
import { redirect } from "next/navigation";
import Image from "next/image";
const punycode = require("punycode/");

export default async function Home() {
  redirect("/auth/signin");
}