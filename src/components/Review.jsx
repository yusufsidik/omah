export default function Review() {
  return (
    <div className="mt-20 lg:mt-40">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between mx-auto px-2 items-center mb-10 lg:mb-14">
          <div className="">
            <h1 className="text-xl lg:text-[40px] leading-[1.5]">
              Some people are very <br /> satisfied buying a house here
            </h1>
          </div>
          <a href="/" className="underline lg:text-[24px] hover:no-underline">
            View all
          </a>
        </div>
        <div>
          <div className="overflow-x-auto flex gap-x-5">
            <div className="max-w-[300px] lg:max-w-[570px] mx-auto mb-8 lg:mb-0">
              <div className="relative shadow-lg overflow-hidden">
                <img
                  src="/review-1.jpg"
                  alt="review"
                  className="w-full mx-auto bg-cover hover:scale-105 transition-all ease-in-out min-w-[300px]"
                />
                <div className="absolute py-4 px-4 bg-white bottom-0 left-0 text-orange-500">
                  Jone Doe
                </div>
              </div>
              <div className="my-4 px-2">
                <p className="text-[16px] lg:text-[22px]">
                  I'm very satisfied buying a house here because it's fast and
                  easy
                </p>
              </div>
            </div>

            <div className="max-w-[300px] lg:max-w-[570px] mx-auto mb-8 lg:mb-0">
              <div className="relative shadow-lg overflow-hidden">
                <img
                  src="/review-2.jpg"
                  alt="review"
                  className="w-full mx-auto bg-cover hover:scale-105 transition-all ease-in-out min-w-[300px]"
                />
                <div className="absolute py-4 px-4 bg-white bottom-0 left-0 text-orange-500">
                  Angelina
                </div>
              </div>
              <div className="my-4 px-2">
                <p className="text-[16px] lg:text-[22px]">
                  Buying a house here is very cheap and high quality
                </p>
              </div>
            </div>

            <div className="max-w-[300px] lg:max-w-[570px] mx-auto mb-8 lg:mb-0">
              <div className="relative shadow-lg overflow-hidden">
                <img
                  src="/review-1.jpg"
                  alt="review"
                  className="w-full mx-auto bg-cover hover:scale-105 transition-all ease-in-out min-w-[300px]"
                />
                <div className="absolute py-4 px-4 bg-white bottom-0 left-0 text-orange-500">
                  Amanda
                </div>
              </div>
              <div className="my-4 px-2">
                <p className="text-[16px] lg:text-[22px]">
                  Buying a house here is very cheap and high quality
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
