import * as React from 'react';
import { ButtonGroup, Nav, Navbar } from 'react-bootstrap';
import Notification from './components/Notification';
import Tasks from './components/Tasks';
import NavBarSvc from './services/navbar.svc';

class App extends React.Component {
  state = {
    scope: 'user',
    template: {}
  };

  navbarSvc: NavBarSvc;

  constructor(props: any) {
    super(props);
    this.navbarSvc = new NavBarSvc();
  }

  componentDidMount() {
    const template = this.navbarSvc.template();
    this.setState({ ...this.state, template: template });
  }

  componentDidCatch(error: any, info: any) {
    console.error("NavBar Micro-app: " + info, error)
  }

  public render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Chess UI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <div className="d-flex flex-column">
            <ButtonGroup toggle className="mt-3">
              <Tasks />
              <Notification/>
            </ButtonGroup>
          </div>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default App;