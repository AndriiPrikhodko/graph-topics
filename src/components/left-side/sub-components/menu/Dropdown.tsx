import React, { useState } from "react"
import { type Action } from './ActionList'



const Dropdown: React.FC<{trigger: JSX.Element&IFuncProps, menu: JSX.Element[]}> = 
    ({ trigger, menu }): JSX.Element => {
    const [open, setOpen] = useState<boolean>(false)

    const handleOpen = () => {
        setOpen(!open)
    }
    
    return <div className="dropdown">
                {React.cloneElement(trigger, {
                    onClick: handleOpen
                })}
                {open?
                (<ul className="menu">
                    {menu.map((menuItem, index) => (
                        <li key={index} className = "menu-item" data-testid='graph-list'>
                            {React.cloneElement(menuItem, {
                                onClick: () => {
                                    menuItem.props.onClick(menuItem.props)
                                    setOpen(false)
                                }
                            })}
                        </li>
                    ))}
                    </ul>): null
                }
        </div>
}

export default Dropdown