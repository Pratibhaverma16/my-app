import React, { Component } from "react";

export default class Group extends Component {
    render() {
        return (
            <form>
                <h3>Add Group</h3>

                <div className="form-group">
                    <label>Group Name</label>
                    <input type="email" className="form-control" placeholder="Enter" />
                </div>

               
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Add</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}