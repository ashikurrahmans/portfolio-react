import Title from "./Shared/Title";
import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_1afbb3k",
  //       "template_vpo8wor",
  //       form.current,
  //       "T_CgmBTKoAwlK1j1s"
  //     )
  //     .then(
  //       (result) => {},
  //       (error) => {}
  //     );
  // };

  return (
    <>
      <Title title="Contact us"></Title>
      <section className="bg-[#F8FAFD] py-12">
        <div className="w-9/12 mx-auto">
          <div className="flex font-josefin rounded-md">
            <h1 className="font-josefin text-4xl font-bold text-black pb-12">
              Stay Tuned To Get Latests
            </h1>
          </div>
          <div className="w-full">
            <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
              <div className="bg-white w-full shadow rounded p-8 sm:p-12 ">
                <form action="" method="post" ref={form}>
                  <div className="md:flex items-center mt-12">
                    <div className="w-full md:w-1/2 flex flex-col">
                      <label className="font-semibold leading-none text-gray-400">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="leading-none text-gray-50 p-3 focus:outline-none focus:border-gray-100 mt-4 border-0 bg-gray-200 rounded"
                      />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                      <label className="font-semibold leading-none text-gray-400">
                        Phone
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="leading-none text-gray-50 p-3 focus:outline-none focus:border-gray-100 mt-4 border-0 bg-gray-200 rounded"
                      />
                    </div>
                  </div>
                  <div className="md:flex items-center mt-8">
                    <div className="w-full flex flex-col">
                      <label className="font-semibold leading-none text-gray-400">
                        Subject
                      </label>
                      <input
                        name="subject"
                        type="text"
                        className="leading-none text-gray-50 p-3 focus:outline-none focus:border-gray-100 mt-4 border-0 bg-gray-200 rounded"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="w-full flex flex-col mt-8">
                      <label className="font-semibold leading-none text-gray-400">
                        Message
                      </label>
                      <textarea
                        name="message"
                        type="text"
                        className="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-gray-200 mt-4 bg-gray-300 border-0 rounded"
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-full">
                    <button className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-[#96afdd] rounded-lg  focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                      Send message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
