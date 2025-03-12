"use client";
import React, { useState } from "react";

const Shorten = () => {
    const [url, seturl] = useState("");
    const [short, setshort] = useState("");
    const [generated, setGenerated] = useState("");

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            url: url,
            short: short,
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setGenerated(`${process.env.NEXT_PUBLIC_HOST || "http://localhost:3000"}/${short}`);
                seturl("");
                setshort("");
                alert(result.message);
                console.log(result);
            })
            .catch((error) => console.error(error));
    };

    return (
        <div className="mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-center text-purple-700 mb-4">Generate Your Short URL</h1>
            <div className="space-y-4">
                <input
                    type="url"
                    placeholder="Enter your URL"
                    value={url}
                    onChange={(e) => seturl(e.target.value)}
                    className="w-full p-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                    type="text"
                    placeholder="Enter preferred short URL"
                    value={short}
                    onChange={(e) => setshort(e.target.value)}
                    className="w-full p-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                    onClick={generate}
                    className="w-full bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition"
                >
                    Generate
                </button>
            </div>
            {generated && (
                <div className="mt-4 p-3 bg-white border border-purple-300 rounded-lg text-center">
                    <span className="font-semibold text-gray-700">Short URL: </span>
                    <a href={generated} target="_blank" rel="noopener noreferrer" className="text-purple-600 underline">
                        {generated}
                    </a>
                </div>
            )}
        </div>
    );
};

export default Shorten;
