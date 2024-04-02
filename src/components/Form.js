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
            eyeColor: '',
            buttons: ''
        }
    });

    console.log ('Form values', formik.values);

    return (
        <div>
            <form>
            
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />

                <label htmlFor='age'>Age</label>
                <input type='range' id='age' name='age' min="18" max="99" onChange={formik.handleChange} value={formik.values.age}/>
                <br></br>

                <div class="sexGroup">
                <input id="male" type="radio" name="male" onChange={formik.handleChange} value={formik.values.male} />
                <label class="inline">Male</label>
                
                <input id="female"type="radio" name="female" onChange={formik.handleChange} value={formik.values.female}/>
                <label class="inline">Female</label>
                </div>
                <br></br>

                <div class='homeAnimals'>
                <label htmlFor="home-animals">Home animals:</label>
                <select id="home-animals" name='homeAnimals' onChange={formik.handleChange} value={formik.values.homeAnimals}>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="birds">Birds</option>
                    <option value="fish">Fish</option>
                </select>
                </div>
                <br></br>

                <label htmlFor="eye-color">Eye color:</label>
                <select id="eye-color" name="eyeColor">
                    <option value="brown">Brown</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                </select>
                <br></br>

                <div class='buttons' name='buttons'>
                <br></br><button type="submit">Submit</button>
                <br></br><button type="reset">Clear</button>
                </div>

            </form>
        </div>
    )
//     const jsonString = JSON.stringify();
//     console.log(jsonString);
}

export default Form;
