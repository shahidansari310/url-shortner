import clientPromise from "@/lib/mongodb"

export async function POST() {
    const body=requestAnimationFrame.json()
    const client=await clientPromise;
    const db=client.db("bitlinks")
    const collection=db.collection("url")

    const result=await collection.insertOne({
        url:body.url,
        short:body.short
    })

    return Response.json({success:true,error:false, message: 'Finished' })
  }