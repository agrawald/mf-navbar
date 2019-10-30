import * as React from 'react';
import { Button, ListGroup, Modal, Row, Col } from 'react-bootstrap';
import NotificationSvc from '../services/notification.svc';
import { Notifications } from '../types/Notifications';

interface IState {
  show: boolean;
  notifications?: Notifications;
}

class Notification extends React.Component<any, IState> {
  state = {
    show: false,
    notifications: {
      messages: []
    }
  };

  notificationSvc: NotificationSvc;

  constructor(props: any) {
    super(props);
    this.notificationSvc = new NotificationSvc();
    this.onShow = this.onShow.bind(this);
    this.onHide = this.onHide.bind(this);
  }

  onShow() {
    this.setState({ ...this.state, show: true });
  }

  onHide() {
    this.setState({ ...this.state, show: false });
  }

  componentDidMount() {
    const notifications = this.notificationSvc.getAll();
    this.setState({ ...this.state, notifications: notifications });
  }

  renderMessage(message: string) {
    return (
      <ListGroup.Item>
        <Row>
          <Col>{message}</Col>
          <Col>
            <Button href="#" variant="outline-primary" onClick={()=>{window.location.assign('/notifications')}}>
              View
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
    );
  }

  public render() {
    const { notifications } = this.state;
    const messages = [];
    if (notifications) {
      for (const msg of notifications.messages) {
        messages.push(this.renderMessage(msg));
      }
    }

    return (
      <>
        <Button href="#" variant="primary" onClick={this.onShow}>
          Notifications
        </Button>

        <Modal
          show={this.state.show}
          onHide={this.onHide}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Notifications
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {messages && <ListGroup>{messages}</ListGroup>}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Notification;
