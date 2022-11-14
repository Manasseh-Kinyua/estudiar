import React, {useEffect, useState} from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { Row, Form, Button } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { useDispatch, useSelector } from 'react-redux'
import {  editUser, getUserDetails } from '../actions/userActions'
import { USER_EDIT_RESET, USER_DETAILS_RESET } from '../constants/userConstants'

function UserEditScreen() {

  const navigate = useNavigate()

  const params = useParams()
  const userId = params.id

  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isAdmin, setAdmin] = useState(false)


  const userDetails = useSelector(state => state.userDetails)
  const {error, loading, user} = userDetails

  const userEdit = useSelector(state => state.userEdit)
  const {error: errorUpdate, loading: loadingUpdate, success: successUpdate} = userEdit

  useEffect(() => {
    if(successUpdate) {
        dispatch({type: USER_EDIT_RESET})
        dispatch({type: USER_DETAILS_RESET})
        navigate('/admin/userlist')
    } else {
        if(!user || user.id !== Number(userId)) {
            dispatch(getUserDetails(userId))
        } else {
            setName(user.name)
            setEmail(user.email)
            setAdmin(user.isAdmin)
        }
    }
    
  }, [dispatch, user, navigate, successUpdate])

  const submitHandler = (e) => {
    e.preventDefault()

    dispatch(editUser({id: user.id, name, email, isAdmin}))
    }

  return (
    <div>
      <Link className='links' to='/admin/userlist'><i className="fa-solid fa-left-long"></i> Back to User List</Link>
      
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', borderRadius:'20px'}}>
            <Row className='bg'  style={{width:'40%'}}>
                <h3 className='bg2' style={{padding:'.5rem', textAlign:'center'}}>Edit User</h3>
                {/* {loadingUpdate && <Loader/>}
                {errorUpdate && <Message error={errorUpdate} severity='error'/>} */}
                {loading ? (
                    <Loader />
                ) : error ? (
                    <Message error={error} severity='error'/>
                ) : (
                    <Form className='bg' onSubmit={submitHandler}>
                        <Form.Group controlId='name'>
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='email'>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='isadmin'>
                            <Form.Check
                            type='checkbox'
                            label='Is Admin'
                            checked={isAdmin}
                            onChange={(e) => setAdmin(e.target.checked)}
                            ></Form.Check>
                        </Form.Group>

                        <Button
                            style={{margin: '1rem 0rem', width:'50%', backgroundColor:'#46B5D1', color:'white', textAlign:'center'}}
                            className='bg'
                            type='submit'>
                            Update
                        </Button>

                </Form>
                )}
            </Row>
        </div>
        
    </div>
  )
}

export default UserEditScreen
