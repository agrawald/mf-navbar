import * as React from 'react';
import { ButtonGroup, Nav, Navbar } from 'react-bootstrap';
import MenuItem from './components/MenuItem';
import { Template } from './types/Template';
export interface IState {
  scope: string;
  template?: Template;
}
class App extends React.Component<any, IState> {
  state = {
    scope: 'user',
    template: {
      navs: []
    }
  };

  constructor(props: any) {
    super(props);
    this.state.scope = this.props.scope;
  }

  componentDidMount() {
    fetch('http://'+process.env.REACT_APP_TEMPLATE_URL+'/template?scope=' + this.state.scope)
      .then(res => res.json())
      .then(data => {
        this.setState({ template: data });
      })
      .catch(console.log);
  }

  componentDidCatch(error: any, info: any) {
    console.error('NavBar Micro-app: ' + info, error);
  }

  public render() {
    const { template } = this.state;
    const navs = [];
    if (template) {
      for (const nav of template.navs) {
        navs.push(<MenuItem nav={nav} />);
      }
    }

    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Chess UI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <div className="d-flex flex-column">
            <ButtonGroup toggle className="mt-3">
              {navs}
            </ButtonGroup>
          </div>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default App;
