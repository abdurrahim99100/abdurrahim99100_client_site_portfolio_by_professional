import { FaPhoneSquareAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const { name, email, message, subject } = data;
    const contactData = { name, email, message, subject };
    // console.log(contactData);
    const url = "https://abdurrahimportfolioserver.up.railway.app/contact";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(contactData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          reset();
          Swal.fire({
            icon: "success",
            title: "Your message has been send",
            message: "Thank you!",
            timer: 1500,
            showConfirmButton: false,
          });
        }
      })
      .catch((error) => console.log("Error", error));
  };

  return (
    <div className="container mx-auto" id="contact">
      <div className="mt-10 lg:mt-0 flex flex-col justify-center px-5 sm:pt-[150px]">
        <div
          data-aos="zoom-in"
          data-aos-duration="1800"
          className="font-bold text-4xl text-center uppercase"
        >
          <h3>Contact Me</h3>
          <p className="my-5 font-light text-blue-400 text-xl font-sans">
            Get in Touch
          </p>
        </div>
        <div className="sm:flex sm:flex-row-reverse lg:justify-between sm:items-end sm:gap-[50px] lg:mt-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            data-aos="fade-up"
            data-aos-duration="1800"
            className="grid grid-cols-1 gap-4 text-black w-full sm:w-[50%]"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered w-full"
              {...register("name", { required: true })}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full"
              {...register("email", { required: true })}
            />
            <input
              type="subject"
              name="subject"
              placeholder="Subject"
              className="input input-bordered w-full"
              {...register("subject", { required: true })}
            />
            <input
              type="text"
              name="message"
              placeholder="Message"
              className="input input-bordered w-full"
              {...register("message", { required: true })}
            />

            <div>
              <button
                type="submit"
                className="flex btn btn-accent w-[150px] rounded-r-full bg-blue-400 text-white"
              >
                <span>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                SEND
              </button>
            </div>
          </form>
          <div
            data-aos="fade-up"
            data-aos-duration="1800"
            className="mt-10 lg:mt-0"
          >
            <div className="flex items-center gap-4">
              <span className="border-2 border-blue-400 text-2xl p-2 rounded-full text-blue-400">
                <FaPhoneSquareAlt />
              </span>
              <div>
                <p className="text-3xl font-bold text-blue-400">Phone :</p>
                <p className="text-xl font-light">+8801580590037</p>
              </div>
            </div>
            <div className="flex items-center gap-4 my-5">
              <span className="border-2 border-blue-400 text-blue-400 text-4xl p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </span>
              <div>
                <p className="text-3xl font-bold text-blue-400">Email :</p>
                <p className="text-xl font-light">abdurrahim99100@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="border-2 border-blue-400 text-blue-400 text-2xl p-2 rounded-full">
                <FaMapMarkerAlt />
              </span>
              <div>
                <p className="text-3xl font-bold text-blue-400">Location :</p>
                <p className="text-xl font-light">
                  Nazirpur, Pirojpur, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
