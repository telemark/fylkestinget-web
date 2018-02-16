import { COLORS } from '../config'
import Button from './Button'

export default ({ data, index, adminView, toggleShowForslag, deleteForslag }) => (
  <div>
    <h2>{index + 1}</h2>
    <div>{data.from}</div>
    <div>{data.proposal}</div>
    {adminView !== undefined && <Button dataRefId={data.refId} backgroundColor='#c46a6a' onClick={deleteForslag} value='Slett' />}
    {adminView !== undefined && <Button dataRefId={data.refId} dataShowState={data.show} className={data.show === true ? 'isVisible' : ''} onClick={toggleShowForslag} value={data.show === true ? 'Skjul' : 'Vis'} />}
    <style jsx>
      {`
        .isVisible {
          background-color: ${COLORS.color3};
        }
      `}
    </style>
  </div>
)
