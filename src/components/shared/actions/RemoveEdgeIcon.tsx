import './Icon.css';
import React from 'react';
import { FaUnlink } from "react-icons/fa";

type Props = {
    label: string
    onClick: React.MouseEventHandler
    className?: string
}

const RemoveEdgeIcon: React.FC<Props> = ({ label , onClick: onClickHandler}) => {
  return (
    <div className='icon-encircle'>
        <FaUnlink 
            onClick={onClickHandler}
            className='action-icon'
            id='icon-addGraphEdge'
            title={`${label}`} 
            />
    </div>
  );
};

export default RemoveEdgeIcon