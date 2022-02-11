import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from "react-bootstrap/Modal";
import React from 'react';

function converter(props) {
    switch (props.target) {
        case "USD":
            return props.sourceVal*0.013
        case "EURO":
            return props.sourceVal*0.012
        case "SGD":
            return props.sourceVal*0.018
        case "AUD":
            return props.sourceVal*0.019
        case "GBP":
            return props.sourceVal*0.0098
            default:
                return 0
    }
}
function ResModal(props) {
    const result = converter(props)
    return (
        <Modal show={props.isOpen} onHide={props.hideModal}>
            <Modal.Header>You are converting {props.source} to {props.target}</Modal.Header>
            <Modal.Body>{props.sourceVal} Rupee is equal to {result} {props.target}</Modal.Body>
            <Modal.Footer>
                <button className="btn btn-primary" onClick={props.hideModal}>Ok</button>
            </Modal.Footer>
        </Modal>
    )
}

export default ResModal

