import Lazyload from "react-lazyload";

export default function ReviewItem(props) {
  const { image, name, content } = props;

  return (
    <div className="max-w-[300px] lg:max-w-[570px] mx-auto mb-8 lg:mb-0">
      <div className="relative shadow-lg overflow-hidden">
        <Lazyload>
          <img
            src={`./img/${image}`}
            alt="review"
            className="w-full mx-auto bg-cover hover:scale-105 transition-all ease-in-out min-w-[300px]"
          />
        </Lazyload>
        <div className="absolute py-4 px-4 bg-white bottom-0 left-0 text-orange-500">
          {name}
        </div>
      </div>
      <div className="my-4 px-2">
        <p className="text-[16px] lg:text-[22px]">{content}</p>
      </div>
    </div>
  );
}
