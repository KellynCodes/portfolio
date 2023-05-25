import React, { useEffect, useState } from "react";
import "./contact.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useForm, ValidationError } from "@formspree/react";

import FormSvg from "../../assets/form.svg";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  const [state, handleSubmit] = useForm("moqznqwq");
  const [message, setMessage] = useState("");
  const [htmlPhone, setHtmlPhone] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [phoneName, setPhoneName] = useState("");

  const handleMessage = () => {
    state.succeeded
      ? setMessage("Thanks for contacting me!. I will get back to you shortly.")
      : setMessage("Sorry! something went wrong.");
  };

  const checkInput = () => {
    if (phoneInput.trim() !== "") {
      setPhoneName("");
      setHtmlPhone("");
    } else {
      setPhoneName("Phone");
      setHtmlPhone("phone");
    }
  };

  return (
    <div id="contact" className="contact_container">
      <div className="header_text">
        <h1>Contact Me</h1>
      </div>
      <div className="contact">
        <div className="beautify_form" data-aos="flip-left">
          <img src={FormSvg} alt="Form_Image" />
        </div>

        <form onSubmit={handleSubmit} action="" data-aos="flip-right">
          <div className="form_group">
            <input type="name" name="Name" placeholder="Name" required />
            <label htmlFor="name">Name</label>
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            {state.errors}
          </div>

          <div className="form_group">
            <input
              type="number"
              value={phoneInput}
              name={phoneName}
              onChange={(e) => {
                setPhoneInput(e.target.value);
              }}
              placeholder="Phone(Optional)"
            />
            <label htmlFor={htmlPhone}>Phone</label>
          </div>

          <div className="form_group">
            <input type="email" name="Email" placeholder="Email" required />
            <label htmlFor="email">Email</label>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="message">
            <textarea
              name="Message"
              placeholder="Enter Your Message Here"
              required
            ></textarea>
            <label htmlFor="message">Enter Your Message Here</label>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <div className="form_group">
            <h5
              style={{
                backgroundColor: "#fffff0",
                padding: 5,
                borderRadius: 5,
                textAlign: "center",
                color: "#4297a0",
                fontSize: 12,
                marginBottom: 6,
                marginTop: -6,
                display: state.errors ? "flex" : "none",
              }}
            >
              {message}
            </h5>
            <button
              onClick={() => {
                handleMessage();
                checkInput();
              }}
              type="submit"
              disabled={state.submitting}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
