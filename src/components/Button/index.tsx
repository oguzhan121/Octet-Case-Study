import React, { FunctionComponent } from 'react'

interface IButtonProps  {
    label: string;
}

const Button:FunctionComponent<IButtonProps> = (props) => {
    const {label} = props;
    return (
        <button type="submit" className="submit-button-primary">{label} <span></span></button>
    )
}


export default Button;
