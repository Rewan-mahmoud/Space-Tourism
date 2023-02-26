import React from "react";
import { useState } from "react";
import img1 from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import img2 from "../../assets/technology/image-space-capsule-portrait.jpg";
import img3 from "../../assets/technology/image-spaceport-portrait.jpg";
import "./technology.css";
export default function Technology() {
  const [Info, setInfo] = useState("1");

  function displayData(e) {
    setInfo(e.target.id);
  }
  const data = [
    {
      id: "1",
      title: " LAUNCH VEHICLE",
      paragraph:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      id: "2",
      title: " SPACEPORT",
      paragraph:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
      id: "3",
      title: " SPACE CAPSULE",
      paragraph:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ];

  return (
    <div className="technology">
      <div className="container">
        <div className="row">
          <h1 className="numbered-title ">
            <span aria-hidden="true">03</span> Space Launch 101
          </h1>
          <div className="col-md-2 number-indicators mt-4">
            <button
              onClick={displayData}
              className={
                Info === "1" ? "ff-serif fs-600 bg-white text-dark" : ""
              }
              role="tab"
              id="1"
            >
              1
            </button>
            <button
              onClick={displayData}
              className={
                Info === "2" ? "ff-serif fs-600 bg-white text-dark" : ""
              }
              role="tab"
              aria-controls="vehicle-tab"
              tab-index="0"
              data-image="vehicle-image"
              id="2"
            >
              2
            </button>
            <button
              onClick={displayData}
              className={
                Info === "3" ? "ff-serif fs-600 bg-white text-dark" : ""
              }
              role="tab"
              aria-controls="vehicle-tab"
              tab-index="0"
              data-image="vehicle-image"
              id="3"
            >
              3
            </button>
          </div>
          <div className="col-md-5 text-white">
            <p class="fs-400 mt-5 uppercase ff-sans-cond text-light">
              The Terminology...
            </p>
            {Info === "1" ? (
              <>
                <h2 className="fs-1 ff-serif uppercase mb-4">
                  {data[0].title}
                </h2>
                <p className="fs-5 ff-serif ">{data[0].paragraph}</p>
              </>
            ) : (
              ""
            )}
            {Info === "2" ? (
              <>
                <h2 className="fs-1 ff-serif uppercase mb-4">
                  {data[1].title}
                </h2>
                <p className="fs-5 ff-serif ">{data[1].paragraph}</p>
              </>
            ) : (
              ""
            )}
            {Info === "3" ? (
              <>
                <h2 className="fs-1 ff-serif uppercase mb-4">
                  {data[2].title}
                </h2>
                <p className="fs-5 ff-serif ">{data[2].paragraph}</p>
              </>
            ) : (
              ""
            )}
          </div>
          <div className="col-md-5">
            {Info === "1" ? (
              <img src={img1} className="w-100 rounded-3  " alt="" />
            ) : (
              ""
            )}
            {Info === "2" ? (
              <img src={img2} className="w-100 rounded-3" alt="" />
            ) : (
              ""
            )}
            {Info === "3" ? (
              <img src={img3} className="w-100 rounded-3" alt="" />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
