import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addItem }  from '../actions/itemActions';
import Loader from './Loader';

class ItemModal extends Component {
    state = {
        modal: false,
        name: ''
    }
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        item: PropTypes.object.isRequired,
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();
        const newItem = {
                name: this.state.name
        }
        this.props.addItem(newItem);
        this.toggle();
    }
    render() {
        const { loading } = this.props.item;
        return (
            <div>
                { loading ? <Loader /> : (
            <>
            { this.props.isAuthenticated ? <Button
            color="dark"
            style={{marginBottom: '2rem'}}
            onClick={this.toggle }>Tambah Belanja</Button> : '' }
            <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}>
                <ModalHeader>Add to shopping list</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Label for="item">Item</Label>
                            <Input type="text" name="name" id="item" placeholder="Add item to shopping list" onChange={this.onChange} />
                            <Button color="dark" style={{ marginTop: "2rem"}} block>Add item</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
                </>
                )}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps, { addItem })(ItemModal);