import React from "react";

const Booking = () => {
  return (
    <section className="bg-purple-100 py-8">
      <div className="mb-16">
        <h2 className="text-4xl font-bold  text-center font-serif">
          BOOK A TABLE
        </h2>
        <hr className="w-48 h-1.5 mx-auto bg-gray-100 border-0 rounded md:my-1 dark:bg-gray-700" />
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2 pb-12">
          <p className="text-2xl font-serif font-bold mb-2">Opening Hours:</p>
          <div className="text-xl font-serif font-medium">
            <p>Monday-Friday: 11:00 AM - 09:00 PM</p>
            <p>Additional Info:</p>
            <p>Phone: 111-111-111</p>
            <p>Address: Addis Ababa, Ethiopia (Map)</p>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 bg-white p-6 rounded shadow-lg">
          <form>
            <label className="block mb-2">Choose Table Size</label>
            <select className="block w-full p-2 mb-4 border">
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
            <label className="block mb-2">Choose a Day</label>
            <input type="date" className="block w-full p-2 mb-4 border" />
            <label className="block mb-2">Choose a Time</label>
            <input
              type="text"
              className="block w-full p-2 mb-4 border"
              placeholder="Sorry, there is no available time for this date..."
              disabled
            />
            <button
              type="submit"
              className="w-full py-2 bg-gray-800 text-[#FFF5FF]"
            >
              MAKE ORDER
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
