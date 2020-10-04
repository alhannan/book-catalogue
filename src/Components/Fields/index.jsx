import React from "react";
// import { DropdownList } from "react-widgets";
import "./Fields.scss";

// export const renderDropdownList = ({
//   onChange,
//   data,
//   valueField,
//   textField,
//   placeholder,
//   value,
//   type,
//   label,
//   dropUp,
// }) => {
//   switch (type) {
//     case "label":
//       return (
//         <div className="label-dropdown">
//           <DropdownList
//             data={data}
//             valueField={valueField}
//             textField={textField}
//             onChange={onChange}
//             placeholder={placeholder}
//             value={value}
//             dropUp={dropUp && true}
//             valueComponent={({ item }) => (
//               <span className="flex-row">
//                 <p className="p2 tertiary-text">{label}:</p>
//                 {/* <p className="p2 primary-text">{item[textField]}</p> */}
//               </span>
//             )}
//           />
//         </div>
//       );
//     case "products":
//       return (
//         <div className={`simple-dropdown_products ${dropUp ? "dropdown-dropUp" : ""}`}>
//           <DropdownList
//             data={data}
//             valueField={valueField}
//             textField={textField}
//             onChange={onChange}
//             placeholder={placeholder}
//             value={value}
//             dropUp={dropUp && true}
//           />
//         </div>
//       );
//     default:
//       return (
//         <div className={`simple-dropdown ${dropUp ? "dropdown-dropUp" : ""}`}>
//           <DropdownList
//             data={data}
//             valueField={valueField}
//             textField={textField}
//             onChange={onChange}
//             placeholder={placeholder}
//             value={value}
//             dropUp={dropUp && true}
//           />
//         </div>
//       );
//   }
// };

export const RenderInput = ({
  placeholder,
  className,
  onChange,
  labelActive,
  autoComplete,
  value,
  type,
  name,
}) => (
  <div className="field_container">
    <label>{labelActive && name}</label>
    <input
      autoComplete={autoComplete}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
      value={value}
      type={type}
      name={name}
    />
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

export const renderIconInput = ({
  placeholder,
  className,
  onChange,
  autoComplete,
  value,
  type,
  iconName,
}) => (
  <div className="input-container">
    <input
      autoComplete={autoComplete}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
      value={value}
      type={type}
    />
    <div className={`icon ${iconName}`} />
  </div>
);
