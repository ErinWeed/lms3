import { Link } from 'react-router-dom'

import './NoMatch.scss'

const NoMatch = () => {
  return (
    <div className="invalid-page text-light text-center p-5">
      <h2>You've requested an invalid page!</h2>
      <p>
        <Link to="/">Return to home</Link>
      </p>
    </div>
  )
}

export default NoMatch
