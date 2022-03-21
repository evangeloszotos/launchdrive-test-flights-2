import { Box, Grid, TextField } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

interface ColorTextFieldBoxProps {
  value: string;
  regex?: RegExp;
}
interface ColorTextFieldProps extends ColorTextFieldBoxProps {
  label: string;
  onChange: React.ChangeEventHandler<HTMLInputElement & { isValid: boolean }>;
}

/* ============
      Styles
   ============ */

const StyledBox = styled<React.FC<ColorTextFieldBoxProps>>(Box)((props) => {
  const { value, regex = /^#([0-9a-fA-F]{3}){1,2}$/ } = props;

  return {
    backgroundColor: value?.match(regex) ? value : '#000',
    width: '40px',
    height: '40px',
    borderRadius: '4px',
  };
});

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

export const ColorTextField: React.VoidFunctionComponent<ColorTextFieldProps> = (props) => {
  const { label, onChange, value, regex = /^#([0-9a-fA-F]{3}){1,2}$/, ...other } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isValid = !!event.target.value.match(regex);

    const newEventResult: React.ChangeEvent<HTMLInputElement & { isValid: boolean }> = {
      ...event,
      target: {
        ...event.target,
        isValid,
      },
      currentTarget: {
        ...event.currentTarget,
        isValid,
      },
    };

    onChange(newEventResult);
  };

  return (
    <StyledGrid {...other} container={true}>
      <StyledTextField label={label} value={value} onChange={handleChange} size="small" />
      <StyledBox value={value} regex={regex} />
    </StyledGrid>
  );
};

export default ColorTextField;
