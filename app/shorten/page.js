"use client"
import React from 'react'
import { useState } from 'react'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [short, setshort] = useState("")
    const [generated, setGenerated] = useState(false)


    const generate = () => {

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "short": short
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${short}`)
                seturl(""),
                setshort("")
                alert(result.message)
                console.log(result)})
            .catch((error) => console.error(error));
    }
    return (
        <div className='mx-auto max-w-lg bg-purple-50 my-16 p-8 rounded-lg'>
            <h1>Generate your short Url</h1>
            <div>
                <input type="url" placeholder='Enter your Url' value={url} onChange={e => { seturl(e.target.value) }} />
                <input type="url" placeholder='Enter your Prefered short Url' value={short} onChange={e => { setshort(e.target.value) }} />
                <button onClick={generate}>Generate</button>
            </div>
            {generated && <code>
                {generated}
                </code>}
        </div>
    )
}

export default Shorten
