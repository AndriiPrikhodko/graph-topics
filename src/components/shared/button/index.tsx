import './Button.css';
type Props = {
    label: string
    'testid': string
    onClick: React.MouseEventHandler<HTMLButtonElement>
    className?: string
}

const Button: React.FC<Props> = ({ label , onClick, testid, className=''}) => {
  return (
      <button 
        className={className? `standard-button ${className}` : 'standard-button'}
        onClick = {onClick} 
        data-testid={testid}
      >
        {label}
      </button>
  );
};

export default Button