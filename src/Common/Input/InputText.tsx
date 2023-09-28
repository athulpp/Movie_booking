import { TextField, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { Controller } from "react-hook-form";
import "../../Assests/styles.scss";

interface LayoutProps {
  control: any;
  defaultValue?: any;
  name?: any;
  className?: any;
  type?: any;
  error?: any;
  label?: any;
  labelStyle?: React.CSSProperties;
}

const InputText = ({
  control,
  defaultValue,
  name,
  className,
  type,
  error,
  label,
  labelStyle,
}: LayoutProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Use useEffect to focus on the input field when an error occurs
  useEffect(() => {
    if (error && inputRef.current) {
      inputRef.current.focus();
    }
  }, [error]);

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field }) => (
        <>
          <TextField
            {...field}
            inputRef={inputRef} // Assign the ref to the input field
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white", // Override the border color
                },
                "&:hover fieldset": {
                  borderColor: "white", // Override the border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white", // Override the border color on focus
                  outline: "none", // Remove the blue outline
                },
              },
            }}
            className={className}
            type={type}
            variant="outlined"
            InputLabelProps={{
              style: labelStyle,
            }}
    
            label={label}
            error={!!error}
            helperText={error?.message || ""}
          />
   {/* {inputRef&&error.message} */}
        </>
      )}
    />
  );
};

export default InputText;
