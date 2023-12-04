import './LeftView.css'
import Header from './sub-components/header/Header'
import GraphLoad from './sub-components/menu/GraphLoad'
import ActionMenu from './sub-components/menu/ActionMenu'
import Footer from './sub-components/footer/Footer'
import TagNodes from './sub-components/menu/ActionTagNodes'
import MST from './sub-components/menu/MSTbyTag'
import ToggleStatistics
    from './sub-components/menu/ToggleStatistics'

const LeftView: React.FC = () => {
    return (
        <div className="split-small left" data-testid="left-view">
            <Header />
            <ActionMenu />
            <TagNodes />
            <MST />
            <ToggleStatistics />
            <GraphLoad />
            <Footer />
        </div>
    )
}

export default LeftView