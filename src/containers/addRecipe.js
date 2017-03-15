import React, {Component} from 'react';
import {connect} from 'react-redux';



class AddItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'Please write an essay about your favorite DOM element.'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { dispatch } = this.props;
         dispatch({type: 'CHANGE_DISHES_LIST', payload: this.state});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="col col-md-4">
                <h4>Add new recipe</h4>
                <div className="form-group">
                    <label>Name:</label>
                    <input className="form-control" type="text" name="name" required onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Ingredients:</label>
                    <input className="form-control" type="text" name="ingredients" required
                           onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Description:</label>
                    <textarea className="form-control" value={this.state.value} type="text" name="info" required
                              onChange={this.handleChange}> </textarea>
                </div>
                <input type="submit" className="btn btn-default" value="Submit"/>
            </form>
        );
    }
}

function dispatchStateToProps(dispatch) {
    return {
        dispatch,
    };
}
export default connect(dispatchStateToProps)(AddItem);