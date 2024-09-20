import { BsBrightnessHigh } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
import { RiCake3Line } from "react-icons/ri";
import { RxReload } from "react-icons/rx";

const BirthdayCard = () => {
  return (
    <div
      className="mt-4 w-full rounded-sm p-[15px] text-white"
      style={{
        background:
          "linear-gradient(99deg, rgba(216, 53, 101, 0.9), rgba(187, 53, 216, 0.8)), url('/src/assets/event/birthday-bg.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center justify-between">
        <h1 className="font-semibold">Birthday !!!!</h1>

        <div className="flex items-center gap-2">
          <div className="flex size-6 items-center justify-center rounded-full bg-[#edf7fb33]">
            <RxReload size={12} className="text-white" />
          </div>

          <div className="flex size-6 items-center justify-center rounded-full bg-[#edf7fb33]">
            <BsBrightnessHigh size={12} className="text-white" />
          </div>
        </div>
      </div>

      <p className="pt-1 font-roboto text-[11px] font-medium">
        Today Your College Friend's Birthday
      </p>

      <div className="flex items-center justify-around py-6">
        <div className="flex size-9 items-center justify-center rounded-full bg-[#edf7fb33]">
          <RiCake3Line size={18} />
        </div>

        <img
          src="/src//assets/user-sm/4.jpg"
          alt="user"
          className="block size-16 rounded-full object-cover"
        />

        <div className="flex size-9 items-center justify-center rounded-full bg-[#edf7fb33]">
          <p className="text-xs font-bold">21+</p>
        </div>
      </div>

      <div>
        <h2 className="text-center text-sm font-semibold">Anabella Camilla</h2>
        <p className="text-center font-roboto text-xs">Glagrow Scotland</p>

        <p className="py-4 text-center text-xs">
          Wishing you a day filled with joy, laughter, and wonderful memories!
        </p>

        <div className="">
          <div className="mt-5 flex items-center justify-between rounded bg-[#fff3] px-2 py-2.5">
            <input
              type="text"
              className="flex-1 bg-transparent font-roboto text-xs placeholder:text-white/80"
              placeholder="Wish Birthday to Your Friend"
            />

            <FaArrowRight size={12} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthdayCard;
