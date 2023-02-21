import { useState } from "react";
import Btn from "./Btn";
import IconO from "@assets/icon-o.svg";
import IconX from "@assets/icon-x.svg";

export default function Modal() {
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-[black] opacity-40"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="flex items-center min-h-screen py-8">
              <div className="relative w-full  px-4 py-7 mx-auto bg-black-300 shadow-lg">
                <div className="mt-3">
                  <div className="mt-2 text-center sm:ml-4 sm:text-left">
                    <h4 className="text-lg uppercase text-center font-medium ">
                      {/* oh no, you lost… */}
                      {/* you won! */}
                      {/* player 1 wins! */}
                      {/* player 2 wins! */}
                    </h4>
                    <p className="my-7 uppercase text-2xl flex items-center justify-center gap-2 ">
                      {/* <img src={IconO} alt="" className="w-7" />
                      <span className="block text-yellow-400">takes the round</span> */}
                      {/* <img src={IconX} alt="" className="w-7" />
                      <span className="block text-blue-400">
                        takes the round
                      </span> */}
                      restart game?
                      {/* round tied */}
                    </p>
                    <div className="flex justify-center items-center gap-2 mt-3">
                      {/* w-1/4  */}
                      <div className="w-auto bg-gray-500 rounded-2xl pb-2">
                        <Btn classCSS="bg-gray-400 rounded-2xl w-full">
                          {/* quit */}
                          no, cancel
                        </Btn>
                      </div>

                      <div className="w-1/2 lg:w-auto bg-yellow-500 rounded-2xl pb-2">
                        <Btn classCSS="bg-yellow-400 rounded-2xl w-full">
                          {/* next round */}
                          yes, restart
                        </Btn>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
