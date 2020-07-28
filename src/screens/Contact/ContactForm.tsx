import React, { FC, useEffect, useState } from "react";
import cx from "classnames";
import { useForm, ValidationRules } from "react-hook-form";
import { encodeData } from "@src/lib/encodeData";
import Recaptcha from "react-google-recaptcha";
import { RecaptchaForm, Input, Textarea } from "@components/Form";

const validationSchema: { [key: string]: ValidationRules } = {
  name: {
    required: "Your name is required",
    min: {
      value: 2,
      message: "Name is too short",
    },
    max: {
      value: 80,
      message: "Name is too long",
    },
  },
  email: {
    required: "Your email address is required",
    min: {
      value: 5,
      message: "Email is too short",
    },
    max: {
      value: 290,
      message: "Email is too long",
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/i,
      message: "Please enter a valid email",
    },
  },
  message: {
    required: "A message is required",
    min: {
      value: 10,
      message: "Please enter a message of at least 10 characters",
    },
    max: {
      value: 999,
      message: "Message is too long",
    },
  },
};

const defaultValues = {
  name: "",
  email: "",
  message: "",
};

const ContactForm: FC = () => {
  //   const onSubmit = (data: any) => console.log(data);

  return (
    <RecaptchaForm
      defaultValues={defaultValues}
      formName="contact"
      onSubmit={(data) => {
        console.log(data);
      }}
    >
      <Input
        name="name"
        type="text"
        label="Your Name"
        rules={validationSchema.name}
      />
      <Input
        name="email"
        type="email"
        label="Email"
        rules={validationSchema.email}
      />
      <Textarea
        name="message"
        label="Message"
        rules={validationSchema.message}
      />
    </RecaptchaForm>
  );
};

const OldContactForm: FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    message: "",
    "g-recaptcha-response": "",
  };
  const recaptchaRef: React.RefObject<Recaptcha> = React.createRef();

  //   const onSubmit = (e: React.FormEvent<HTMLFormElement>): Promise<boolean> => {
  //     const form = e.target as HTMLElement;
  //     return fetch("/", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //       body: encodeData({
  //         "form-name": form.getAttribute("name"),
  //         ...values,
  //       }),
  //     })
  //       .then(() => {
  //         // navigate(form.getAttribute("action") as string);
  //         console.log("submitted:", values);
  //         return true;
  //       })
  //       .catch(() => false)
  //       .finally(() => true);
  //   };

  const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY || "";

  //   const {
  //     values,
  //     handleChange,
  //     handleRecaptcha,
  //     handleSubmit,
  //     isSubmitting,
  //     hasSubmitted,
  //     fieldIsValid
  //   } = useForm({
  //     initialValues,
  //     onSubmit,
  //     recaptchaRef,
  //     validationSchema,
  //   });

  const { register, handleSubmit, errors, setValue } = useForm({
    mode: "onBlur",
  });

  useEffect(() => {
    register(
      { name: "g-recaptcha-response" },
      validationSchema["g-recaptcha-response"]
    );
  }, []);
  const onSubmit = (data: any) => console.log(data);

  //   if (hasSubmitted)
  //     return (
  //       <h2 className="title is-4 has-text-centered">
  //         Thanks {hasSubmitted.name}! I will get back to you soon.
  //       </h2>
  //     );

  const handleRecaptcha = (token: string | null) =>
    setValue("g-recaptcha-response", token);

  console.log(errors);
  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-recaptcha="true"
      onSubmit={handleSubmit(onSubmit)}
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
            id="name"
            ref={register(validationSchema.name)}
          />
          {errors.name && <p>{errors.name.message}</p>}
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
            id="email"
            ref={register(validationSchema.email)}
          />
          {errors.email && <p>{errors.email.message}</p>}
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
            id="message"
            ref={register(validationSchema.message)}
          />
          {errors.message && <p>{errors.message.message}</p>}
        </div>
      </div>
      <div className="mb-3 is-flex flex-column align-items-center">
        <Recaptcha sitekey={RECAPTCHA_KEY} onChange={handleRecaptcha} />
        {errors["g-recaptcha-response"] && (
          <p>{errors["g-recaptcha-response"].message}</p>
        )}
      </div>

      <div className="field has-text-centered">
        <button
          className={cx("button is-black", false && "is-loading")}
          type="submit"
          disabled={false}
        >
          Send
        </button>
      </div>
    </form>
  );
};

export { ContactForm };
