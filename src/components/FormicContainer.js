import React from 'react'

import FormikControl from './FormikControl'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
//aa

function FormicContainer() {
    const dropdownOptions = [
        { key: 'Select an option', value: '' },
        { key: 'Option1', value: 'option1' },
        { key: 'Option2', value: 'option2' },
        { key: 'Option3', value: 'option3' }

    ]
    const radioOptions = [
        { key: 'Option1', value: 'rOption1' },
        { key: 'Option2', value: 'rOption2' },
        { key: 'Option3', value: 'rOption3' }

    ]
    const initialValues = {
        email: '',
        description: '',
        selectOption: '',
        radioOption:''
    }
    const validationSchema = Yup.object({
        email: Yup.string().required('Requried'),
        description: Yup.string().required('Required'),
        selectOption: Yup.string().required('Required'),
        radioOption: Yup.string().required('Required')


    })
    const onSubmit = values => {
        console.log('Form data', values)
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >

            {formik => (<Form>
                <FormikControl
                    control='input'
                    type='email'
                    label='Email'
                    name='email'
                />
                <FormikControl
                    control='textarea'
                    label='Description'
                    name='description'
                />
                <FormikControl
                    control='select'
                    label='Select a topic'
                    name='selectOption'
                    options={dropdownOptions}
                    >

                    </FormikControl>

                    <FormikControl
                    control='radio'
                    label='Radio Topic'
                    name='radioOption'
                    options={radioOptions}
                    >

                    </FormikControl>

             

                <button type='submit'>Submit</button>
               
            </Form>
            )}
        </Formik>
    )
}

export default FormicContainer