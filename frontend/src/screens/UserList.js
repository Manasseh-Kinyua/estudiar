import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Row, Table } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listUsers } from '../actions/userActions'
import Avatar from '@mui/material/Avatar';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom'

function UserList() {

    const dispatch = useDispatch()

    const userList = useSelector(state => state.userList)
    const {loading, error, users} = userList

    useEffect(() => {
        dispatch(listUsers())
    },[dispatch])

  return (
    <Row>
      <h6>ALL USERS</h6>
      <Table striped  hover className='table-sm ' >
        <thead>
            <tr>
                <th>#</th>
                <th></th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ADMIN</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {users.map(user => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td><Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNkJpg5tIB3DZsMqxgGCyRtSwDuav9LEdbZI06evMasI6tmkPahgI1ftvuA7qbHSsbgg&usqp=CAU" /></td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      {user.isAdmin ? (
                        <CheckCircleOutlineIcon style={{color:'green'}}/>
                      ) : (
                        <HighlightOffIcon style={{color:'red'}}/>
                      )}
                    </td>
                    <td>
                      <Link to={`/admin/user/${user.id}/edit`}>
                        <Button  className='btn-sm'>
                          <EditIcon style={{color:'green'}} />
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <Button  className='btn-sm'>
                        <DeleteIcon style={{color:'red'}} />
                      </Button>
                    </td>
                </tr>
            ))}
        </tbody>
      </Table>
    </Row>
  )
}

export default UserList
