import clientPromise from "@/lib/mongodb"

export async function POST(request) {
    const body= await request.json()
    const client=await clientPromise;
    const db=client.db("bitlinks")
    const collection=db.collection("url")


    const doc=collection.findOne({short:body.short})
    if(doc){
        return Response.json({success:false,error:true, message: 'Already exists' })
    }
    
    const result=await collection.insertOne({
        url:body.url,
        short:body.short
    })

    return Response.json({success:true,error:false, message: 'Finished' })
  }