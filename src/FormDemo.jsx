import { TextField } from "@mui/material"
import { useState } from "react"
import {Slider, Stack, Box} from "@mui/material"
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
export default function FormDemo() {
    const[name, setname] = useState('')
    const [volume, setVolume] = useState(50)

    const volumeChange = (e, newValue) => {
        setVolume(newValue)
    }

    const updateName = (e) => {
        setname(e.target.value)
    }
    return (
        
        <Box sx = {{border: 'solid 1px black', p: 10}}>
            <h1>name is: {name}</h1>
            <TextField id="outlined-basic" label="Outlined" variant="outlined"
            onChange={updateName} />

        <h3>Volume is: {volume}</h3>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <VolumeDown />
            <Slider aria-label="Volume" value={volume} onChange={volumeChange} />
            <VolumeUp />
        </Stack>
        </Box>
    )
}