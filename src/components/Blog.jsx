import Lazyload from "react-lazyload";

export default function Blog() {
  return (
    <div className="mt-20 lg:mt-40">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between mx-auto px-2 items-center mb-10 lg:mb-14">
          <div className="">
            <h1 className="text-xl lg:text-[40px] leading-[1.5]">
              Always check our <br /> latest blog
            </h1>
          </div>
          <a href="/" className="underline lg:text-[24px] hover:no-underline">
            View all
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center lg:items-start">
          <div className="max-w-[570px] md:max-h-[392px]">
            <div className="relative bg-slate-400">
              <Lazyload>
                <img
                  src="./img/blog-1.jpg"
                  alt="blog"
                  className="w-full max-w-[570px] max-h-[392px]"
                />
              </Lazyload>
              <div className="absolute py-2 px-5 bottom-0 bg-white flex items-center">
                <Lazyload>
                  <img
                    src="./img/blog-user.jpg"
                    alt="user"
                    width="50px"
                    className="rounded-full inline mr-3"
                  />
                </Lazyload>
                <div className="flex flex-col justify-center">
                  <span className="text-[13px]">Yusuf firdaus</span>
                  <span className="text-[13px] text-slate-500">Admin</span>
                </div>
              </div>
            </div>
            <div className="p-3">
              <a href="/" className="no-underline text-[18px] lg:text-[24px]">
                Tips and tricks choosing a house
              </a>
              <p className="text-slate-500">
                Tips and tricks to buy a house easily
              </p>
            </div>
          </div>
          <div className="flex flex-col self-stretch justify-between gap-y-4 md:gap-y-0 max-h-[392px] max-w-[570px] mx-auto lg:mx-0">
            <div className="flex justify-between">
              <div className="p-3 lg:w-1/2">
                <a href="/" className="text-[18px] lg:text-[24px] lg:mb-8">
                  Creating a clean and elegant home
                </a>
                <p className="text-slate-500">Albert Firdaus</p>
              </div>
              <Lazyload>
                <img
                  src="./img/blog-2.jpg"
                  alt="blog"
                  className="max-w-[200px] lg:max-w-[286px]"
                />
              </Lazyload>
            </div>
            <div className="flex justify-between">
              <div className="p-3 lg:w-1/2">
                <a href="/" className="text-[18px] lg:text-[24px] lg:mb-8">
                  Good paint color for home
                </a>
                <p className="text-slate-500">Rusy Firdaus</p>
              </div>
              <Lazyload>
                <img
                  src="./img/blog-3.jpg"
                  alt="blog"
                  className="max-w-[200px] lg:max-w-[286px]"
                />
              </Lazyload>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
