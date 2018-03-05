import Markdown from 'react-markdown'
import { COLORS } from '../config'
import Button from './Button'

export default ({ data, index, adminView, toggleShowForslag, deleteForslag, large }) => (
  <div className='forslag'>
    <div><h2>{index + 1}</h2></div>
    <div className='author'>av {data.from}</div>
    <div>
      <div style={{whiteSpace: 'pre-wrap'}}>
        <Markdown source={data.proposal} />
      </div>
      {
        adminView &&
          <Button
            dataRefId={data.refId}
            backgroundColor='#c46a6a'
            onClick={deleteForslag}
            value='Slett'
          />
      }
      {
        adminView &&
          <Button
            dataRefId={data.refId}
            backgroundColor={COLORS.color3}
            dataShowState={data.show}
            className={data.show ? 'isVisible' : ''}
            onClick={toggleShowForslag}
            value={data.show ? 'Skjul' : 'Vis'}
          />
      }
    </div>
    <style jsx>
      {`
        .isVisible {
          background-color: ${COLORS.color3};
        }
        .author {
          font-size: ${large ? 'large' : '14px'};
          color: #4c4c4c;
          margin-bottom: 10px;
        }
        h2 {
          margin-after: auto;
         -webkit-margin-after: auto;
        }
        .forslag {
          border-left: 1px solid #d6d6d6;
          margin-left: 20px;
          padding-left: 10px;
          font-size: ${large ? 'large' : '14px'};
        }
      `}
    </style>
  </div>
)
