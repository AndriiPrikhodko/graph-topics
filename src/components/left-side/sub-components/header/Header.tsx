import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="logo-title">
                <h3 className="title unselectable">
                    <span>Mind</span> Graph
                </h3>
                <img src={'../../../../graph.svg'} alt="Company Logo" />
            </div>
            <p>Follow the origins of your ideas.</p>
        </div>
    )
}

export default Header