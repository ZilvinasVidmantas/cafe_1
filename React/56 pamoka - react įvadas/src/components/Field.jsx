import React from 'react';

class Field extends React.Component {

  // constructor(props){
  //   super(props);
  // }

  render() {
    console.log('Field prop\'sai');
    console.log(this.props);
    const { type, name, label, id } = this.props;

    return (
      <div>
        <label htmlFor={id}>{label}</label> <br />
        <input type={type} name={name} id={id} />
      </div>
    );
  }
}

export default Field;
