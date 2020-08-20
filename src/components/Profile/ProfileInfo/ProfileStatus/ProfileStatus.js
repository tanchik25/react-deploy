import React from 'react';
import './ProfileStatus.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status, this.props.userId);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    };

    render() {
        return (
            <div className="status__block">
                {!this.state.editMode &&
                <div className="status__message">
                    <span className="status__text" onDoubleClick={this.activateEditMode}>{this.props.status || "------"}</span>
                </div>
                }
                {this.state.editMode &&
                <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.state.status} className="status__submit"/>
                }
            </div>
        );
    }
}

export default ProfileStatus