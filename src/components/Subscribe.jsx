export default function Subscribe() {
  return (
    <div className="max-w-screen-xl ml-auto 2xl:mx-auto bg-[#F58634] mt-[150px] lg:mt-[300px]">
      <div className="max-w-screen-lg mx-auto py-14">
        <h1 className="text-center text-[40px] lg:text-[48px] text-white">
          Subscribe to get a discount <br className="hidden lg:block" /> of 30%
        </h1>
        <div className="max-w-[740px] mx-auto">
          <div className="flex p-4 justify-between mx-auto w-full">
            <input
              type="text"
              placeholder="Enter your email address"
              className="bg-white px-6 text-sm focus:outline-none w-full"
            />
            <div className="bg-white">
              <button className="bg-orange-400 hover:bg-orange-500 py-4 px-6 m-3 lg:m-4 text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
