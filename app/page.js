import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-[100px]">
      <section className=" bg-green-50 grid grid-cols-2 h-[50vh] gap-4">
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-2xl">
            The Best Url Shortner in the market.
          </p>
          <p>
            We are the most straightforward Url Shortener in the world
          </p>
          <section className="mt-8 p-4 bg-white shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-4">How it works</h2>
            <ol className="list-decimal list-inside">
              <li>Enter the URL you want to shorten.</li>
              <li>Click the "Try Now" button.</li>
              <li>Copy the shortened URL and share it with others.</li>
            </ol>
            <br />
            <div className='flex gap-3 justify-center content-center'>
                <Link href="/shorten" ><button className='cursor-pointer border rounded-lg p-[8px] bg-gradient-to-r from-emerald-300 to-emerald-500 shadow-xl'>Try Now</button></Link>
                <Link href="https://github.com/shahidansari310" ><button className='cursor-pointer border rounded-lg p-[8px] bg-gradient-to-r from-emerald-300 to-emerald-500 shadow-xl'>Github</button></Link>
            </div>
          </section>
        </div>
        <div className="relative flex ">
          <Image alt="Image" src="/anime.jpg" fill={true} />
        </div>
      </section>

    </div>
  );
}
