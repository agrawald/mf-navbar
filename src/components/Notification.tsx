import * as React from 'react';
import { Button, ListGroup, Row, Col } from 'react-bootstrap';

class Notification extends React.Component {
  public render() {
    return (
      <>
        <Button href="/notifications" variant="primary">
          Notifications
        </Button>
      </>
    );
  }
}

export default Notification;
