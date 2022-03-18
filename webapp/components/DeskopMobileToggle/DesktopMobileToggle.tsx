import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { DesktopWindows, Smartphone } from '@mui/icons-material';
import PropTypes from 'prop-types';

export const DesktopMobileToggle = (props) => {
  const { onChange, state } = props;

  const handleChange = (e, v) => {
    onChange(v);
  };

  return (
    <ToggleButtonGroup size="small" value={state} exclusive={true} onChange={handleChange}>
      <ToggleButton value="desktop">
        <DesktopWindows sx={{ mr: 0.75 }} />{' '}
        <Typography sx={{ fontSize: '13px', fontWeight: 'medium', letterSpacing: '0.46px' }}> Desktop </Typography>
      </ToggleButton>
      <ToggleButton value="mobile">
        <Smartphone sx={{ mr: 0.75 }} />{' '}
        <Typography sx={{ fontSize: '13px', fontWeight: 'medium', letterSpacing: '0.46px' }}> Mobile </Typography>
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
DesktopMobileToggle.propTypes = {
  state: PropTypes.oneOf(['desktop', 'mobile']),
  onChange: PropTypes.func,
};
DesktopMobileToggle.defaultProps = {
  state: 'desktop',
  onChange: () => {},
};

export default DesktopMobileToggle;
