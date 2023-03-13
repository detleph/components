import React, { useState } from "react";

type RadioButtonGroupContextType = [value: string | undefined, disabled: boolean, dispatch: (value: string) => unknown];

export const RadioButtonGroupContext = React.createContext<RadioButtonGroupContextType>(null!);

interface RadioButtonGroupProps {
  disabled?: boolean;
  value?: string; // For controlled groups
  defaultValue?: string; // For uncontrolled group
  onSelection?: (value: string) => unknown;
  children: React.ReactNode;
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  defaultValue,
  disabled,
  onSelection,
  value,
  children,
}) => {
  const [controlledValue, setControlledValue] = useState(defaultValue);

  const dispatcher = (value: string) => {
    setControlledValue(value);
    onSelection?.(value);
  };

  return (
    <div>
      <RadioButtonGroupContext.Provider value={[value ?? controlledValue, disabled ?? false, dispatcher]}>
        {children}
      </RadioButtonGroupContext.Provider>
    </div>
  );
};

export default RadioButtonGroup;
