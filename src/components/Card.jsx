import CardItem from "./CardItem";

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
          <CardItem
            image="rumah-1.jpg"
            room="3"
            title="Orange House"
            location="Jl. Klapanunggal, Cileungsi, Bogor"
            price="1,435,000"
          />
          <CardItem
            image="rumah-2.jpg"
            room="3"
            title="White House"
            location="Jl. Klapanunggal, Cileungsi, Bogor"
            price="1,200,500"
          />
          <CardItem
            image="rumah-3.jpg"
            room="4"
            title="Green House"
            location="Jl. Klapanunggal, Cileungsi, Bogor"
            price="2,500,000"
          />
        </div>
      </div>
    </div>
  );
}
