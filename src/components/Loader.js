import React from "react";
function Loader() {
  return (
    <div className="h-screen flex items-center justify-center fixed inset-0 bg-primary z-[100]">
      <div className="flex gap-5 text-4xl font-semibold">
        <h1 className="p text-secondary">Portfolio</h1>
        <h1 className="w text-tertiary ">Website</h1>
      </div>
    </div>
  );
}

export default Loader;
