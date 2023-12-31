import './Header.css'
import logo from '../../../../assets/graph.svg'
import Button from '../../../shared/button'
import useLogout from '../../../../helpers/hooks/logout'

const Header = () => {
    const logoutHandler = useLogout()

    return (
        <div className="header">
            <div className='logout-button'>
                <Button label='Logout' onClick={logoutHandler} testid='logout'/>
            </div>
            <div className="logo-title">
                <h3 className="title unselectable">
                    <span>Mind</span> Graph
                </h3>
                <img src={logo} alt="Company Logo" />
            </div>
            <p>Follow the <span>origins</span> of your <span>ideas</span>...</p>
        </div>
    )
}

export default Header