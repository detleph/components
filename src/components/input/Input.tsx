import React, { useRef, useState } from "react";
import uniqueId from "lodash.uniqueid";

import styles from "./Input.module.scss";
import { ReactComponent } from "../../assets/svgr-custom";

interface InputProps {
  value: string;
  onChange?: React.HTMLAttributes<HTMLInputElement>["onChange"];
  placeholder?: string;
  label?: string;
  icon?: typeof ReactComponent;
}

const Input: React.FC<InputProps> = ({ value, onChange, placeholder, label, icon: Icon }) => {
  const [id] = useState(uniqueId());
  const input = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.inputContainer} onClick={() => input.current?.focus()}>
      {Icon && (
        <span className={styles.iconContainer}>
          <Icon />
        </span>
      )}

      <div className={styles.innerInput}>
        <input type="text" id={id} className={styles.input} placeholder={label ? " " : placeholder} ref={input} />
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      </div>
    </div>
  );
};

export default Input;
