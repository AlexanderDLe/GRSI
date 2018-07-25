import React from 'react';
import { FormGroup, Input } from 'reactstrap';
import classnames from 'classnames';

export default props => {
  const {
    value,
    error,
    type,
    name,
    placeholder,
    inputIcon,
    onChange,
    rows
  } = props;

  return (
    <FormGroup className="input-group input-group-lg mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className={inputIcon} />
        </span>
      </div>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        rows={rows}
        className={classnames('form-control', {
          'is-invalid': error
        })}
      />
      {error && <div className="invalid-feedback lead">{error}</div>}
    </FormGroup>
  );
};
