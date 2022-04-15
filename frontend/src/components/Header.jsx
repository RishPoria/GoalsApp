import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import HeaderLogo from './HeaderLogo.png'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>
          {
            <img src={HeaderLogo} className='headerlogo' alt='GoalSetter' />
          }
        </Link>
      </div>
      <ul>
        { user ? (
          <li>
            <button className='btn' onClick={onLogout}>
              <LogoutIcon /> Logout
            </button> 
          </li>
          ) : (
          <>
            <li>
              <Link to='/login'>
                <AccountCircleIcon /> Login
              </Link> 
            </li>
            <li>
              <Link to='/register'>
                <PersonAddIcon /> Register
              </Link>
            </li>
          </>
          )
        }
      </ul>
    </header>
  )
}

export default Header