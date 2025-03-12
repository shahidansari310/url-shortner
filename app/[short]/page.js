import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export default async function Page({ params }) {
    const client=await clientPromise;
    const db=client.db("bitlinks")
    const collection=db.collection("url")
    const short = (await params).short

    const doc= await collection.findOne({short:short})

    if(doc){
        redirect(doc.url)
    }    
    else{
        redirect(`${NEXT_PUBLIC_HOST}`)
    }

    return <div>My Post: {short}</div>
}