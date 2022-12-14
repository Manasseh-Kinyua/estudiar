import React from 'react'
import { Navbar, Nav, Container, Row, Image, NavDropdown, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Avatar from '@mui/material/Avatar';
import SearchBox from './searchBox';
import { logout } from '../actions/userActions';
import { useNavigate } from 'react-router-dom';

function Header() {

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const logoutHandler = () => {
    dispatch(logout())
    navigate('/login')
  }

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
                <SearchBox  />
                    <Nav
                        className="me-auto my-2 my-lg-0 ml-5"
                        style={{ maxHeight: '100px', marginLeft:'1rem' }}
                        navbarScroll
                    >
                        

                        {userInfo && userInfo.isAdmin && (
                            <NavDropdown
                            title='Admin'
                            id='username'>
                                <LinkContainer
                                    to='/admin/userlist'>
                                        <NavDropdown.Item>Users</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer
                                    to='/admin/roomlist'>
                                        <NavDropdown.Item>Rooms</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer
                                    to='/admin/messagelist'>
                                        <NavDropdown.Item>Messages</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer
                                    to='/admin/reviewlist'>
                                        <NavDropdown.Item>Reviews</NavDropdown.Item>
                                </LinkContainer>
                          </NavDropdown>
                        )}

                        {userInfo ? (
                          <div style={{display: 'flex'}}>
                            <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNkJpg5tIB3DZsMqxgGCyRtSwDuav9LEdbZI06evMasI6tmkPahgI1ftvuA7qbHSsbgg&usqp=CAU" />
                            <NavDropdown
                            title={userInfo.name}
                            id='username'>
                                <LinkContainer
                                    to='/profile'>
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                            </NavDropdown>
                          </div>
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
