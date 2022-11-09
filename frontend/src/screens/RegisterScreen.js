import React, { useEffect, useState } from 'react'
import { Row, Col, Form, Card, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { register } from '../actions/userActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

function RegisterScreen() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const redirect = searchParams.get('redirect') 

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const userRegister = useSelector(state => state.userRegister)
    const {loading, error, userInfo} = userRegister

    console.log(email)

    useEffect(() => {
        if(userInfo) {
            navigate(redirect)
        }
    }, [userInfo, navigate])

    const submitHandler = (e) => {
        e.preventDefault()

        if(password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(register(name, email, password))
        }
    }

  return (
    <div className='py-5'>
      <Row className="justify-content-md-center my-5">
        
        <Col md={4}>
            
            <Card style={{backgroundColor: 'rgb(1, 15, 32)', borderRadius: '1rem'}}>
                <div className='bg2' style={{textAlign: 'center', padding: '.8rem', color: 'white', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem'}}>
                <h6>SIGN UP</h6>
                </div>
                {loading && <Loader />}
                {error && <Message severity='error' error={error} />}
                {message && <Message severity='success' error={message} />}
              <Form className='form-p' onSubmit={submitHandler}>
                <Form.Group className='form-m' controlId='name'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    required
                    type='text'
                    placeholder='Enter username'
                    value={name}
                    onChange={(e) => setName(e.target.value)}>

                  </Form.Control>
                </Form.Group>
                <Form.Group className='form-m' controlId='email'>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    required
                    type='email'
                    placeholder='Enter email address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}>

                  </Form.Control>
                </Form.Group>
                <Form.Group className='form-m' controlId='password'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    required
                    type='password'
                    placeholder='Enter password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>

                  </Form.Control>
                </Form.Group>
                <Form.Group className='form-m' controlId='passwordconfirm'>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    required
                    type='password'
                    placeholder='Confirm password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}>

                  </Form.Control>
                </Form.Group>
                <span style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                <Button
                    type='submit'
                    style={{backgroundColor: '#46B5D1', color: 'white', width: '60%', marginTop: '1.5rem'}}>
                    Register
                  </Button>
                </span>
                <strong style={{textAlign: 'center'}}>
                  Already have an account? <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Login</Link>
                </strong>
              </Form>
            </Card>
        </Col>
      </Row>
    </div>
  )
}

export default RegisterScreen
