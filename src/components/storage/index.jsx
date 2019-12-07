import React, { Component } from "react";
import Switch from "react-switch";
import Signup from './signup'
import Package from './package'

class Storage extends Component {
    constructor() {
        super();
        this.state = { checked: true };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        this.setState({ checked });
    }
    render() {
        return (
            <>
                <div className="flex mb-4 border-solid border-b-2 border-gray-400">
                    <div className="w-1/2 mt-6 h-auto mx-auto text-left text-gray-700 text-3xl">
                        Choose the amount of storage<br></br>
                        that's right for you
                    </div>
                    <div className="flex items-end w-1/2 mt-6 h-auto mx-auto text-left text-gray-700 justify-end">
                        <div className="flex">
                            Bill yearly
                            <div className="mx-2">
                                <Switch
                                    onChange={this.handleChange}
                                    checked={this.state.checked}
                                    handleDiameter={30}
                                    uncheckedIcon={false}
                                />
                            </div>
                            Bill monthly
                        </div>
                    </div>
                </div>
                <div className="flex mb-4">
                    <div className="w-1/2 h-auto">
                        <Signup />
                    </div>
                    <div className="w-1/2 h-auto">
                        <Package />
                    </div>
                </div>
            </>
        )
    }
}

export default Storage