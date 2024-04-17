import React from 'react'
import { useFormik } from 'formik';

function Form() {

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

        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          name='name'
          autoComplete='on'
          onChange={formik.handleChange}
          value={formik.values.name}
          required
        />

        <label htmlFor='age'>Age</label>
        <input
          type='number'
          name='age'
          id='age'
          min='18'
          max='99'
          onChange={formik.handleChange}
          value={formik.values.age}
          required
        />

        <div>
          <label>Sex:
          
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
            <option value="choose">Choose Home Animal</option>
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
          <option value="choose">Choose Eye Color</option>
          <option value="brown">Brown</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
        <br></br>

        <div className='buttons'>
          <button type="submit">Submit</button>
          <button type="reset" value='Reset' onClick={handleClear}>Clear</button>
        </div>

      </form>
    </div>
  )
}

export default Form;