
import { Outlet , Link} from "react-router-dom"
import { ReactComponent as CrownLogo } from "../../assets/crown.svg"
import "./navigation.scss"
export default function Navigation(){
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
                <Link className="nav-link" to='/signIn'>
                    SIGN IN
                </Link>

            </div>
        </div>

          <Outlet/>
            </>
      )
}