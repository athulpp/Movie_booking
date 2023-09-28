import { TextField } from "@mui/material";
import React, { useRef, useEffect } from "react";
import { Controller } from "react-hook-form";
import '../../Assests/styles.scss';

interface LayoutProps {
  control?: any;
  defaultValue?: any;
  name?: any;
  className?: any;
  type?: any;
  error?: any;
}

const InputText = ({
  control,
  defaultValue,
  name,
  className,
  type,
  error,
}: LayoutProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (error && inputRef.current) {
      inputRef.current?.focus();
    }
  }, [error]);
  return (
    <>
      <Controller
        control={control}
        defaultValue={defaultValue}
        name={name}
        render={({ field }) => (
          <>
           <TextField
           className="input_textField"
           {...field}
           />
          </>
        )}
      />
    </>
  );
};

export default InputText;