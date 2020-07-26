import React, { FC } from "react";
import cx from "classnames";
import { useForm } from "./useForm";
import { encodeData } from "@src/lib/encodeData";
import Recaptcha from "react-google-recaptcha";
import { navigate } from "gatsby-link";

const ContactForm: FC = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
    "g-recaptcha-response": null,
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): Promise<boolean> => {
    const form = e.target as HTMLElement;
    return fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeData({
        "form-name": form.getAttribute("name"),
        ...values,
      }),
    })
      .then(() => {
        // navigate(form.getAttribute("action") as string);
        console.log("submitted:", values);
        return true;
      })
      .catch(() => false)
      .finally(() => true);
  };

  const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY || "";

  const {
    values,
    handleChange,
    handleRecaptcha,
    handleSubmit,
    isSubmitting,
  } = useForm(initialValues, onSubmit);

  return (
    <form
      name="contact"
      method="post"
      action="/contact/thanks/"
      data-netlify="true"
      data-netlify-recaptcha="true"
      onSubmit={handleSubmit}
    >
      <noscript>
        <p>This form won’t work with Javascript disabled</p>
      </noscript>
      <div className="field">
        <label className="label" htmlFor={"name"}>
          Your name
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="name"
            onChange={handleChange}
            value={values.name}
            id="name"
            required={true}
          />
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor={"email"}>
          Email
        </label>
        <div className="control">
          <input
            className="input"
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email}
            id="email"
            required={true}
          />
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor={"message"}>
          Message
        </label>
        <div className="control">
          <textarea
            className="textarea"
            name="message"
            value={values.message}
            onChange={handleChange}
            id="message"
            required={true}
          />
        </div>
      </div>
      <div className="mb-3 is-flex justify-content-center">
        <Recaptcha sitekey={RECAPTCHA_KEY} onChange={handleRecaptcha} />
      </div>

      <div className="field has-text-centered">
        <button
          className={cx("button is-black", isSubmitting && "is-loading")}
          type="submit"
          disabled={isSubmitting}
        >
          Send
        </button>
      </div>
    </form>
  );
};

export { ContactForm };
