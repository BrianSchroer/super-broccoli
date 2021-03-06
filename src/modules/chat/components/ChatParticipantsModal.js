import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Modal} from '../../../modules/core';

export class ChatParticipantsModal extends React.Component {

    static get propTypes() {
        return {
            chatParticipants: PropTypes.arrayOf(PropTypes.object).isRequired,
            onCloseRequest: PropTypes.func.isRequired
        };
    }

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const props = this.props;

        const buttons = (
            <input type="button" value="Close" className="btn btn-primary"
                onClick={props.onCloseRequest}/>
        );

        return (
            <Modal title="Who's Here?" onCloseRequest={props.onCloseRequest} buttons={buttons}>
                <div className="chat-participants">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Department</th>
                                <th>Title</th>
                                <th>Connection</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.props.chatParticipants.map((participant, index) =>
                            (<tr key={index}>
                                <td>{participant.name}</td>
                                <td>{participant.department}</td>
                                <td>{participant.title}</td>
                                <td>{participant.connection}</td>
                            </tr>)
                        )}
                        </tbody>
                    </table>
                </div>
            </Modal>
        );
    }
}

export function mapStateToProps(state, ownProps) {
    let chatParticipants = state.chatParticipants;
    const onCloseRequest = ownProps.onCloseRequest;

    return {chatParticipants, onCloseRequest};
}

export default connect(mapStateToProps)(ChatParticipantsModal);
