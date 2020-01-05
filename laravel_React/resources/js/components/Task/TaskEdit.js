import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class TaskEdit extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            name: '',
            task:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e)
    {
        this.setState({
            name: e.target.value
        });
    }

    handleSubmit(e)
    {
        e.preventDefault();
        axios
        .put(`/api/tasks/${this.props.match.params.id}`, {
            name: this.state.name
        })
        .then(response => {
            console.log('successfully edited the task');
            this.props.history.push('/');
        });
    }    

    componentWillMount()
    {
        axios
        .get(`/api/tasks/${this.props.match.params.id}/edit`)
        .then((response)=>
        this.setState({
            task: response.data.task,
            name: response.data.task.name
        })
        );    
    }

    render() {
        console.log(this.props.match.params.id);
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="card">
                        <div className="card-header">Edit Task</div>
                        <div className="card-body">
                            <form onSubmit={this.handleSubmit}>
                                <div className="from-group">
                                    <textarea
                                    onChange={this.handleChange}
                                    value={this.state.name}
                                    className="form-control"
                                    row="5"
                                    maxLength="255"
                                    required
                                    />
                                </div>
                                <br/>
                                <button type="submit" className="btn btn-primary">
                                    Edit Task
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
