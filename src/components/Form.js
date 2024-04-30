import React from 'react'
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Form() {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      age: '',
      sex: '',
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

        {/* <label htmlFor='name'>Name</label> */}
        {/* <input
          type='text'
          id='name'
          name='name'
          autoComplete='on'
          onChange={formik.handleChange}
          value={formik.values.name}
          required
        />  */}

        {/* <Stack spacing={2} direction="row"> */}
          <TextField 
          name="name"
          id="standard-basic" 
          label="Name" 
          variant="standard"
          required
          />
        {/* </Stack> */}

        {/* <label htmlFor='age'>Age</label>
        <input
          type='number'
          name='age'
          id='age'
          min='18'
          max='99'
          onChange={formik.handleChange}
          value={formik.values.age}
          required
        /> */}

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="age"
          value={age}
          label="Age"
          onChange={handleChange}
          required
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

        <div>
          <label required>Sex:
          
          <label htmlFor='male' className="inline">Male</label>
          <input
            type="radio"
            id='male'
            name="sex"
            onChange={formik.handleChange}
            value="male"
            required
          />

          <label htmlFor='fem' className="inline">Female</label>
          <input
            type="radio"
            id='fem'
            name="sex"
            onChange={formik.handleChange}
            value="female"
            required
          />
          </label>
        </div>

        <div className='homeAnimals'>
          <label htmlFor='homeAnimals'>Home animals:</label>
          <select
            id='homeAnimals'
            name='homeAnimals'
            onChange={formik.handleChange}
            value={formik.values.homeAnimals}
            required>
            <option placeholder="" />
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="birds">Birds</option>
            <option value="fish">Fish</option>
          </select>
        </div>
        <br></br>

        <label htmlFor='eyeColor'>Eye color:</label>
        <select
          id='eyeColor'
          name='eyeColor'
          onChange={formik.handleChange}
          value={formik.values.eyeColor}
          required>
          <option placeholder="" />
          <option value="brown">Brown</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
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