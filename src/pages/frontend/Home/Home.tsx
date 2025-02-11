import bottle from "../../../assets/images/LandingPage/bottle.svg";
export default function Home() {
  return (
    <div className="bg-black hero h-screen flex justify-center items-center">
      <div className="container px-4 md:px-8 lg:px-16 flex items-center justify-between">
        <div className="left-side max-w-2xl text-white">
          <h1 className="text-6xl font-bold">Elevate Your Spirit With</h1>
          <h1 className="text-6xl font-bold">Victory Scented Fragrances</h1>
          <p className="mt-4 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, porro.
          </p>

          <button className="bg-[#AB572D] p-2 rounded px-5 mt-20">
            Shop Now
          </button>
        </div>

        <div className="right-side">
          <img src={bottle} alt="Bottle" className="w-64 md:w-80" />
        </div>
      </div>
    </div>
  );
}
