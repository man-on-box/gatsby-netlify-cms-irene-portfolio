import React, { FC, useState } from "react";
import { ValidationRules } from "react-hook-form";
import { encodeData } from "@src/lib/encodeData";
import { RecaptchaForm, Input, Textarea } from "@components/Form";

const validationSchema: { [key: string]: ValidationRules } = {
  name: {
    required: "Your name is required",
    minLength: {
      value: 2,
      message: "Name is too short",
    },
    maxLength: {
      value: 80,
      message: "Name is too long",
    },
  },
  email: {
    required: "Your email address is required",
    minLength: {
      value: 6,
      message: "Email is too short",
    },
    maxLength: {
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
    minLength: {
      value: 10,
      message: "Please enter a message of at least 10 characters",
    },
    maxLength: {
      value: 1000,
      message: "Message is too long, please keep it less than 1000 characters",
    },
  },
};

const defaultValues = {
  name: "",
  email: "",
  message: "",
};

const ContactForm: FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [hasErrored, setHasErrored] = useState(false);

  const onSubmit = <Values,>(
    values: Values,
    event: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => {
    if (isSubmitting || !event) return;
    event.preventDefault();
    const form = event.target as HTMLElement;

    setIsSubmitting(true);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeData({
        "form-name": form.getAttribute("name"),
        ...values,
      }),
    })
      .then(() => {
        setHasSubmitted(true);
      })
      .catch((error) => {
        setHasErrored(true);
        console.log(error);
      })
      .finally(() => setIsSubmitting(false));
  };

  if (hasSubmitted)
    return (
      <h2 className="title is-4 has-text-centered">
        Thanks! I will get back to you soon.
      </h2>
    );

  return (
    <>
      <RecaptchaForm
        defaultValues={defaultValues}
        formName="contact"
        onSubmit={onSubmit}
        isSubmitting={isSubmitting}
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
      {!!hasErrored && (
        <p className="is-danger">
          There was a problem submitting this form, please try again shortly!
        </p>
      )}
    </>
  );
};

export { ContactForm };
