import Title from "./Shared/Title";
import React, { useRef } from "react";
import Layout from "./Shared/Layout";
import HomeTitle from "./Shared/HomeTitle";
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
      <section className="bg-[#F8FAFD] py-10">
        <Layout>
          <div className="flex font-josefin rounded-md">
            <HomeTitle title="Get connected?"></HomeTitle>
          </div>
          <div className="flex gap-4">
            <div className="bg-white w-full shadow rounded">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.8559957774314!2d90.3882274144293!3d23.89472458451844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5bde5bc8d41%3A0x9f948ac454214178!2sAshikur%20Rahman%20(%20Web%20Developer%20and%20Security%20Researcher%20in%20Bangladesh%20)!5e0!3m2!1sen!2sbd!4v1664480199729!5m2!1sen!2sbd"
                width="500"
                height="570"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="bg-white w-full shadow rounded p-4">
              <form action="" method="post" ref={form}>
                <div className="md:flex items-center mt-12">
                  <div className="w-full md:w-1/2 flex flex-col">
                    <label className="font-semibold leading-none text-gray-400">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="leading-none text-gray-700 p-3 focus:outline-none focus:border-gray-100 mt-4 border-0 bg-gray-200 rounded"
                    />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                    <label className="font-semibold leading-none text-gray-400">
                      Phone
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="leading-none text-gray-700 p-3 focus:outline-none focus:border-gray-100 mt-4 border-0 bg-gray-200 rounded"
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
                      className="leading-none text-gray-700 p-3 focus:outline-none focus:border-gray-100 mt-4 border-0 bg-gray-200 rounded"
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
                      className="h-40 text-base leading-none text-gray-700 p-3 focus:outline-none focus:border-gray-200 mt-4 bg-gray-300 border-0 rounded"
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
        </Layout>
      </section>
    </>
  );
};

export default Contact;
