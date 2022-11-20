import React from 'react'
import { onAuthStateChangeListener, signOutUser } from '../../utils/firebase/firebase'


export const userContext = React.createContext({
    user:null,
    setUser:()=> null,
})


export function UserProvider({children}) {
    const [user, setUser] = React.useState(null) 
    
    React.useEffect(()=>{
      const unsubscribe = onAuthStateChangeListener((user)=>{
        setUser(user)
      })
      return unsubscribe
    },[])


  return (
    <userContext.Provider value={{user,setUser}}>{children}</userContext.Provider>
  )
}
