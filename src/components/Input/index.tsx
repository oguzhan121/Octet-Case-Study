import React from 'react'
import { FunctionComponent } from "react";

interface InputProps  {
    label: string;
    type:string;
}

const Input = (props:InputProps) => {
    const {label,type} = props;
    return (
        <input type={type} className="form-input" placeholder={label} />
    )
}


export default Input;