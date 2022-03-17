import { Box } from '@mui/material';
import PropTypes from 'prop-types';

export const SideBarText = (props) => {
  const { label } = props;

  return (
    <Box
      sx={{
        'font-size': '10px',
        'line-height': '12px',
        pt: 0.5,
        'text-align': 'center',
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
