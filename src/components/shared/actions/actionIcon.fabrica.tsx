import './Icon.css'
import React from 'react'
import { FaLink } from "react-icons/fa"
import { AiTwotoneStop } from "react-icons/ai"
import { FaMinusCircle } from "react-icons/fa"
import { FaUnlink } from "react-icons/fa"
import { IconBaseProps } from 'react-icons'
import { SlActionUndo } from "react-icons/sl";
import { SlActionRedo } from "react-icons/sl";
interface IIconObject {
  [key: string]: React.FC<IconBaseProps & {
      onClick: React.MouseEventHandler
      selected? : boolean
  }>
}

const iconFacade: IIconObject= {
    "addGraphEdge": FaLink,
    "removeGraphEdge": FaUnlink,
    "cancelIcon": AiTwotoneStop,
    "deleteGraphNode": FaMinusCircle,
    "undo": SlActionUndo,
    "redo": SlActionRedo
}

type Props = {
    iconName: "addGraphEdge" | "removeGraphEdge" | "deleteGraphNode" | "cancelIcon"
    | "undo" | "redo"
    label: string
    onClick: React.MouseEventHandler
    className?: string
    selected? : boolean
}

const IconFabrica: React.FC<Props> = ({
  iconName,
  label,
  onClick: onClickHandler,
  selected = false
}) => {
  const IconFC = iconFacade[iconName]
  return (
    <div className='icon-encircle' >
        <IconFC onClick={onClickHandler} title={label} selected={selected} className='action-icon'/>
    </div>
  );
};

export default IconFabrica