import React from 'react';

const HomePage = () => (
  <div>
    <form action="http://localhost:5000/api/users/" method="post" encType="multipart/form-data">
      <input type="file" name="avatar" />
      <button type="submit">submit</button>
    </form>
  </div>
);

export default HomePage;
