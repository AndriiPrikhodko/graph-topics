import './Select.css'

type Props = {
    label: string
    'testid': string
    onChange: React.ChangeEventHandler<HTMLSelectElement>
    className?: string
    children?: SVGAElement | Element | React.FC
    optionList: string []
}

const Select: React.FC<Props> = ({optionList, onChange, testid, label, className=''}) => {
  return (
      <select 
        onChange={onChange} 
        test-dataid={testid} 
        title={label}
        className={`select ${className}`}
        >
        {optionList.map((option, idx) => {
           return <option key={idx} value={option}>{option}</option>
        })}
      </select>
  );
};

export default Select