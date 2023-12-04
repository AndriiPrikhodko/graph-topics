import './Icon.css'
import React from 'react'
import { FaLink } from 'react-icons/fa'
import { AiTwotoneStop } from 'react-icons/ai'
import { FaMinusCircle } from 'react-icons/fa'
import { IconBaseProps } from 'react-icons'
import { IoArrowRedoSharp } from 'react-icons/io5'
import { IoArrowUndoSharp } from 'react-icons/io5'
import { BiLogOutCircle } from 'react-icons/bi'
import { PiGraphBold } from 'react-icons/pi'
import { SlGraph } from 'react-icons/sl'
import { RiEqualizerFill } from 'react-icons/ri'
import { TbTournament } from 'react-icons/tb'
import { TbLinkOff } from 'react-icons/tb'
import { BsVectorPen } from 'react-icons/bs'

interface IIconObject {
  [key: string]: React.FC<IconBaseProps & {
      selected? : boolean
  }>
}

const iconFacade: IIconObject= {
    'addGraphEdge': FaLink,
    'removeGraphEdge': TbLinkOff,
    'cancelIcon': AiTwotoneStop,
    'deleteGraphNode': FaMinusCircle,
    'undo': IoArrowUndoSharp,
    'redo': IoArrowRedoSharp,
    'logout': BiLogOutCircle,
    'from': PiGraphBold,
    'chain': SlGraph,
    'bijection': RiEqualizerFill,
    'into': TbTournament,
    'editNode': BsVectorPen
}

type Props = {
    iconName: 'addGraphEdge' | 'removeGraphEdge'
    | 'deleteGraphNode' | 'cancelIcon'
    | 'undo' | 'redo' | 'logout' | 'from'
    | 'chain' | 'bijection' | 'into' | 'editNode'
    label: string
    onClick: React.MouseEventHandler
    className?: string
    selected? : boolean
}

const IconFactory: React.FC<Props> = ({
    iconName,
    label,
    onClick: onClickHandler,
    selected = false
}) => {
    const IconFC = iconFacade[iconName]
    return (
        <div className='icon-encircle' onClick={onClickHandler}>
            <IconFC title={label}
                color={selected? 'darkorange' : 'black'}
                data-testid={`icon-${iconName}`}
                className='action-icon'/>
        </div>
    )
}

export default IconFactory