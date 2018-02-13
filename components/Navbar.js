import Link from 'next/link'
import DropDownMenu from './DropDownMenu'
import { AUTH_URL, COMPANY, COLORS, APP } from '../config'

export default ({ username = false }) => (
  <nav>
    <ul className={'left'}>
      <li>
        <a href='/'>
          <img style={{ width: '36px' }} src={COMPANY.logo} />
        </a>
      </li>
      <li>{COMPANY.name} - {APP.name}</li>
    </ul>
    { username
      ? <ul className={'right'}>
        <li><Link href='/forslag'><a>Forslag</a></Link></li>
        <li><Link href='/live'><a>Live</a></Link></li>
        <li>
          <DropDownMenu name={username}>
            <div><a href='/admin'>Administrasjon</a></div>
            <div><a href='/profile'>Profil</a></div>
            <div><a href='/api/logout'>Logg ut</a></div>
          </DropDownMenu>
        </li>
      </ul>
      : <ul className={'right'}>
        <li><Link href='/forslag'><a>Forslag</a></Link></li>
        <li><Link href='/live'><a>Live</a></Link></li>
        <li><Link href={AUTH_URL}><a>Logg inn</a></Link></li>
      </ul>
    }
    <style jsx>{`
      img {
        width: 36px;
      }
      nav {
        grid-area: header;
        display: flex;
        justify-content: space-between;
        background: ${COLORS.color1};
        margin-bottom: 20px;
        height: 60px;
      }
      ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        align-items: center;
      }
      ul.left {
        justify-content: flex-start;
      }
      ul.right {
        justify-content: flex-end;
      }
      li {
        font-size: large;
        margin: 10px;
        align-self: center;
      }
      a {
        text-transform: uppercase;
        text-decoration: none;
        color: black;
      }
      a:hover {
        color: #6AC4AE;
        text-decoration: underline;
      }
    `}
    </style>
  </nav>
)
