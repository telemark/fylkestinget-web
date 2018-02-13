import DropDownMenu from './DropDownMenu'
import { AUTH_URL, COMPANY, COLORS, APP } from '../config'

export default ({ username = false }) => (
  <header>
    <nav className='inner-header'>
      <a href='/'>
        <img style={{ width: '36px' }} src={COMPANY.logo} />
        {COMPANY.name} - {APP.name}
      </a>
      <span>
        <a href='/forslag'>Forslag</a>
      </span>
      <span>
        <a href='/live'>Live</a>
      </span>

      { username
        ? <div className='right-header'>
          <span>
            <a href='/admin' >Admin</a>
          </span>
          <DropDownMenu name={username}>
            <div><a href='/profile'>Profil</a></div>
            <div><a href='/api/logout'>Logg ut</a></div>
          </DropDownMenu>
        </div>
        : <span className='right-header'>
          <a href={AUTH_URL}>Logg inn</a>
        </span>
      }
    </nav>
    <style jsx>
      {`
        header {
          background: ${COLORS.color1};
          grid-area: header;
          box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .2);
          height: 64px;
        }
        .inner-header {
          padding-left: 10px;
          text-align: left;
          line-height: 64px;
          padding-right: 10px;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .inner-header img {
          vertical-align: middle;
          padding-right: 10px;
        }
        .right-header {
          float: right;
          margin-right: 10px;
          width: 200px;
          text-align: right;
        }
      `}
    </style>
  </header>
)
