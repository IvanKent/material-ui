import Switch from '@mui/material/Switch';
import { FormGroup, FormControlLabel } from '@mui/material';
const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function BasicSwitches() {
  return (
    <div>
      <Switch {...label} defaultChecked />
      <Switch {...label} />
      <Switch {...label} disabled defaultChecked />
      <Switch {...label} disabled />

      <FormGroup>
      <FormControlLabel control={<Switch defaultChecked />} label="Label" />
      <FormControlLabel required control={<Switch />} label="Required" />
      <FormControlLabel disabled control={<Switch />} label="Disabled" />
    </FormGroup>

    <Switch {...label} defaultChecked />
    <Switch {...label} defaultChecked color="secondary" />
    <Switch {...label} defaultChecked color="warning" />
    <Switch {...label} defaultChecked color="default" />
    </div>
  );
}
