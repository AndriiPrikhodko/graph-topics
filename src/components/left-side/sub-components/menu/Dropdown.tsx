import React, { useState, useRef, useEffect } from 'react'

const Dropdown: React.FC<{trigger: JSX.Element & IFuncProps, menu: JSX.Element[]}> =
    ({ trigger, menu }): JSX.Element => {
        const [open, setOpen] = useState<boolean>(false)
        let dropdownRef = useRef(null)

        const handleOpen = () => {
            setOpen(true)
        }

        const handleClickOutside = (event: MouseEvent) => {
            const current = dropdownRef.current as null |
         object & {contains(other: Node | null): boolean}
            if (current !== null && current.contains(event.target as Node)) {
                setOpen(true)
            }
            else setOpen(false)
        }

        useEffect(() => {
            document.addEventListener('mouseup', handleClickOutside)

            return () => {
                document.removeEventListener('mouseup', handleClickOutside)
            }
        }, [])

        return <div ref={dropdownRef} className="dropdown">
            {React.cloneElement(trigger, {
                onClick: handleOpen
            })}
            {open?
                (<ul className="menu" data-testid="dropdown-content">
                    {menu.map((menuItem, index) => (
                        <li  key={index} className = "dropdown-item" data-testid={`dropdown-item-${index}`}>
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