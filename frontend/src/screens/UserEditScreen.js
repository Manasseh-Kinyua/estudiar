// import React, {useEffect, useState} from 'react'
// import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
// import { Form, Button, FormGroup, Card } from 'react-bootstrap'
// import Loader from '../components/Loader'
// import Message from '../components/Message'
// import { useDispatch, useSelector } from 'react-redux'
// import {  getUserDetails, updateUser } from '../actions/userActions'
// import FormContainer from '../components/FormContainer'
// import { USER_UPDATE_RESET } from '../constants/userConstants'

// function UserEditScreen() {

//     const navigate = useNavigate()

//   const params = useParams()
//   const userId = params.id

//   const dispatch = useDispatch()

//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [isAdmin, setAdmin] = useState(false)


//   const userDetails = useSelector(state => state.userDetails)
//   const {error, loading, user} = userDetails

//   const userUpdate = useSelector(state => state.userUpdate)
//   const {error: errorUpdate, loading: loadingUpdate, success: successUpdate} = userUpdate

//   useEffect(() => {
//     if(successUpdate) {
//         dispatch({type: USER_UPDATE_RESET})
//         navigate('/admin/userlist')
//     }else {
//         if(!user.name || user._id !== Number(userId)) {
//             dispatch(getUserDetails(userId))
//         }else {
//             setName(user.name)
//             setEmail(user.email)
//             setAdmin(user.isAdmin)
//         }
//     }

    
//   }, [dispatch, user, userId, successUpdate, navigate])

//   const submitHandler = (e) => {
//     e.preventDefault()

//     // dispatch(updateUser({_id: user._id, name, email, isAdmin}))
//         console.log({_id: user._id, name, email, isAdmin})
//     }

//   return (
//     <div>
//       <Link className='links' to='/admin/userlist'><i className="fa-solid fa-left-long"></i> Back to User List</Link>
      
//         <FormContainer>
//         <h3 style={{textAlign:'center', marginBottom:'2rem'}}>Edit User</h3>
//         {loadingUpdate && <Loader/>}
//         {errorUpdate && <Message error={errorUpdate} severity='error'/>}
//         {loading ? (
//             <Loader />
//         ) : error ? (
//             <Message error={error} severity='error'/>
//         ) : (
//             <Form onSubmit={submitHandler}>
//           <Form.Group controlId='name'>
//             <Form.Label>Username</Form.Label>
//             <Form.Control
//               type='name'
//               placeholder='Enter username'
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               ></Form.Control>
//           </Form.Group>

//           <Form.Group controlId='email'>
//             <Form.Label>Email Address</Form.Label>
//             <Form.Control
//               type='email'
//               placeholder='Enter Email'
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               ></Form.Control>
//           </Form.Group>

//           <Form.Group controlId='isadmin'>
//             <Form.Check
//               type='checkbox'
//               label='Is Admin'
//               checked={isAdmin}
//               onChange={(e) => setAdmin(e.target.checked)}
//               ></Form.Check>
//           </Form.Group>

//           <Button
//             style={{margin: '1rem 0rem', width:'100%'}}
//             className='bg'
//             type='submit'>
//               Update
//           </Button>

//         </Form>
//         )}
        
//       </FormContainer>
//     </div>
//   )
// }

// export default UserEditScreen
