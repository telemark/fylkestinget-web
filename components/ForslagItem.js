import { COLORS } from '../config'
import Button from './Button'

export default ({ data, index, adminView, toggleShowForslag, deleteForslag }) => (
  <div className='forslag'>
    <div><h2>{index + 1} - {data.from}</h2></div>
    <div>
      <div style={{whiteSpace: 'pre-wrap'}}>{data.proposal}</div>
      {adminView !== undefined && <Button dataRefId={data.refId} backgroundColor='#c46a6a' onClick={deleteForslag} value='Slett' />}
      {adminView !== undefined && <Button dataRefId={data.refId} backgroundColor={COLORS.color3} dataShowState={data.show} className={data.show === true ? 'isVisible' : ''} onClick={toggleShowForslag} value={data.show === true ? 'Skjul' : 'Vis'} />}
    </div>
    <style jsx>
      {`
        .isVisible {
          background-color: ${COLORS.color3};
        }
        .forslag {
          border-left: 1px solid #d6d6d6;
          margin-left: 20px;
          padding-left: 10px;
        }
      `}
    </style>
  </div>
)
