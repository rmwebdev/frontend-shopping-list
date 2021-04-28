import React, { Component } from 'react'
import { Container } from 'reactstrap';

 class  Loader extends Component {
   render(){
    return (
        <Container>
            <div className="loader"></div>
        </Container>
    )
   }
}

export default Loader;