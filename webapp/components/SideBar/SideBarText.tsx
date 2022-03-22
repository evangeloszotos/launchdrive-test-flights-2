import { Box } from '@mui/material';
import PropTypes from 'prop-types';

export const SideBarText = (props) => {
  const { label } = props;

  return (
    <Box
      sx={{
        fontSize: '10px',
        lineHeight: '12px',
        pt: 0.5,
        textAlign: 'center',
        userSelect: 'none',
      }}
    >
      {label}
    </Box>
  );
};
SideBarText.propTypes = {
  label: PropTypes.string,
};
SideBarText.defaultProps = {
  label: '',
};

export default SideBarText;
