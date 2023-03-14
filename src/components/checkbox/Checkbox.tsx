import React from "react";
import styles from "./Checkbox.module.scss";
// @ts-ignore
import { ReactComponent as Close } from "../../assets/close.svg";

interface CheckboxProps {
  disabled?: boolean;
  label?: string;
  checked?: boolean;
  onClick?: React.HTMLAttributes<HTMLInputElement>["onChange"];
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, disabled, label, onClick }) => {
  return (
    <label className={styles.containerLabel}>
      <input className={styles.checkbox} type="checkbox" checked={checked} disabled={disabled} onClick={onClick}>
      </input>
      {label}
    </label>
  );
};

export default Checkbox;
