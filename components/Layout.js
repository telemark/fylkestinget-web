import Head from 'next/head'
import { COMPANY, APP } from '../config'

export default ({ children }) => (
  <div className='container'>
    <Head>
      <meta name='viewport' content='initial-scale=0.8, maximum-scale=0.8, minimum-scale=0.8 user-scalable=no, width=device-width' />
      <link rel='icon' sizes='192x192' href='/static/icons/chrome-touch-icon-192x192.png' />
      <link rel='apple-touch-icon' href='/static/icons/apple-touch-icon-precomposed.png' />
      <link rel='shortcut icon' href='/static/icons/favicon.ico' />
      <title>{COMPANY.name} - {APP.name} - {APP.version}</title>
    </Head>
    { children }
    <style jsx global>
      {`
        body {
          background: #f2f2f2;
          font-family: "Open sans", sans-serif;
          margin: 0;
          padding: 0;
          height: 100%;
          text-align: center;
        }
        h1, h2, h3, h4, h5, h6 {
          font-family: Arial, sans-serif;
        }
        h1 {
          font-weight: 400;
          font-size: 24px;
        }
       h2 {
          -webkit-margin-after: auto;
          font-weight: normal;
        }
        a {
          text-decoration: none;
          color: black;
        }
        .container {
          display: grid;
          grid-template-areas:
            "header header header"
            ". content ."
            "footer footer footer";
          grid-template-columns: 1fr 2fr 1fr;
          grid-template-rows: auto 1fr auto;
        }
        .center {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media screen and (max-width: 800px) {
          .container {
            grid-template-columns: 3% 1fr 3%;
          }
      `}
    </style>
  </div>
)
