import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

export default class Task extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            name: '',
            tasks: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderTasks = this.renderTasks.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleChange(e){
        this.setState({
            name: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        axios
        .post('/api/tasks',{
            name: this.state.name
        })
        .then(response=>{            
            this.setState({
                tasks: [response.data, ...this.state.tasks],
                name:''
            });
        })
    }

    renderTasks() {
        return this.state.tasks.map(task=> (
            <div key={task.id} className="media">
                <div className="media-body">
                    <div>
                        {task.name}{''}
                        {/* <span className="text-muted">
                            {' '}
                            <br/> by {task.user.name} | {' '}
                            {task.updated_at
                            .split('')
                            .slice(1)
                            .join(' ')
                            }
                        </span> */}
                        <div className="btn-group float-right">
                            <Link className="btn btn-sm btn-success" to={`api/tasks/${task.id}/edit`}>
                                Edit
                            </Link>
                            <button
                            onClick={()=> this.handleDelete(task.id)}
                            className = "btn btn-sm btn-warning float-right"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        ))
    }

    getTasks() {
        axios
        .get('/api/tasks')
        .then((response)=>this.setState({
            tasks:[...response.data.tasks]
        })
        );
    }

    componentWillMount(){
        this.getTasks();
    }

    handleDelete(id) {
        const isNotId = task => task.id !== id;
        const updatedTasks = this.state.tasks.filter(isNotId);
        this.setState({tasks: updatedTasks});

        axios.delete(`/api/tasks/${id}`);
    }

    handleUpdate(id) {
        axios
        .put(`api/tasks/${id}`)
        .then(response=>{
            this.getTasks();
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Create Task</div>
                            <div className="card-body">
                                <form onSubmit = {this.handleSubmit}>
                                    <div className="form-group">
                                        <textarea
                                        onChange = {this.handleChange}
                                        value={this.state.name}
                                        className="form-control"
                                        rows="5"
                                        maxLength="255"
                                        placeholder="Create a new Task"
                                        required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Create Task
                                    </button>
                                </form>
                                <hr/>
                                {this.renderTasks()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}