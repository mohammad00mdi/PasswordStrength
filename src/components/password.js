import React, { useState } from "react";
import { Input, Progress } from "antd";

const Password = () => {
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    const strength = calculatePasswordStrength(value);
    setPasswordStrength(strength);
  };

  const calculatePasswordStrength = (value) => {
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasCapitalLetter = /[A-Z]/.test(value);

    if (hasSpecialChar && hasNumber && hasCapitalLetter) {
      return 100;
    } else {
      return 0;
    }
  };

  return (
    <>
      <div style={{ width: "50%", margin: "30px auto", direction:"rtl" }}>
        <Input.Password
          placeholder="پسورد خود را وارد کنید"
          value={password}
          onChange={handlePasswordChange}
        />
        <Progress percent={passwordStrength} showInfo={false} />
        {passwordStrength === 100 ? (
          <p style={{ color: "green" }}>پسورد قوی است</p>
        ) : (
          <p style={{ color: "red" }}>پسورد ضعیف است</p>
        )}
      </div>
    </>
  );
};

export default Password;