import './LeftView.css'
import Header from "./sub-components/header/Header"
import GraphLoad from "./sub-components/menu/GraphLoad"
import ActionMenu from './sub-components/menu/ActionMenu'
import Footer from './sub-components/footer/Footer'

const LeftView: React.FC = () => {
    return (
        <div className="split-small left" data-testid="left-view">
            <Header />
            <ActionMenu />
            <GraphLoad />
            <Footer />
        </div>
    )
}

export default LeftView