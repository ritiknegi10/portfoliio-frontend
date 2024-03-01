import React from "react";
import SectionTitle from "../../components/SectionTitle";

function Contact() {
  const contact = [
    {
      name: "Ritik Negi",
      age: "20",
      email: "negiritik47@gmail.com",
      mobile: " +91 6399793001",
      country: "INDIA",
    },
  ];

  return (
    <div>
      <SectionTitle title="Say Hello" />
      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-1">
          {" "}
          <p className="text-tertiary ">{"{"}</p>
          {Object.keys(contact[0]).map((key) => (
            <p className="ml-5 ">
              <span className="text-tertiary">{key} :</span> :{" "}
              <span className="text-tertiary">{contact[0][key]}</span>
            </p>
          ))}
          <p className="text-tertiary ">{"}"}</p>
        </div>

        <div className="h-[300px]">
          <dotlottie-player
            src="https://lottie.host/f5719e53-f389-4856-b4ab-ed995140ed1a/aMgH6A6Dmb.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;
