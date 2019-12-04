import React from 'react'


const Form = ({ values, errors = {}, changeHandler, submitHandler, formRef, resetHandler, focusHandler, blurHandler }) => {
    return (
        <form ref={formRef} onSubmit={submitHandler} onReset={resetHandler}>

            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text"
                    id="name"
                    name="name"
                    placeholder="Enter name"
                    className={errors.name ? 'form-control is-invalid' : 'form-control'}
                    onChange={changeHandler}
                    value={values.name}
                    onFocus={focusHandler}
                    onBlur={blurHandler}
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email"
                    className={errors.email ? 'form-control is-invalid' : 'form-control'}
                    id="email"
                    name="email"
                    placeholder="Enter email"
                    onChange={changeHandler}
                    value={values.email}
                    onFocus={focusHandler}
                    onBlur={blurHandler}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password"
                    className={errors.password ? 'form-control is-invalid' : 'form-control'}
                    id="password"
                    name="password"
                    placeholder="Enter pass"
                    onChange={changeHandler}
                    onFocus={focusHandler}
                    onBlur={blurHandler}
                />
                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>

            <div className="form-group">
                <button className="btn btn-primary btn-sm" type="submit">Submit</button>
            </div>

        </form>
    )
}
export default Form