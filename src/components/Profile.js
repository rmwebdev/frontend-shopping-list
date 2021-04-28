import React, { Component } from 'react';
import { Card, CardBody,CardImg,CardSubtitle, CardText, CardTitle, Container,  Input, Label} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from './Loader';
import Download from './Download';

class Profile extends Component  {
    static propTypes = {
        auth: PropTypes.object.isRequired,
    }

    render() {
        const { user, isLoading } = this.props.auth;
       return (
            <Container >
                   { isLoading ? <Loader /> :  ( 
                       <>
                       { user ? <Card style={{ border: "none"}}>

                        <CardImg style={{ width: "30%", margin: "auto", borderRadius: "50%", marginTop: "2rem" }} top width="100%" src="https://avatars.githubusercontent.com/u/47350072?v=4" alt="Card image cap" />
                      <CardBody>
                        <CardTitle tag="h5">{user.name}  <Download /></CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Fullstack Developer </CardSubtitle>
                        <CardText style={{ marginTop: "2rem"}}>
                                <Label for="exampleAddress" style={{ marginBottom: "1rem", marginTop: "1rem"}}>Telepon</Label>
                                <Input type="text" name="address" id="exampleAddress" value="(+62) 8787210300" readOnly/>
                                <Label for="exampleAddress2"style={{ marginBottom: "1rem", marginTop: "1rem"}}>Email</Label>
                                <Input type="text" name="address2" id="exampleAddress2" value={ user.email } readOnly/>
                                <Label for="exampleAddress2"style={{ marginBottom: "1rem", marginTop: "1rem"}}>Address</Label>
                                <Input type="text" name="address2" id="exampleAddress2" value="Jl Duri bulan No. 69C Condet Jakarta Timur" readOnly/>
                        </CardText>
                       
                        </CardBody>

                       </Card> : ''} 
                       </>
                   )}
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})
export default connect(mapStateToProps, null )(Profile);
