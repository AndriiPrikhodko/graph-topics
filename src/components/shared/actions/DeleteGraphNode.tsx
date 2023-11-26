import './Icon.css';
import React from 'react';
import { FaMinusCircle } from "react-icons/fa"

type Props = {
    label: string
    onClick: React.MouseEventHandler
    className?: string
}

const DeleteGraphNode: React.FC<Props> = ({ label , onClick: onClickHandler}) => {
  return (
    <div className='icon-encircle'>
        <FaMinusCircle 
            onClick={onClickHandler}
            className='action-icon'
            id='icon-addGraphEdge'
            title={`${label}`} 
            />
    </div>
  );
};

export default DeleteGraphNode