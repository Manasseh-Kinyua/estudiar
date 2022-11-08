import React, { useEffect, useState } from 'react'
import { Row, Col, Form, Card, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

function LoginScreen() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {

    })

    const submitHandler = (e) => {
        e.preventDefault()
    }

  return (
    <div className='py-5'>
      <Row className="justify-content-md-center my-5">
        
        <Col md={4}>
            <Card style={{backgroundColor: 'rgb(1, 15, 32)', borderRadius: '1rem'}}>
                <div className='bg2' style={{textAlign: 'center', padding: '.8rem', color: 'white', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem'}}>
                <h6>SIGN IN</h6>
                </div>
              <Form className='form-p' onSubmit={submitHandler}>
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
                <span style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                <Button
                    type='submit'
                    style={{backgroundColor: '#46B5D1', color: 'white', width: '60%', marginTop: '1.5rem'}}>
                    Sign In
                  </Button>
                </span>
                {/* <strong style={{textAlign: 'center'}}>
                  Are tou a new Customer? <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Register</Link>
                </strong> */}
              </Form>
            </Card>
        </Col>
      </Row>
    </div>
  )
}

export default LoginScreen
