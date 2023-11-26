import './Icon.css';
import React from 'react';
import { FaLink } from "react-icons/fa";

type Props = {
    label: string
    onClick: React.MouseEventHandler
    className?: string
}

const Button: React.FC<Props> = ({ label , onClick: onClickHandler}) => {
  return (
    <div className='icon-encircle'>
        <FaLink 
            onClick={onClickHandler}
            className='action-icon'
            id='icon-addGraphEdge'
            title={`${label}`} 
            />
    </div>
  );
};

export default Button