import React, { useState } from "react";
import pic1 from "../../assets/crew/image-douglas-hurley.png";
import pic2 from "../../assets/crew/image-mark-shuttleworth.png";
import pic3 from "../../assets/crew/image-victor-glover.png";
import pic4 from "../../assets/crew/image-anousheh-ansari.png";
import "./crew.css";
export default function Crew() {
  const Info = [
    {
      id: "btn1",
      title: "COMMANDER",
      authorName: "DOUGLAS HURLEY",
      authorInfo:
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },

    {
      id: "btn2",
      title: "MISSION SPECIALIST",
      authorName: "MARK SHUTTLEWORTH HURLEY",
      authorInfo:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },

    {
      id: "btn3",
      title: "PILOT",
      authorName: "VICTOR GLOVER ",
      authorInfo:
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    },

    {
      id: "btn3",
      title: "FLIGHT ENGINEER",
      authorName: "ANOUSHEH ANSARI",
      authorInfo:
        "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    },
  ];

  const [data, setData] = useState("btn1");
  function DataDisplay(e) {

    setData(e.target.id);
    
  }
  return (
    <div className="Crew">
      <div className="container ">
        <div className="row  Crew-Row  ">
          <h1 className="numbered-title">02 MEET YOUR CREW</h1>

          {data === "btn1" ? (
            <>
              <div className="col-md-6  ">
                <h1 className="numbered-title  mt-5 text-muted">
                  {Info[0].title}
                </h1>
                <h2 className="text-white fs-800  ">{Info[0].authorName}</h2>
                <p className="text-white mt-5">{Info[0].authorInfo}</p>
              </div>
              <div className="col-md-6  text-center">
                <img src={pic1} width="65%" alt="" />
              </div>
            </>
          ) : (
            ""
          )}

          {data === "btn2" ? (
            <>
              <div className="col-md-6 mt-5 ">
                <h1 className="numbered-title mt-5 text-muted">
                  {Info[1].title}
                </h1>
                <h2 className="text-white authorName fs-800">{Info[1].authorName}</h2>
                <p className="text-white ">{Info[1].authorInfo}</p>
              </div>
              <div className="col-md-6 text-center">
                <img src={pic2} width="60%" alt="" />
              </div>
            </>
          ) : (
            ""
          )}

          {data === "btn3" ? (
            <>
              <div className="col-md-6 mt-5 ">
                <div className="mt-5">
                  <h1 className="numbered-title mt-5 text-muted">
                    {Info[2].title}
                  </h1>

                  <h2 className="  text-white fs-800">{Info[2].authorName}</h2>
                  <p className=" text-white">{Info[2].authorInfo}</p>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <img src={pic3} width="70%" alt="" />
              </div>
            </>
          ) : (
            ""
          )}
          {data === "btn4" ? (
            <>
              <div className="col-md-6 mt-5">
                <div className=" mt-5">
                  <h1 className="numbered-title mt-5  text-muted ">
                    {Info[3].title}
                  </h1>

                  <h2 className="text-white  fs-800">{Info[3].authorName}</h2>
                  <p className="text-white">{Info[3].authorInfo}</p>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <img src={pic4} width="75%" alt="" />
              </div>
            </>
          ) : (
            ""
          )}
          <div className="buttons ">
            <button
              onClick={DataDisplay}
              className="carasol"
              aria-selected="true"
              role="tab"
              id="btn1"
              aria-controls="commander-tab"
              tab-index="0"
              data-image="commander-image"
            ></button>

            <button
              onClick={DataDisplay}
              className="carasol"
              aria-selected="false"
              role="tab"
              id="btn2"
              aria-controls="specialist-tab"
              tab-index="-1"
              data-image="specialist-image"
            ></button>

            <button
              onClick={DataDisplay}
              className="carasol"
              aria-selected="false"
              role="tab"
              aria-controls="pilot-tab"
              tab-index="-1"
              data-image="pilot-image"
              id="btn3"
            ></button>
            <button
              onClick={DataDisplay}
              className="carasol"
              aria-selected="false"
              role="tab"
              aria-controls="engineer-tab"
              tab-index="-1"
              data-image="engineer-image"
              id="btn4"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}
