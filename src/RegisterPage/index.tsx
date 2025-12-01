import React from "react";

import "./style.scss";

export const RegisterPage: React.FC = () => {
  return (
    <div className="register">
      <h1 className="register__title">Регистрация</h1>
      <form className="register__form">
        <label htmlFor="email">Эл.Почта</label>
        <input className="register__input" id="email" name="email" required />

        <label htmlFor="password">Пароль (мин. 6 символов)</label>
        <input
          className="register__input"
          id="password"
          name="password"
          type="password"
          required
        />

        <label htmlFor="confirmPassword">Подтвердите пароль</label>
        <input
          className="register__input"
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          required
        />
        <button className="register__btn">Готово</button>
      </form>
    </div>
  );
};
