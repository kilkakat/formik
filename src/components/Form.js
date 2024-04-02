import React from 'react'
import { useFormik } from 'formik';

function Form() {


    const formik = useFormik({
        initialValues: {
            name: '',
            age: '',
            male: '',
            female: '',
            homeAnimals: '',
            eyeColor: ''
        },
        onSubmit: values => {
            console.log('Form data', values);
        }
    });

    // console.log ('Form values', formik.values);

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
            
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' onChange={formik.handleChange} value={formik.values.name} />

                <label htmlFor='age'>Age</label>
                <input type='number' name='age' min='18' max='99' onChange={formik.handleChange} value={formik.values.age}/>

                <div>

                <label class="inline">Male</label>
                <input type="radio" name="male" onChange={formik.handleChange} value={formik.values.male}/>
                
                <label class="inline">Female</label>
                <input type="radio" name="female" onChange={formik.handleChange} value={formik.values.female}/>

                </div>

                <div class='homeAnimals'>
                <label htmlFor="homeAnimals">Home animals:</label>
                <select name='homeAnimals' onChange={formik.handleChange} value={formik.values.homeAnimals}>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="birds">Birds</option>
                    <option value="fish">Fish</option>
                </select>
                </div>
                <br></br>

                <label htmlFor="eyeColor">Eye color:</label>
                <select name="eyeColor" onChange={formik.handleChange} value={formik.values.eyeColor}>
                    <option value="brown">Brown</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                </select>
                <br></br>

                <div class='buttons' name='buttons'>
                <button type="submit">Submit</button><br></br>
                <button type="reset">Clear</button>
                </div>

            </form>
        </div>
    )
    }

export default Form;
