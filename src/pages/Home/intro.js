const React = require("react");

function Intro() {
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10 ">
      <h1 className="text-white text-3xl sm:text-1xl"> Hi, I am</h1>
      <h1 className="text-secondary text-7xl sm:text-3xl font-semibold">
        Ritik Negi
      </h1>
      <h1 className="text-white text-5xl sm:text-3xl font-semibold">
        I make things for the WEB
      </h1>
      <p className="text-white w-2/3 ">
        I'm a React and MERN stack developer. I'm passionate about crafting
        seamless user experiences .
      </p>
      <div className="flex flex-row gap-7">
        {/* <button className="group border border-secondary font-bold shadow-md transition duration-300  hover:bg-secondary text-secondary hover:text-white px-10 py-5 rounded-lg">
          Get started
        </button> */}
        <button
          className="group border border-secondary font-bold shadow-md transition duration-300  hover:bg-secondary text-secondary hover:text-white px-10 py-5 rounded-lg"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1w3NasoCTWWZW67-ARuwUX3kNFi_nwMcs/view",
              "_blank"
            )
          }
        >
          Resume
        </button>
      </div>
    </div>
  );
}

export default Intro;
