import React, {useState} from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function SearchBox() {

  const [keyword, setKeyword] = useState('')

  let navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        if(keyword) {
          navigate(`/?keyword=${keyword}`)
        } else {
          navigate(navigate(navigate.location.pathname))
        }
    }
    
  return (
    <Form onSubmit={submitHandler} >
      <Form.Control
        type='text'
        name='q'
        placeholder='Search...'
        className='form-control-lg'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}>

        </Form.Control>
    </Form>
  )
}

export default SearchBox
