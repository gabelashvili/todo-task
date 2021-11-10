import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle } from '@fortawesome/fontawesome-free-solid';
import {
  Div, Input, ErrorTextWrapper, ErrorText, TriangleWrapper, Triangle,
} from './styles';

const TextInput = ({
  value, onChange, icon, isValid, onFocus, isFocused, errorMsg, placeHolder, type = 'text', defaultValue, disabled,
}) => (
  <Div>
    <Input
      disabled={disabled}
      isIconExist={icon}
      type={type}
      placeholder={placeHolder}
      defaultValue={defaultValue}
      value={value || undefined}
      onChange={onChange ? (e) => onChange(e) : undefined}
      onFocus={onFocus}
      isError={isFocused && !isValid}
      isValid={isFocused && isValid}
    />
    {isFocused && isValid
      ? <FontAwesomeIcon icon={faCheckCircle} color="green" size="lg" style={{ opacity: !isFocused && 0 }} />
      : <FontAwesomeIcon icon={faExclamationCircle} color="red" style={{ opacity: !isFocused && 0 }} />}
    {icon && <FontAwesomeIcon icon={icon} color="grey" size="lg" />}
    {isFocused && !isValid && (
      errorMsg && (
        <ErrorTextWrapper>
          <ErrorText>
            {errorMsg}
            <TriangleWrapper>
              <Triangle />
            </TriangleWrapper>
          </ErrorText>
        </ErrorTextWrapper>
      )
    )}
  </Div>
);

export default TextInput;
