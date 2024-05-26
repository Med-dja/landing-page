import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-800 py-12">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold mb-1.5 font-serif text-white">CONTACT US</h2>
        <hr className="w-48 h-1.5 mx-auto bg-[#f8d9f8] border-0 rounded md:my-1" />
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-xl font-serif px-16 font-medium text-[#f8d9f8]">
          <p>Addis Ababa, Ethiopia</p>
          <p>📞 +971-111-111-111 - company</p>
          <p>📧 sara.bzd138@gmail.com</p>
        </div>

        <div className="md:w-1/2 rounded-lg bg-white p-8 mt-8 md:mt-0 shadow-lg">
          <form action="#" className="space-y-4">
            <div>
              <label className="sr-only" htmlFor="name">Name</label>
              <input className="w-full rounded-lg ring-1 ring-black p-3 text-sm" placeholder="Name" type="text" id="name" />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="phone">Phone</label>
                <input className="w-full rounded-lg ring-1 ring-black p-3 text-sm" placeholder="Phone" type="text" id="phone" />
              </div>

              <div>
                <label className="sr-only" htmlFor="email">Email</label>
                <input className="w-full rounded-lg ring-1 ring-black p-3 text-sm" placeholder="Email address" type="email" id="email" />
              </div>
            </div>

            <div>
              <label className="sr-only" htmlFor="message">Message</label>
              <textarea className="w-full rounded-lg ring-1 ring-black p-3 text-sm" placeholder="Message" rows="8" id="message"></textarea>
            </div>

            <div className="mt-4">
              <button type="submit" className="w-full rounded-lg bg-black px-5 py-3 font-medium text-[#FFF5FF] sm:w-auto">
                Contact us
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
