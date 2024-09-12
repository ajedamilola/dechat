
const Navbar = () => {
  return (
    <div className="lg:p-10 p-5 flex items-center justify-between md:flex-row flex-col">
        <div >
            <h1 className="text-3xl text-neutral-400">$DCHRT</h1>
        </div>


        <div>
           <button className="px-4 py-2 bg-pink-700 text-white rounded-full font-medium">Connect your wallet</button>
        </div>
    </div>
  )
}

export default Navbar