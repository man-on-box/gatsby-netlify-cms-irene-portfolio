import React, { useEffect, PropsWithChildren } from "react";
import cx from "classnames";
import { useForm, UseFormOptions, SubmitHandler } from "react-hook-form";
import Recaptcha from "react-google-recaptcha";

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY || "";

type RecaptchaValue = {
  "g-recaptcha-response": string | null;
};

interface RecaptchaFormProps<FormValues> extends UseFormOptions {
  formName: string;
  onSubmit: SubmitHandler<FormValues & RecaptchaValue>;
  defaultValues: FormValues;
  disableSubmit?: boolean;
  isSubmitting?: boolean;
  children: JSX.Element[];
}

const RecaptchaForm = <FormValues,>(
  props: PropsWithChildren<RecaptchaFormProps<FormValues>>
) => {
  const {
    formName,
    defaultValues,
    children,
    onSubmit,
    disableSubmit,
    isSubmitting,
  } = props;
  const { handleSubmit, setValue, register, errors } = useForm({
    defaultValues,
    mode: "onBlur",
  });

  const registerRecaptcha = () =>
    register(
      { name: "g-recaptcha-response" },
      { required: "Check you're not a robot" }
    );

  const handleRecaptcha = (token: string | null) =>
    setValue("g-recaptcha-response", token);

  useEffect(() => {
    registerRecaptcha();
  }, []);

  return (
    <form
      name={formName}
      method="post"
      data-netlify="true"
      data-netlify-recaptcha="true"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input type="hidden" name="form-name" value={formName} />
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
          className={cx("button is-black", isSubmitting && "is-loading")}
          type="submit"
          disabled={disableSubmit}
        >
          Send
        </button>
      </div>
    </form>
  );
};
export { RecaptchaForm };
