import React from 'react';

export default function Form(props) {
    const { change, submit, errors } = props;
    const { username, email, password, fruits, terms } = props.values

    const onSubmit = (evt) => {
        evt.preventDefault()
        submit()
    }

    const onChange = (evt) => {
        const { name, value, checked, type } = evt.target;
        const newVal = type === 'checkbox' ? checked : value;
        change(name, newVal)
    }

    return(
        <form onSubmit={onSubmit}>
            <div>
                <h1>User Form</h1>
                <p>{errors.username}</p>
                <p>{errors.email}</p>
                <p>{errors.password}</p>
                <p>{errors.fruits}</p>
                <p>{errors.terms}</p>

                <label className='name'>Name: 
                    <input 
                        name='username'
                        type='text'
                        value={username}
                        onChange={onChange}
                    />
                </label>

                <label className='email'>Email: 
                    <input 
                        name='email'
                        type='email'
                        value={email}
                        onChange={onChange}
                    />
                </label>

                <label className='password'>Password: 
                    <input 
                        name='password'
                        type='password'
                        value={password}
                        onChange={onChange}
                    />
                </label>

                <label className='fruits'>Fruits: 
                    <select
                        name='fruits'
                        value={fruits}
                        onChange={onChange}
                    >
                        <option value=''>-- Select an option --</option>
                        <option value='apple'>Apple</option>
                        <option value='banana'>Banana</option>
                        <option value='strawberry'>Strawberry</option>
                        <option value='other'>Other</option>
                    </select>
                </label>
                
                <label className='terms'>Terms: 
                    <input 
                        name='terms'
                        type='checkbox'
                        checked={terms}
                        onChange={onChange}
                    />
                </label>

                <input
                    className='submit'
                    id='submitBtn'
                    type='submit'
                    value='Submit'
                />
                
            </div>
        </form>
    )
}