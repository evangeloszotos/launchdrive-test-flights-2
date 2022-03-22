import { Box, Grid, TextField } from '@mui/material';
import { styled } from '@mui/system';
import React, { useEffect } from 'react';

/* ============
      Styles
   ============ */

interface ColorTextFieldBoxProps {
  value: string;
  regex?: RegExp;
}
interface ColorTextFieldProps extends ColorTextFieldBoxProps {
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, hexCodeValid: boolean) => void;
}

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
  const hexCodeValid = regex.test(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event, hexCodeValid);
  };

  /**
   * This is a hack to live update
   * Comment out and it wont be up to date
   */
  useEffect(() => {
    onChange({ target: { value } }, hexCodeValid);
  });

  return (
    <StyledGrid {...other} container={true}>
      <StyledTextField label={label} value={value} onChange={handleChange} size="small" />
      <ColorBox sx={{ bgcolor: hexCodeValid ? value : '#000' }} />
    </StyledGrid>
  );
};

export default ColorTextField;
