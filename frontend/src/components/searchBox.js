import React, {useState} from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function SearchBox() {

    const submitHandler = (e) => {
        e.preventDefault()
    }
    
  return (
    <Form onSubmit={submitHandler} >
      <Form.Control
        type='text'
        name='q'
        placeholder='Search...'
        className='form-control-lg'>

        </Form.Control>
    </Form>
  )
}

export default SearchBox
