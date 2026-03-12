import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center text-white h-[44vh] gap-4 flex-col items-center">
        <div className="text-3xl flex gap-2 font-bold justify-center items-center">But me a Chai<span><img src="/tea.webp" width={88} alt="" /></span></div>
        <p>
          A crowdfunding platform for creators. Get funded by your fans and followers. Start now!
        </p>
        <div>
          <button type="button" className="cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start here</button>
          <button type="button" className="cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read more</button>


        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white container mx-auto pb-10">
        <h1 className="font-bold text-2xl text-center my-10">Your Fans can buy you a Chai</h1>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-slate-500 flex items-center justify-center">
              <img src="/Designer.png" alt="coin" className="w-40" />
            </div>
            <p className="font-bold">Fans wants to help</p>
            <p className=" text-center ">Your Fans are available to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-slate-500 flex items-center justify-center">
              <img src="/coin.gif" alt="coin" className="w-24 h-24" />
            </div>
            <p className="font-bold">Fans wants to help</p>
            <p className="text-center ">Your Fans are available to help you</p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-slate-500 flex items-center justify-center">
              <img src="/group.gif" alt="coin" className="w-30" />
            </div>
            <p className="font-bold">Fans wants to help</p>
            <p className="text-center ">Your Fans are available to help you</p>
          </div>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white container mx-auto pb-10 flex flex-col items-center justify-center">
        <h1 className="font-bold text-2xl text-center my-10">Learn more about us</h1>
        <iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/xU47nhruN-Q?si=50_zpwmkb1MRzjGC"
  title="YouTube video player"
  style={{ border: 'none' }}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>


      </div>
    </>
  );
}
