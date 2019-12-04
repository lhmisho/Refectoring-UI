import React from 'react'
import Form from './form'

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.formRef = React.createRef()
    }

    state = {
        values: {
            name: '',
            email: '',
            password: ''
        },
        errors: {
            name: '',
            email: '',
            password: ''
        },
        touched: {
            name: false,
            email: false,
            password: false
        }
    }

    validate = () => {
        const errors = {}
        const { values: { name, email, password } } = this.state

        if (!name) {
            errors.name = "Please provide your name"
        }
        if (!email) {
            errors.email = "Please provide your email"
        }
        if (!password) {
            errors.password = "Please provide your password"
        }
        return {
            errors,
            isValide: Object.keys(errors).length === 0
        }
    }
    changeHandler = event => {
        this.setState({
            values: {
                ...this.state.values,
                [event.target.name]: event.target.value
            }
        })
    }
    submitHandler = event => {
        event.preventDefault()
        const { errors, isValid } = this.validate()

        if (!isValid) {
            this.setState({ errors: { ...this.state.errors, ...errors } })
        } else {
            this.formRef.current.reset()
            // event.target.reset()
        }
    }
    resetHandler = event => {
        this.setState({
            values: {
                name: '',
                email: '',
                passowrd: ''
            }
        })
    }

    blurHandler = event => {
        const { errors, isValid } = this.validate()
        console.log(event.target.name)
        if (!isValid) {
            if (event.target.name === 'name' || event.target.name === 'email' || event.target.name === 'password') {
                this.setState({
                    errors: {
                        ...this.state.errors,
                        [event.target.name]: errors[event.target.name]
                    }
                })
            }
        }
    }
    focusHandler = event => {
        this.setState({
            errors: {
                ...this.state.errors,
                [event.target.name]: ''
            }
        })
    }

    render() {
        return (
            <div className="container">
                <Form
                    values={this.state.values}
                    errors={this.state.errors}
                    changeHandler={this.changeHandler}
                    submitHandler={this.submitHandler}
                    formRef={this.formRef}
                    resetHandler={this.resetHandler}
                    focusHandler={this.focusHandler}
                    blurHandler={this.blurHandler}
                />
            </div>
        )
    }
}
export default MyForm