import './Icon.css';
import React from 'react';
import { AiTwotoneStop } from "react-icons/ai";

type Props = {
    label: string
    onClick: React.MouseEventHandler
    className?: string
}

const CancelIcon: React.FC<Props> = ({ label , onClick: onClickHandler}) => {
  return (
    <div className='icon-encircle'>
        <AiTwotoneStop 
            onClick={onClickHandler}
            className='action-icon'
            id='icon-addGraphEdge'
            title={`${label}`} 
            />
    </div>
  );
};

export default CancelIcon