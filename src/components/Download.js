import React, { Component } from 'react';
import Pdf from '../CV.pdf';

class Download extends Component {
  render() {
    return (
        <>
          <a href = {Pdf} target = "_blank" rel="noopener noreferrer">Download CV</a>
        </>
    );

  }
}

export default Download;