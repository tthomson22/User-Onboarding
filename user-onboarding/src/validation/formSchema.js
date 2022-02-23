import * as yup from 'yup'

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Name is required')
        .min(5,'Name needs to be 5 characters or more'),
    email: yup
        .string()
        .trim()
        .required('Email is required'),
    password: yup
        .string()
        .trim()
        .required('Password is required'),
    fruits: yup
        .string()
        .trim()
        .oneOf(['apple', 'banana', 'strawberry', 'other'], 'Select one fruit'),
    terms: yup
        .boolean()
        .oneOf([true], 'Must accept terms of service')
})

export default formSchema;