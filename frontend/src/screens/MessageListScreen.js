import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Row, Table } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteMessage, listAllMessages, listRooms } from '../actions/roomActions'
import { MESSAGE_CREATE_SUCCESS } from '../constants/roomConstants'

function MessageListScreen() {

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const allMessages = useSelector(state => state.allMessages)
    const {loading, error, messages} = allMessages

    const messageDelete = useSelector(state => state.messageDelete)
    const {success: successDelete} = messageDelete

    useEffect(() => {
        dispatch(listAllMessages())
    },[dispatch, successDelete])

    const deleteMessageHandler = (id) => {
      dispatch(deleteMessage(id))
    }

  return (
    <Row>
      <h6>ALL MESSAGES</h6>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message severity='error' error={error} />
      ) : (
        <Table responsive striped  hover className='table-sm ' >
            <thead>
                <tr>
                    <th>#</th>
                    <th>WRITTEN BY</th>
                    <th>ROOM</th>
                    <th>MESSAGE</th>
                    <th>CREATED</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {messages && messages.map(message => (
                    <tr key={message.id}>
                        <td>{message.id}</td>
                        <td>{message.user.name}</td>
                        <td>{message.room.name}</td>
                        <td>{message.body.substring(0,100)}...</td>
                        <td>{message.created.substring(0,10)}</td>
                        <td>
                            <Button onClick={() => deleteMessageHandler(message.id)} className='btn-sm'>
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

export default MessageListScreen
