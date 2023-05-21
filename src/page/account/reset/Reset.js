import React from 'react';
import '../account.css';
import resetImg from '../../../assets/forgot.svg';
import { CiCircleRemove } from 'react-icons/ci';
const Reset = ({ onLogin }) => {
  return (
    <div className="main-container --flex-center">
      <div className="form-container reset">
        <form className="--form-control">
          <h2 className="--color-danger --text-center">Reset</h2>
          <input type="email" className="--width-100" placeholder="Email" />

          <button className="--btn --btn-primary --btn-block">
            Reset password
          </button>

          <span className="--text-sm --block">We will send u a link</span>
          <div className="close" onClick={onLogin}>
            <CiCircleRemove color="red" />
          </div>
        </form>
      </div>
      <div className="img-container reset">
        <img src={resetImg} alt="login" />
      </div>
    </div>
  );
};

export default Reset;
