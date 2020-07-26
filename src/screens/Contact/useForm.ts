import React, { useState } from "react";

type InputChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;
type FormEvent = React.FormEvent<HTMLFormElement>;

const useForm = <I>(
  initialValues: I,
  onSubmit: (event: FormEvent) => Promise<any>
) => {
  const [values, setValues] = useState<I>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [hasErrored, setHasErrored] = useState(false);

  const handleRecaptcha = (value: string | null) => {
    setValues((values) => ({
      ...values,
      "g-recaptcha-response": value,
    }));
  };

  const handleSubmit = (event: FormEvent) => {
    if (isSubmitting) return;

    event.preventDefault();
    setIsSubmitting(true);
    onSubmit(event)
      .then(() => setHasSubmitted(true))
      .catch(() => setHasErrored(true))
      .finally(() => setIsSubmitting(false));
  };

  const handleChange = (event: InputChangeEvent) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleChange,
    handleRecaptcha,
    handleSubmit,
    values,
    isSubmitting,
    hasSubmitted,
    hasErrored,
  };
};

export { useForm };
