import { Box, Grid, TextField } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

interface ColorTextFieldBoxProps {
  value: string;
  regex?: RegExp;
}
interface ColorTextFieldProps extends ColorTextFieldBoxProps {
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, hexCodeValid: boolean) => void;
}

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

const validHexRegex = /^#([0-9a-fA-F]{3}){1,2}$/;
export const ColorTextField: React.VoidFunctionComponent<ColorTextFieldProps> = (props) => {
  const { label, onChange, value, regex = validHexRegex, ...other } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event, regex.test(event.target.value));
  };

  return (
    <StyledGrid {...other} container={true}>
      <StyledTextField label={label} value={value} onChange={handleChange} size="small" />
      <ColorBox sx={{ bgcolor: regex.test(value) ? value : '#000' }} />
    </StyledGrid>
  );
};

export default ColorTextField;
