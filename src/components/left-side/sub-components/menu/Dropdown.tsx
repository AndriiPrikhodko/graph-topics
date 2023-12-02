import React, { useState } from "react"

const Dropdown: React.FC<{trigger: JSX.Element & IFuncProps, menu: JSX.Element[]}> = 
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
                (<ul className="menu" data-testid="dropdown-content">
                    {menu.map((menuItem, index) => (
                        <li key={index} className = "dropdown-item" data-testid={`dropdown-item-${index}`}>
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