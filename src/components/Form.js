import React from 'react'
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';


function Form() {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),

      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }));

  const formik = useFormik({
    initialValues: {
      name: '',
      age: '',
      gender: '',
      homeAnimals: '',
      eyeColor: ''
    },
    onSubmit: values => {
      console.log('Form data', values);
    }
  });

  const handleClear = () => {
    formik.resetForm();
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>

        <TextField 
          name="name"
          id="standard-basic" 
          label="Name" 
          variant="standard"
          onChange={formik.handleChange}
          value={formik.values.name}
          required
        />

      <div className="age">
      <FormControl variant="standard" sx={{ m: 3 }}>
        <InputLabel htmlFor="age">Age</InputLabel>
        <BootstrapInput 
          id="age" 
          type="number"
          as={TextField}
          inputProps={{ min: 18, max: 99 }}
          autoComplete='off'
          onChange={formik.handleChange}
          value={formik.values.age}
          required/>
      </FormControl>
      </div>

        <div className="gender">
         <FormControl>
            <FormLabel sx={{ m: 3 }} id="gender">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="gender"
              name="gender"
            >

              <FormControlLabel 
              name="gender"
              value="female" 
              control={<Radio />} 
              label="Female"
              onChange={formik.handleChange} 
              required
              />

              <FormControlLabel 
              name="gender"
              value="male" 
              control={<Radio />} 
              label="Male"
              onChange={formik.handleChange} 
              required
              />

            </RadioGroup>
          </FormControl>
        </div>

        <div className='homeAnimals'>
          <FormControl sx={{ m: 3 }} fullWidth>
            <InputLabel id="demo-simple-select-label">Home Animals</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formik.values.homeAnimals}
              name='homeAnimals'
              label="homeAnimals"
              onChange={formik.handleChange}
              required
            >
              <MenuItem value="dog">Dog</MenuItem>
              <MenuItem value="cat">Cat</MenuItem>
              <MenuItem value="birds">Birds</MenuItem>
            </Select>
          </FormControl>
        </div>
        <br></br>

        <div className='eyeColor'>
        <FormControl sx={{ m: 3 }} fullWidth>
            <InputLabel id="demo-simple-select-label">Eye Color</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formik.values.eyeColor}
              name='eyeColor'
              label="eyeColor"
              onChange={formik.handleChange}
              required
            >
              <MenuItem value="brown">Brown</MenuItem>
              <MenuItem value="green">Green</MenuItem>
              <MenuItem value="blue">Blue</MenuItem>
            </Select>
          </FormControl>
        </div>
        <br></br>

        <div className='buttons'>
          <ButtonGroup variant="text" aria-label="Basic button group">
            <Button type="submit">Submit</Button>
            <Button type="reset" onClick={handleClear}>Clean</Button>
          </ButtonGroup>
        </div>

      </form>
    </div>
  )
}

export default Form;