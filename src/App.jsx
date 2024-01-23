import './App.css'
import Button from '@mui/material/Button';
import AlarmIcon from '@mui/icons-material/Alarm';
import { IconButton, Switch} from '@mui/material';
import RatingDemo from './RatingDemo';
import FormDemo from './FormDemo';
import Navbar from './Navbar';
import SwitchDemo from './SwitchDemo'
function App() {
  return (
    <div>
      {/* <Button variant="text">Text</Button>
      <Button variant="contained" onClick={() => {alert('hello')}}>Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="contained" 
      color='success'
      size='small'
      >Contained</Button>
      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
      <RatingDemo/> */}
      {/* <Navbar/>
      <FormDemo/> */}
      <SwitchDemo/>
    </div>
  )
}

export default App
