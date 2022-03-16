import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { DesktopWindows, Smartphone } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function DesktopMobileToggle(props) {
  const { onChange, state, triggerOnChangeOnNullValue, handleStateInternally } = props;
  const [internalState, setInternalState] = useState(state);

  const handleChange = (e, v) => {
    if (triggerOnChangeOnNullValue || v !== null) {
      if (handleStateInternally && v !== null) setInternalState(v);
      onChange(v);
    }
  };

  return (
    <ToggleButtonGroup
      size="small"
      value={handleStateInternally ? internalState : state}
      exclusive={true}
      onChange={handleChange}
    >
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
}
DesktopMobileToggle.propTypes = {
  state: PropTypes.oneOf(['desktop', 'mobile']),
  onChange: PropTypes.func,
  triggerOnChangeOnNullValue: PropTypes.bool,
  handleStateInternally: PropTypes.bool,
};
DesktopMobileToggle.defaultProps = {
  state: 'desktop',
  onChange: () => {},
  triggerOnChangeOnNullValue: false,
  handleStateInternally: false,
};
