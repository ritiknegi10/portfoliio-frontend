import React from "react";

function LeftSider() {
  const email = "negiritik47@gmail.com";
  const subject = "Subject";
  const body = "Body";

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="https://www.linkedin.com/in/ritik-negi-a755b422a/">
            {" "}
            <i class="ri-linkedin-box-fill text-gray-600 text-2xl "></i>
          </a>

          <a href={mailtoLink}>
            <i class="ri-mail-fill text-gray-600 text-2xl"></i>
          </a>

          <a href="https://github.com/ritiknegi10">
            {" "}
            <i class="ri-github-fill text-gray-600 text-2xl"></i>
          </a>

          <a href="https://twitter.com/ritiknegiwork10">
            {" "}
            <i class="ri-twitter-fill text-gray-600 text-2xl "></i>
          </a>
          <a href="https://stackoverflow.com/users/23496737/ritik-negi">
            {" "}
            <i class="ri-stack-overflow-fill text-gray-600 text-2xl"></i>
          </a>
        </div>

        <dv className="w-[1px] h-32 bg-[#125f63] sm:hidden"></dv>
      </div>
    </div>
  );
}

export default LeftSider;
