import { Button } from '@mui/material'
import React from 'react'
interface LayoutProps{
variant?:any;
color?:any;
type?:any;
size?:any;
onClick?:()=>void,
buttonName?:any
customStyle?:any;
className?:any

}
const ButtonComp = ({variant,color,type,size,onClick,buttonName,customStyle,className}:LayoutProps) => {
  return (
   <Button
   className={className}
   variant={variant??'contained'}
   color={color??"primary"}
   type={type??"submit"}
   size={size??'large'}
   onClick={onClick}
   style={customStyle} 
   >
{buttonName}
   </Button>
  )
}

export default ButtonComp;