import React from 'react';

export default class ContactDetials extends React.Component {
  render(){
    const details = (
      <div>
      <p>{this.props.contact.name}</p>
      <p>{this.props.contact.phone}</p>
      </div>
    );

    const blank = (
      <div> Nothing is Selected </div>
    );

    return (
      <div>
      <h2>Details</h2>
      { this.props.isSeleted? details : blank }
      </div>
    );
  }
}

ContactDetails.defaultProps = {
  contact: {
    name: "",
    phone: ""
  }
}
