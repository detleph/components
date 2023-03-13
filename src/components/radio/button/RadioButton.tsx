import styles from "./RadioButton.module.scss";
import { useState } from "react";

interface RadioButtonProps {
    disabled?: boolean;
    value?: string;
    onClick: React.HTMLAttributes<HTMLInputElement>["onChange"];
    label: string;
    checked?: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({ onClick, checked, disabled, label, value }) => {
    return (
        <>
            <label className={styles.containerLabel}>
                <input className={styles.radioButton} type="radio" value={value} checked={checked} disabled={disabled} onClick={onClick} />
                {label}
            </label>
        </>
    )
}

export default RadioButton;
