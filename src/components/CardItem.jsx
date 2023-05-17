import Lazyload from "react-lazyload";

export default function CardItem(props) {
  const { image, room, title, location, price } = props;

  return (
    <>
      <div className="relative max-w-[300px] lg:max-w-[370px] mx-auto mb-8 lg:mb-0">
        <div className="relative shadow-lg overflow-hidden">
          <a href="/">
            <Lazyload>
              <img
                src={`./img/${image}`}
                alt="rumah"
                className="w-full mx-auto bg-cover hover:scale-105 transition-all ease-in-out"
              />
            </Lazyload>
          </a>
          <div className="absolute py-4 px-4 bg-white bottom-0 left-0 text-orange-500">
            {room} Room
          </div>
        </div>
        <a
          href="/"
          className="absolute top-6 right-6 p-3 rounded-full bg-slate-100 hover:bg-slate-200"
        >
          <Lazyload>
            <img src="./img/love.png" alt="love" className="max-w-[28px]" />
          </Lazyload>
        </a>

        <div className="my-4 px-2">
          <a
            href="/"
            className="text-xl lg:text-3xl font-normal mb-4 hover:underline"
          >
            {title}
          </a>
          <p className="text-slate-500 mb-4">{location}</p>
          <h2 className="text-xl lg:text-2xl text-orange-500">${price}</h2>
        </div>
      </div>
    </>
  );
}
