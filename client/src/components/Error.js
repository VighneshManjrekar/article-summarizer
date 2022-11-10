import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo.svg";

const Error = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <section className="bg-primary relative z-10 py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[400px] text-center">
              <div className="flex justify-center items-center">
                <img src={logo} className="mr-5 w-15 my-5" alt="Logo" />
              </div>
              <h2 className="mb-2 text-[50px] font-bold leading-none text-gray-800 sm:text-[80px] md:text-[100px] font-clash">
                400
              </h2>
              <h4 className="mb-3 text-[22px] font-semibold leading-tight text-gray-800 font-satoshi">
                Opps ! Invalid URL
              </h4>
            </div>
          </div>
        </div>
        <button
          onClick={handleClick}
          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-5 my-4 border border-gray-400 rounded-lg shadow-md font-satoshi text-xl"
        >
          Home
        </button>
      </div>
      <div className="absolute top-0 left-0 -z-10 flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14">
        <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
        <div className="flex h-full w-1/3">
          <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
          <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
        </div>
        <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
      </div>
    </section>
  );
};

export default Error;
