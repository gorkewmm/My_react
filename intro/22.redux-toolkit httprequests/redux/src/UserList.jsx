import React, { useEffect } from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { getAllUsers } from './features/user/userSlice'
import { store } from './app/store'
import People from './features/user/People'

function UserList() {
    const dispatch = useDispatch()
    const {users} = useSelector((store)=>store.user) //storedaki name'i buraya bagladık
    console.log(users);

    useEffect(()=>{
     dispatch(getAllUsers())
    },[])
    
  return (
    <div>
       {
        users && users.map((user)=>(
          <People key={user.id} kullanici={user} />
        ))
       }
    </div>
  )
}

export default UserList