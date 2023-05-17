import ReviewItem from "./ReviewItem";

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
            <ReviewItem
              image="review-1.jpg"
              name="Jone Doe"
              content="I'm very satisfied buying a house here because it's fast and easy"
            />
            <ReviewItem
              image="review-2.jpg"
              name="Angelina"
              content="Buying a house here is very cheap and high quality"
            />
            <ReviewItem
              image="review-1.jpg"
              name="Amanda"
              content="Buying a house here is very cheap and high quality"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
