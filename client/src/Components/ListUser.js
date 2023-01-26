import { useEffect } from "react"
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import CardUser from './CardUser'
import { GettUsers } from "../Redux/Action/UsersActions"


export const ListUser = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GettUsers())
    }, [])
    const list = useSelector(State => State.UserReducer.Usrs)
    console.log(list)
    return (
        <div>
            {
                list.map(user => <CardUser user={user} />)
            }
        </div>
    )
}