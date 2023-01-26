import { IMPONEUSER, IMPUSERS } from "../ActionTypes/UsersTypes"
import axios from 'axios'

export const GettUsers = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/user/UsersList')
        dispatch({
            type: IMPUSERS,
            payload: res.data.listusr
        })
    } catch (error) {
        console.log(error)
    }
}

export const AddUsr = (newUser, navigate) => async (dispatch) => {
    console.log(newUser)
    try {
        await axios.post('/api/user/AddUser', newUser)
        dispatch(GettUsers())
        navigate('/Users')
    } catch (error) {
        console.log(error)
    }
}

export const DeleteUser = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/user/deleteUser/${id}`)
        dispatch(GettUsers())
    } catch (error) {
        console.log(error)
    }
}

export const getOneUser = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/user/UserProfile/${id}`)
        dispatch({
            type: IMPONEUSER,
            payload: res.data.profile
        })
    } catch (error) {
        console.log(error)
    }
}

export const UpdateUser = (updateuser, id, navigate) => async (dispatch) => {
    try {
        await axios.put(`/api/user//UserUpdate/${id}`, updateuser)
        dispatch(GettUsers())
        navigate('/Users')
    } catch (error) {
        console.log(error)
    }
}