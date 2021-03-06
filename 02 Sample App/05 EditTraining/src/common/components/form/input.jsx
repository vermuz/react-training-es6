import * as React from 'react';

export const InputComponent = (props) => {
  return (
    <div className={`form-group ${props.className}`}>
      <label htmlFor={props.name}>
        {props.label}
      </label>
      <input
        type={props.type}
        className="form-control"
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
      />
    </div>
  );
};

InputComponent.propTypes = {
  label: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
  className: React.PropTypes.string,
  disabled: React.PropTypes.bool,
}
