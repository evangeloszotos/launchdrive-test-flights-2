import { Box, Grid, TextField, TextFieldProps } from '@mui/material';
import { BoxProps, styled } from '@mui/system';
import React from 'react';

/* ============
      Styles
   ============ */

const ColorBox = styled(Box)`
  width: 40px;
  height: 40px;
  border-radius: 4px;
`;

const StyledGrid = styled(Grid)`
  width: 100%;
  height: 100%;

  & .MuiTextField-root {
    margin-right: 0.625rem;
  }
`;

const StyledTextField = styled(TextField)`
  margin-right: 0.625rem;
`;

/* =============
     Component
   ============= */

interface ColorTextFieldProps {
  // regex: RegExp;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, hexCodeValid: boolean) => void;
  value: string;
  label: string;
  regex?: RegExp;
}

const validHexRegex = /^#([0-9a-fA-F]{3}){1,2}$/;
// const defaultProps = {
//   regex: validHexRegex,
//   onChange: (e: React.ChangeEvent<HTMLInputElement>, hexCodeValid: boolean) => {},
// };

export const ColorTextField: React.VoidFunctionComponent<ColorTextFieldProps> = (props) => {
  const {
    label,
    onChange = (e: React.ChangeEvent<HTMLInputElement>, hexCodeValid: boolean) => {},
    regex = validHexRegex,
    value,
  } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event, regex.test(event.target.value));
  };

  return (
    <StyledGrid container={true}>
      <StyledTextField label={label} value={value} onChange={handleChange} size="small" />
      <ColorBox sx={{ bgcolor: regex.test(value) ? value : '#000' }} />
    </StyledGrid>
  );
};

// ColorTextField.defaultProps = defaultProps;

export default ColorTextField;
