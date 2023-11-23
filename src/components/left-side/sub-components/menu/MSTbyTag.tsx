import Button
 from '../../../shared/button';

const MST: React.FC = () => {

    const onClickHandler = () => {

    }

  return (
    <div className="menu-item">
      <Button label='Build MST by' testid='ai-tags-button' onClick={onClickHandler}/>
      <input className='data-input' placeholder='tag'></input>
    </div>
  );
};

export default MST