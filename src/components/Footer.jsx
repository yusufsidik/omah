export default function Footer() {
  return (
    <footer className="mt-[200px] py-6">
      <div className="max-w-screen-xl mx-auto flex justify-between px-4 items-center">
        <div className="text-slate-500 text-sm md:text-lg">
          Omah by
          <a href="https://www.instagram.com/dzakimuzh/"> @dzakimuzh</a>
        </div>
        <div className="flex jutify-center gap-x-2">
          <a
            href="https://www.instagram.com/dzakimuzh/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./img/instagram.png"
              alt="instagram"
              className="w-[24px] lg:w-[32px] h-[24px] lg:h-[32px]"
            />
          </a>
          <a
            href="https://www.facebook.com/dzaki.m.186"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./img/facebook.png"
              alt="facebook"
              className="w-[24px] lg:w-[32px] h-[24px] lg:h-[32px]"
            />
          </a>
          <a href="https://www.instagram.com/dzakimuzh/">
            <img
              src="./img/twitter.png"
              alt="twitter"
              className="w-[24px] lg:w-[32px] h-[24px] lg:h-[32px]"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
