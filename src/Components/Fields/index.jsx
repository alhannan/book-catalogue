import React from "react";
import "./Fields.scss";
import { Field } from "redux-form";

export const RenderDropdownList = ({ onChange, data, label, name }) => {
  return (
    <div className="field_container_row">
      <label htmlFor={name}>{label}</label>
      <Field component="select" name={name} onChange={onChange}>
        <option value="">Choose an Author: </option>
        {data &&
          data.map(({name, id}) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        <option value="add">Add an Author</option>
      </Field>
    </div>
  );
};

export const RenderInput = ({
  placeholder,
  className,
  onChange,
  labelActive,
  autoComplete,
  value,
  type,
  name,
  card,
  addButton,
}) => (
  <div className={`${card ? "field_container_row" : "field_container"}`}>
    <label htmlFor={name}>{labelActive && name}</label>
    <input
      autoComplete={autoComplete}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
      value={value}
      type={type}
      name={name}
    />
    {addButton && <i className="fas fa-plus-circle fa-2x"></i>}
  </div>
);

export const RenderReduxInput = ({
  placeholder,
  className,
  onChange,
  labelActive,
  autoComplete,
  value,
  name,
  card,
  addButton,
  label,
  onClick
}) => (
  <div className={`${card ? "field_container_row" : "field_container"}`}>
    <label htmlFor={name}>{labelActive && label}</label>
    <Field
      autoComplete={autoComplete}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
      value={value}
      component="input"
      name={name}
    />
    {addButton && <i className="fas fa-plus-circle fa-2x" onClick={onClick}></i>}
  </div>
);

export const SubmitButton = ({ onClick, ...otherProps }) => (
  <div className="field_container">
    <input
      type="submit"
      value="Submit"
      className="submit_btn"
      onClick={onClick}
      {...otherProps}
    />
  </div>
);

export const FbButton = ({ onClick, ...otherProps }) => (
  <div className="field_container">
    <button className="fb_btn" onClick={onClick} {...otherProps}>
      <i className="fab fa-facebook"></i>Continue with Facebook
    </button>
  </div>
);

export const GoogleButton = ({ onClick, ...otherProps }) => (
  <div className="field_container">
    <button className="google_btn" onClick={onClick} {...otherProps}>
      <i className="fab fa-google"></i>Continue with Google
    </button>
  </div>
);
