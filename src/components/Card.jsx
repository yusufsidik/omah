export default function Card() {
  return (
    <div className="mt-20 lg:mt-40">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between mx-auto px-2 items-center mb-10 lg:mb-14">
          <div className="">
            <h1 className="text-xl lg:text-[40px] inline mr-6">The Latest</h1>
            <div className="inline">
              <a
                href="/"
                className="inline mr-4 lg:text-[24px] hover:text-orange-500"
              >
                For sale
              </a>
              <a
                href="/"
                className="inline lg:text-[24px] active-nav-card hover:text-orange-500"
              >
                To rent
              </a>
            </div>
          </div>
          <a href="/" className="underline lg:text-[24px] hover:no-underline">
            View all
          </a>
        </div>
        <div className="flex flex-wrap">
          <div className="relative max-w-[300px] lg:max-w-[370px] mx-auto mb-8 lg:mb-0">
            <div className="relative shadow-lg overflow-hidden">
              <a href="/">
                <img
                  src="/rumah-1.jpg"
                  alt="rumah"
                  className="w-full mx-auto bg-cover hover:scale-105 transition-all ease-in-out"
                />
              </a>
              <div className="absolute py-4 px-4 bg-white bottom-0 left-0 text-orange-500">
                3 Room
              </div>
            </div>
            <a
              href="/"
              className="absolute top-6 right-6 p-3 rounded-full bg-slate-100 hover:bg-slate-200"
            >
              <img src="/love.png" alt="love" className="max-w-[28px]" />
            </a>

            <div className="my-4 px-2">
              <a
                href="/"
                className="text-xl lg:text-3xl font-normal mb-4 hover:underline"
              >
                Orange House
              </a>
              <p className="text-slate-500 mb-4">
                Jl. Klapanunggal, Cileungsi, Bogor
              </p>
              <h2 className="text-xl lg:text-2xl text-orange-500">
                $1,435,000
              </h2>
            </div>
          </div>

          <div className="relative max-w-[300px] lg:max-w-[370px] mx-auto mb-6 lg:mb-0">
            <div className="relative shadow-lg overflow-hidden">
              <a href="/">
                <img
                  src="/rumah-2.jpg"
                  alt="rumah"
                  className="w-full mx-auto bg-cover hover:scale-105 transition-all ease-in-out"
                />
              </a>
              <div className="absolute py-4 px-4 bg-white bottom-0 left-0 text-orange-500">
                3 Room
              </div>
            </div>
            <a
              href="/"
              className="absolute top-6 right-6 p-3 rounded-full bg-slate-100 hover:bg-slate-200"
            >
              <img src="/love.png" alt="love" className="max-w-[28px]" />
            </a>

            <div className="my-4 px-2">
              <a
                href="/"
                className="text-xl lg:text-3xl font-normal mb-4 hover:underline"
              >
                White House
              </a>
              <p className="text-slate-500 mb-4">
                Jl. Klapanunggal, Cileungsi, Bogor
              </p>
              <h2 className="text-xl lg:text-2xl text-orange-500">
                $1,200,500
              </h2>
            </div>
          </div>

          <div className="relative max-w-[300px] lg:max-w-[370px] mx-auto mb-6 lg:mb-0">
            <div className="relative shadow-lg overflow-hidden">
              <a href="/">
                <img
                  src="/rumah-3.jpg"
                  alt="rumah"
                  className="w-full mx-auto bg-cover hover:scale-105 transition-all ease-in-out"
                />
              </a>
              <div className="absolute py-4 px-4 bg-white bottom-0 left-0 text-orange-500">
                4 Room
              </div>
            </div>
            <a
              href="/"
              className="absolute top-6 right-6 p-3 rounded-full bg-slate-100 hover:bg-slate-200"
            >
              <img src="/love.png" alt="love" className="max-w-[28px]" />
            </a>

            <div className="my-4 px-2">
              <a
                href="/"
                className="text-xl lg:text-3xl font-normal mb-4 hover:underline"
              >
                Green House
              </a>
              <p className="text-slate-500 mb-4">
                Jl. Klapanunggal, Cileungsi, Bogor
              </p>
              <h2 className="text-xl lg:text-2xl text-orange-500">
                $2,500,000
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
