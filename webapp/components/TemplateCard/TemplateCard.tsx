import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

interface TemplateCardProps {
  templatePreviewImage: string;
  headerText: string;
  bodyText: string;
  chips: Array<string>;
  'onClick:select': (event: React.MouseEvent) => string;
  'onClick:preview': (event: React.MouseEvent) => void;
}

const StyledBox = styled<React.FC<TemplateCardProps>>(Box)((props) => {
  const { propName1 = 'default', propName2 = 42 } = props;

  return {
    color: 'red',
  };
});

/*
const StyledBox = styled(Box)`
  color: red;
`;
*/

export const TemplateCard: React.FC<TemplateCardProps> = (props) => {
  const {
    children,
    propName1 = 'default',
    propName2 = 42,
    propName3,
    propName4,
    propName5,
    propName6,
    propName7,
    propName8,
    propName9,
    ...other
  } = props;

  return <StyledBox {...props}> {children} </StyledBox>;
};

export default TemplateCard;
