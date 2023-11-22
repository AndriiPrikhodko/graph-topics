import './Button.css';
type Props = {
    label: string
    'testid': string
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<Props> = ({ label , onClick, testid}) => {
  return (
      <button 
        className='standard-button' 
        onClick = {onClick} 
        data-testid={testid}
      >
        {label}
      </button>
  );
};

export default Button