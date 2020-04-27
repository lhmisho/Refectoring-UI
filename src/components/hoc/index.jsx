import React from 'react'

import withData from './hoc'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

class HigherOrderComponent extends React.Component {


    render() {
        let { error, isLoading, data } = this.props
        return (
            <div>
                {isLoading && <p>Loadig ....</p>}
                {error && <p>Some error occured</p>}
                <>
                    <p>All posts</p>
                    <ul>
                        {data && data.map((post, idx) => {
                            return (
                                <li key={`post_${idx}`}>{post.title}</li>
                            )
                        })}
                    </ul>
                </>
            </div>
        )
    }
}

export default withData(`${BASE_URL}/posts`, HigherOrderComponent)