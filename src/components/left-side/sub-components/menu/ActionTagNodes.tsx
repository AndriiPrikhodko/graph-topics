import Button
 from '../../../shared/button';

const TagNodes: React.FC = () => {

    const onClickHandler = () => {

    }

  return (
    <div className="menu-item">
      <Button label='AI classified tags' testid='ai-tags-button' onClick={onClickHandler}/>
      <input className='data-input' placeholder='limit'></input>
    </div>
  );
};

export default TagNodes