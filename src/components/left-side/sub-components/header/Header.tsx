import './Header.css'
import logo from '../../../../assets/graph.svg'

const Header = () => {
    return (
        <div className="header">
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