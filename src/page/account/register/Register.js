import React from 'react'
import { useEffect, useState } from 'react';
import '../account.css';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { GoPrimitiveDot } from 'react-icons/go';
import { FaCheck } from 'react-icons/fa';
import validator from 'validator';
import registerImg from '../../../assets/register.svg'
const Register = ({ onLogin }) => {
  const [showPassword, setshowPassword] = useState(false);
  // afe function xoa return
  // () => {
  //   return
  // }

  // hien do manh mat khau
  const [showIndicator, setshowIndicator] = useState(false);

  const [passLetter, setpassLetter] = useState(false);
  const [passNumber, setpassNumber] = useState(false);
  const [passChar, setpassChar] = useState(false);
  const [passLength, setpassLength] = useState(false);
  const [passCompltete, setpassCompltete] = useState(false);

  //check email
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);

    if (!validator.isEmail(value)) {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }
    console.log(email);
    console.log(errorEmail);
  };


  const handleTogglePassword = () => {
    // dat bien trang thai state nguoc lai
    setshowPassword(!showPassword);
  };
  const handleshowIndicator = () => {
    setshowIndicator(true);
  };

  // state thay doi css do manh pass
  const [Pass, setPass] = useState('');
  const handlePasswordChangle = (e) => {
    setPass(e.target.value);
    console.log(Pass);
  };
  useEffect(() => {
    if (Pass.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      setpassLetter(true);
    } else {
      setpassLetter(false);
    }
    if (Pass.match(/([0-9])/)) {
      setpassNumber(true);
    } else {
      setpassNumber(false);
    }
    if (Pass.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
      setpassChar(true);
    } else {
      setpassChar(false);
    }
    if (Pass.length > 7) {
      setpassLength(true);
    } else {
      setpassLength(false);
    }
    if (passLetter && passChar && passLength && passNumber) {
      setpassCompltete(true);
    } else {
      setpassCompltete(false);
    }
  }, [Pass, passLetter, passChar, passLength, passNumber]);
  return (
    <div className="main-container --flex-center">
      <div className="form-container">
        <form className="--form-control">
          <h2 className="--color-danger --text-center">Register</h2>
          <input type="text" className="--width-100" placeholder="Username" />
          <input type="email" className="--width-100" placeholder="Email"
            value={email}
            onChange={(e) => handleEmailChange(e)}
           />
            {/* <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{errorEmail}</span> */}
           <p className={!errorEmail ? "hide-indicator" :"--text-sm pass-red" }>Email không hợp lệ</p>
          {/* Password */}
          <div className="password">
            <input
              type={showPassword ? 'text' : 'password'}
              className="--width-100"
              placeholder="Password"
              onFocus={handleshowIndicator}
              value={Pass}
              onChange={handlePasswordChangle}
            />
            <span className="icon" onClick={handleTogglePassword}>
              {/* <AiOutlineEye/> */}
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
          {/* Password */}
          <button
          onClick={() => alert("Thanh cong")}
            disabled={!passCompltete}
            // thuoc tinh html disabled=true tuc la ptu do k the tuong tac vs nguoi dung
            className={
              passCompltete
                ? '--btn --btn-primary --btn-block'
                : '--btn --btn-primary --btn-block btn-disabled'
            }
          >
            Register
          </button>
          <span className="--text-sm --block">
            Have an account?{' '}
            <a href="#" className="--text-sm" onClick={onLogin}>
              Login
            </a>
          </span>
          {/* do manh mat khau */}
          {/* ban dau moi thu deu an nhap password ms hien do manh */}
          <div className={showIndicator ? 'show-indicator' : 'hide-indicator'}>
            <ul className="--list-style-none --card --bg-grey --text-sm --p">
              <p className="--text-sm"> Password Strength Indicator</p>
              <li className={passLetter ? 'pass-green' : 'pass-red'}>
                <span className="--align-center">
                  {passLetter ? <FaCheck /> : <GoPrimitiveDot />}
                  &nbsp; Lowercase & Uppercase
                </span>
              </li>
              <li className={passNumber ? 'pass-green' : 'pass-red'}>
                <span className="--align-center">
                  {passNumber ? <FaCheck /> : <GoPrimitiveDot />}
                  &nbsp; Number (0-9)
                </span>
              </li>
              <li className={passChar ? 'pass-green' : 'pass-red'}>
                <span className="--align-center">
                  {passChar ? <FaCheck /> : <GoPrimitiveDot />}
                  &nbsp; Special Character (!@#$%)
                </span>
              </li>
              <li className={passLength ? 'pass-green' : 'pass-red'}>
                <span className="--align-center">
                  {passLength ? <FaCheck /> : <GoPrimitiveDot />}
                  &nbsp; A least 8 Character
                </span>
              </li>
            </ul>
          </div>
        </form>
      </div>
      <div className="img-container">
        <img src={registerImg} alt="login" />
      </div>
    </div>
  )
}

export default Register