import * as React from 'react';
import { Button } from 'react-bootstrap';
import { Nav } from '../types/Nav';

export interface IProps {
  nav: Nav;
}

class MenuItem extends React.Component<IProps> {

  public render() {
    const { name, code, href } = this.props.nav;
    return (
      <>
        <Button href={href} variant="primary" id={code}>
          {name}
        </Button>
      </>
    );
  }
}

export default MenuItem;
