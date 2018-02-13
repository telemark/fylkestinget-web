import { COLORS } from '../config'

export default ({ data, index, adminView, toggleShowForslag, deleteForslag }) => (
  <div>
    <h2>{index + 1}</h2>
    <div>{data.from}</div>
    <div>{data.proposal}</div>
    {adminView === true ? <button data-ref-id={data.refId} onClick={deleteForslag}>Slett</button> : null}
    {adminView === true ? <button data-ref-id={data.refId} data-show-state={data.show} className={data.show === true ? 'isVisible' : ''} onClick={toggleShowForslag}>Vis</button> : null}
    <style jsx>
      {`
        button {
          background-color: white;
          border-radius: 2px;
          color: black;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          padding: 10 px;
          font-size: 20px;
          width: 175px;
          height: 40px;
          margin: 10px;
          cursor: pointer;
        }

        button:focus {
          outline:0;
        }

        button:active {
          outline: 0;
        }

        .isVisible {
          background-color: ${COLORS.color3};
        }
      `}
    </style>
  </div>
)
