import { Textarea } from './styles';

const TextareaComponent = ({ placeholder, value, onChange }) => (
  <Textarea placeholder={placeholder} value={value || ''} onChange={onChange} />
);

export default TextareaComponent;
