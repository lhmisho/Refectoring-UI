import React from 'react'
import Axios from 'axios'

const withData = (url, Component) => {
    return (
        class MyComponent extends React.Component {
            state = {
                data: [],
                isLoading: false,
                errors: ''
            }

            componentDidMount() {
                this.setState({ isLoading: true })
                Axios.get(url)
                    .then(res => {
                        this.setState({
                            data: res.data.slice(0, 9),
                            errors: '',
                            isLoading: false
                        })
                    })
                    .catch(error => {
                        console.log(error.response.body)
                        this.setState({
                            errors: error.response.body,
                            isLoading: false
                        })
                    })
            }

            render() {
                let { data, errors, isLoading } = this.state
                return <Component error={errors} isLoading={isLoading} data={data} />
            }
        }
    )
}

export default withData