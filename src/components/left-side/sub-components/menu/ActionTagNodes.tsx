import Button
 from '../../../shared/button';

const TagNodes: React.FC = () => {

    const onClickHandler = () => {

    }

  return (
    <div className="menu-item">
      <Button label='AI classified tags' testid='ai-tags-button' onClick={onClickHandler}/>
    </div>
  );
};

export default TagNodes