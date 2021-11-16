import React from 'react';

class Field extends React.Component {

  render() {
    return (
      <div>
        <label htmlFor="id-raktas">laukas</label> <br/>
        <input type="text" name="field" id="id-raktas" />
      </div>
    );
  }
}

export default Field;
