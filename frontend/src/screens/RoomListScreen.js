import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Row, Table } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listUsers } from '../actions/userActions'
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom'
import { listRooms } from '../actions/roomActions'

function RoomListScreen() {

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const roomList = useSelector(state => state.roomList)
    const {loading, error, rooms} = roomList

    useEffect(() => {
        dispatch(listRooms())
    },[dispatch])

  return (
    <Row>
      <h6>ALL USERS</h6>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message severity='error' error={error} />
      ) : (
        <Table responsive striped  hover className='table-sm ' >
            <thead>
                <tr>
                    <th>#</th>
                    <th>HOSTED BY</th>
                    <th>NAME</th>
                    <th>ON</th>
                    <th>PARTICIPANTS</th>
                    <th>MESSAGES</th>
                    <th>CREATED</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {rooms && rooms.map(room => (
                    <tr key={room.id}>
                        <td>{room.id}</td>
                        <td>{room.host.name}</td>
                        <td>{room.name}</td>
                        <td>{room.topic.name}</td>
                        <td>{room.participants.length}</td>
                        <td>{room.messages.length}</td>
                        <td>{room.created.substring(0,10)}</td>
                        <td>
                            <Button  className='btn-sm'>
                                <DeleteIcon style={{color:'red'}} />
                            </Button>
                        </td>
                        <td></td>
                    </tr>
                ))}
            </tbody>
        </Table>
      )}
    </Row>
  )
}

export default RoomListScreen
