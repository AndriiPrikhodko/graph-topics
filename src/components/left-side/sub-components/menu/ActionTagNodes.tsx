import Button
 from '../../../shared/button';

const TagNodes: React.FC = () => {

    const onClickHandler = () => {

    }

  return (
    <div className="menu-item">
      <Button 
        label='AI tags' 
        testid='ai-tags-button' 
        onClick={onClickHandler}
        className='menu-button-right'
        />
      <input className='data-input right-input' placeholder='limit tag class number'></input>
    </div>
  );
};

export default TagNodes