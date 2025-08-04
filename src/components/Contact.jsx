const Contact = () => {
  return (
    <section id="contact" className="flex flex-col px-5 py-18 bg-blue-100">
      <div className="flex flex-col items-center text-indigo-700">
        <h1 className="font-bold text-3xl border-b-2 w-[115px] text-blue-800">
          Contact
        </h1>
        <p className="py-5 font-medium">
          If you want to discuss more in details, please contact me
        </p>
        <p className="py-2">
          Email :{" "}
          <span className="font-normal hover:text-green-500">
            sharvanskv62@gmail.com
          </span>
        </p>
        <p className="py-2 font-bold">
          Phone :{" "}
          <span className="font-normal hover:text-green-500">7418989531</span>
        </p>
      </div>
    </section>
  );
};

export default Contact;
