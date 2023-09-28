import { InputLabel, TextField } from "@mui/material";

import { Controller } from "react-hook-form";
import '../../Assests/styles.scss';

interface LayoutProps {
  control: any;
  defaultValue?: any;
  name?: any;
  className?: any;
  type?: any;
  error?: any;
  label?:any;
  labelStyle?: React.CSSProperties
 
}

const InputText = ({
  control,
  defaultValue,
  name,
  className,
  type,
  error,
  label,
  labelStyle
}: LayoutProps) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field }) => (
        <>
        <TextField
          {...field}
          sx={{
            // '& .MuiInputBase-root.MuiFilledInput-root': {
            //   backgroundColor: 'lightblue',
            //   borderRadius: '8px',
            // },
            '& .MuiInputBase-root.MuiFilledInput-underline:before': {
              borderBottom: '2px solid white', 
            },
            '& .MuiInputBase-root.MuiFilledInput-underline:after': {
              borderBottom: '2px solid white',
            },
          }}
          className={className}
          type={type}
          variant="filled"
          InputLabelProps={{
            style: labelStyle,
          }}
          label={label}
          error={!!error} 
          helperText={error?.message || ""} 

        />
        </>
      )}
    />
  );
};

export default InputText;
