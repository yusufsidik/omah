import Lazyload from "react-lazyload";

export default function Jumbotron() {
  return (
    <div>
      <div className="py-24 px-2 lg:px-24">
        <div className="lg:flex lg:justify-between max-w-screen-xl mx-auto">
          <h1 className="text-5xl font-normal text-slate-800 mb-6 lg:mb-5 lg:leading-[70px]">
            Ready to <br /> find your new home
          </h1>
          <div className="relative md:mt-5">
            <p className="text-sm lg:text-lg text-slate-500 lg:max-w-sm">
              looking for a house with a low price and quality here and sell
              your house quickly here.
            </p>
            <div className="w-10 h-0 top-[10px] left-[-55px] border border-orange-400 absolute hidden lg:block"></div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-screen-xl mx-auto bg-transparent">
        <Lazyload>
          <img
            src="./img/hero-img.jpg"
            alt="hero"
            className="max-w-[1305px] w-full lg:mb-[-70px]"
          />
        </Lazyload>
        <div className="flex flex-col lg:flex-row my-6 lg:justify-end max-w-screen-xl">
          <div className="flex justify-around md:justify-center lg:justify-between px-3 py-4 lg:px-10 lg:py-6 flex-wrap gap-y-4 bg-white shadow-lg">
            <div className="mx-3 text-center lg:text-start">
              <label htmlFor="" className="text-sm lg:text-base">
                Select City
              </label>
              <select className="border-none bg-transparent focus:outline-none block text-sm lg:text-base mx-auto lg:mx-0">
                <option value="Jakarta" selected>
                  Jakarta
                </option>
                <option value="Bandung">Bandung</option>
                <option value="Malang">Malang</option>
                <option value="Surabaya">Surabaya</option>
              </select>
            </div>
            <div className="mx-3 text-center lg:text-start">
              <label htmlFor="" className="text-sm lg:text-base">
                Price
              </label>
              <select className="border-none bg-transparent focus:outline-none block text-sm lg:text-base mx-auto lg:mx-0">
                <option value="" selected>
                  $1000 - $2000
                </option>
                <option value="">$2000 - $3000</option>
                <option value="">$3500 - $4000</option>
              </select>
            </div>
            <div className="mx-3 text-center lg:text-start">
              <label htmlFor="" className="text-sm lg:text-base">
                Rooms
              </label>
              <select className="border-none bg-transparent focus:outline-none block text-sm lg:text-base mx-auto lg:mx-0">
                <option value="" selected>
                  1 Room
                </option>
                <option value="">2 Rooms</option>
                <option value="">3 Rooms</option>
              </select>
            </div>
            <div className="mx-3 text-center lg:text-start">
              <label htmlFor="" className="text-sm lg:text-base">
                Footage
              </label>
              <select className="border-none bg-transparent focus:outline-none block text-sm lg:text-base mx-auto lg:mx-0">
                <option value="" selected>
                  2 Footage
                </option>
                <option value="">3 Footage</option>
                <option value="">4 Footage</option>
              </select>
            </div>
          </div>
          <div className="self-center bg-white my-4 lg:my-0 lg:py-4 lg:pr-4 shadow-lg">
            <button className="py-3 px-5 lg:py-6 lg:px-10 bg-orange-500 text-white hover:bg-orange-400">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
