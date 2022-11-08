import React from 'react'
import { Navbar, Nav, Container, Row, Image, NavDropdown, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector } from 'react-redux'

function Header() {

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  return (
    <div>
      <header className='fixed-nav'>
      <Navbar style={{minHeight: '10vh'}}  expand="lg" className='bg' collapseOnSelect>
            <Container>
                <LinkContainer to='/'>
                  <Navbar.Brand><Image style={{width: '2rem'}} src='https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/50/48/e6/5048e628-43ca-3e5e-0f3b-c2aa4012de6f/source/512x512bb.jpg' alt='logo' /><strong>Estudiar</strong></Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                        {userInfo ? (
                          <NavDropdown
                          title={userInfo.name}
                          id='username'>
                              <LinkContainer
                                  to='/profile'>
                                      <NavDropdown.Item>Profile</NavDropdown.Item>
                              </LinkContainer>
                              <NavDropdown.Item >Logout</NavDropdown.Item>
                          </NavDropdown>
                        ) : (
                          <LinkContainer to='/login'>
                            <Nav.Link>LOGIN</Nav.Link>
                        </LinkContainer>
                        )}
                        
                        {/* <Nav.Link href="#" disabled>
                        Link
                        </Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      </header>
    </div>
  )
}

export default Header
