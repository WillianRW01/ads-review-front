import { useContext } from 'react';
import './styles.css'
import { AuthContext } from '../../auth/context';

export default function LogoutButton() {
  const {logout} =useContext(AuthContext)
  return <button onClick={logout}>Logout</button>;
}
