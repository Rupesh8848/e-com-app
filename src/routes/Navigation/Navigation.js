
import React from "react"
import { Outlet , Link} from "react-router-dom"
import { ReactComponent as CrownLogo } from "../../assets/crown.svg"
import { userContext } from "../../Components/Context/Context"
import { CartContext } from "../../Components/Context/Cart.context"
import { signOutUser } from "../../utils/firebase/firebase"
import Cart from "../../Components/Cart-icon/Cart.compnent"
import CartDropDown from "../../Components/CartDropDown/CartDropDown"


import "./navigation.scss"


export default function Navigation(){
  const {cartState, setCartState} = React.useContext(CartContext)


  const {user} = React.useContext(userContext)
  console.log(user)
  async function signOutHandler(){
    await signOutUser()
  }


    return (
            <>
        <div className="navigation">
            <Link className="logo-container" to="/">
          <div >
            <CrownLogo />
          </div>
            </Link>

            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>
                    Shop
                </Link>
                {user?
                  <p className="nav-link" onClick={signOutHandler}>SignOut</p>
                  :
                    <Link className="nav-link" to='/signIn'>
                    SIGN IN
                    </Link>}
                <span onClick={()=>setCartState(oldState=>!oldState)}><Cart/></span>
            </div>
        </div>

        {cartState && <CartDropDown /> }

          <Outlet/>
            </>
      )
}