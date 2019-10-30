import * as React from 'react';
import { Button } from 'react-bootstrap';

class Tasks extends React.Component {
  public render() {
    if (process.env.REACT_APP_SCOPE === 'admin') {
      return (
        <Button href="/tasks" variant="primary" >
          Tasks
        </Button>
      );
    }

    return null;
  }
}

export default Tasks;
