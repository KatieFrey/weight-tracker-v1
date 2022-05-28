import { FormControl, OutlinedInput, InputAdornment, FormHelperText, Button } from '@mui/material';


const WeightInput = ({weight, handleChange, handleSubmit}) => {

    return (
        <div style={{flexDirection: "row"}}>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <OutlinedInput
                id="outlined-adornment-weight"
                value={weight}
                onChange={handleChange}
                endAdornment={<InputAdornment position="end">lb</InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                'aria-label': 'weight',
                }}
            />
            <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
            
            </FormControl>
            <div>
                <Button onClick={handleSubmit} variant="outlined">Submit</Button>
            </div>
            <br />
            
        </div>
    )


}

export default WeightInput;