import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="bg-green-50">
          <p>
            The Best Url Shortner in the market.
          </p>
          <p>
            We are the most straightforward Url Shortner in the world
          </p>
        </div>
        <div className="relative flex ">
          <Image alt="Image" src="/anime.jpg" fill={true}/>
        </div>
      </section>

    </div>
  );
}
