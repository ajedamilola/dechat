import Navbar from "./sections/Navbar";

const App = () => {
  return (
    <main className="font-poppins ">
    <Navbar/>
  

<div className="flex flex-col items-center justify-center gap-5 md:h-[80vh] h-[80vh]">

<div className="flex flex-col items-center justify-center">
<h1 className="text-center text-2xl md:text-4xl text-neutral-300 font-bold ">DeChat: Share Your Tokens!</h1>
<p className="max-w-md hidden text-center text-neutral-300 ">Connect, chat, and effortlessly share tokens with family and friends!</p>
</div>

  <div className="w-[380px] md:w-[500px] h-[400px] rounded-3xl p-[2px] gradient-border">
    <div className="w-full bg-[#0f0816] h-full rounded-3xl flex items-center justify-center flex-col gap-5">
      <img src="/src/assets/ethereumLogo.png" alt="etherum-logo" className="w-[30%] showcase-img" />

      <p className="text-neutral-300">Please connect your wallet</p>
    </div>
  </div>
</div>


    </main>
  )
};

export default App;
