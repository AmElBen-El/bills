import Image from "next/image";

export default function Dashboard () {
    return(
        <main>
            <p>User dashboard</p>
            <p>Propose a UI design</p>
            <p>Build the UI</p>
            <p>Propose possiblle changes</p>
            <image width={480} height={240} src="/coins.jpeg" />
        </main>
    )
}