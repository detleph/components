import styles from "./RadioButton.module.scss";
import { useContext, useState } from "react";
import { RadioButtonGroupContext } from "../group/RadioButtonGroup";

interface RadioButtonProps {
  disabled?: boolean;
  value: string;
  onClick?: React.HTMLAttributes<HTMLInputElement>["onChange"];
  label: string;
  checked?: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({ onClick, checked, disabled, label, value }) => {
  const parentGroupContext = useContext(RadioButtonGroupContext);

  const localOnClick: React.FormEventHandler<HTMLInputElement> = (event) => {
    onClick?.(event);
    parentGroupContext?.[2](value);
  }

  return (
    <>
      <label className={styles.containerLabel}>
        <input
          className={styles.radioButton}
          type="radio"
          value={value}
          checked={parentGroupContext ? parentGroupContext[0] === value : checked}
          disabled={parentGroupContext?.[1] ?? disabled}
          onClick={localOnClick}
        />
        {label}
      </label>
    </>
  );
};

export default RadioButton;
