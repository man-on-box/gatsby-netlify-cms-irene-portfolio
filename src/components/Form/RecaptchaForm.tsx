import React, { useEffect, PropsWithChildren } from "react";
import cx from "classnames";
import { useForm, UseFormOptions, SubmitHandler } from "react-hook-form";
import Recaptcha from "react-google-recaptcha";

type RecaptchaValue = {
  "g-recaptcha-response": string | null;
};

interface RecaptchaFormProps<FormValues> extends UseFormOptions {
  formName: string;
  onSubmit: SubmitHandler<FormValues & RecaptchaValue>;
  defaultValues: FormValues;
  children: JSX.Element[];
}

const RecaptchaForm = <FormValues,>({
  formName,
  defaultValues,
  children,
  onSubmit,
}: PropsWithChildren<RecaptchaFormProps<FormValues>>) => {
  const { handleSubmit, setValue, register, errors } = useForm({
    defaultValues,
    mode: "onBlur",
  });

  const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY || "";

  const handleRecaptcha = (token: string | null) =>
    setValue("g-recaptcha-response", token);

  useEffect(() => {
    register(
      {
        name: "g-recaptcha-response",
      },
      { required: "Check you're not a robot" }
    );
  }, []);

  return (
    <form
      name={formName}
      method="post"
      data-netlify="true"
      data-netlify-recaptcha="true"
      onSubmit={handleSubmit(onSubmit)}
    >
      {React.Children.map(children, (child) => {
        return child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register,
                errors,
                key: child.props.name,
              },
            })
          : child;
      })}
      <div className="mb-3 is-flex flex-column align-items-center">
        <Recaptcha sitekey={RECAPTCHA_KEY} onChange={handleRecaptcha} />
        {errors["g-recaptcha-response"] && (
          <p className="help is-danger" role="alert">
            {errors["g-recaptcha-response"].message}
          </p>
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
export { RecaptchaForm };
