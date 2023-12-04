import Button
    from '../../../shared/button'

const MST: React.FC = () => {

    const onClickHandler = () => {

    }

    return (
        <div className="menu-item" data-testid='MST'>
            <Button
                label='Build MST by'
                testid='ai-tags-button'
                onClick={onClickHandler}
                className='menu-button-right'
            />
            <input className='data-input right-input' placeholder='tag'></input>
        </div>
    )
}

export default MST