
const Navbar = () => {
  return (
    <div className="p-10 flex items-center justify-between">
        <div>
            <h1 className="text-3xl font-bold text-neutral-200">Dechat</h1>
        </div>


        <div>
           <button className="px-4 py-2 bg-pink-800 text-white rounded-full">Connect your wallet</button>
        </div>
    </div>
  )
}

export default Navbar