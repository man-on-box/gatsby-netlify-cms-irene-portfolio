import React, { FC } from "react";
import cx from "classnames";
import { ValidationRules, UseFormMethods } from "react-hook-form";

export interface TextAreaProps
  extends Partial<Pick<UseFormMethods, "register" | "errors">> {
  rules?: ValidationRules;
  name: string;
  label: string;
}

const Textarea: FC<TextAreaProps> = ({
  name,
  label,
  rules = {},
  register,
  errors = {},
  ...rest
}) => (
  <div className="field">
    <label className="label" htmlFor={name}>
      {label}
    </label>
    <div className="control">
      <textarea
        className={cx("textarea", errors[name] && "is-danger")}
        aria-invalid={errors[name] ? "true" : "false"}
        name={name}
        id={name}
        ref={register && register(rules)}
        {...rest}
      />
      {errors[name] && (
        <p className="help is-danger" role="alert">
          {errors[name].message}
        </p>
      )}
    </div>
  </div>
);

export { Textarea };
