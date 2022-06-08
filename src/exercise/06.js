// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameRef = React.useRef()
  const [error, setError] = React.useState(null)
  const [username, setUserName] = React.useState("");
  const handleSubmit = event => {
    // const {value} = usernameRef.current
    onSubmitUsername(username)

    event.preventDefault()
  }

  const handleChange = event => {
    const {value} = event.target
    // const isLowerCase = value => value === value.toLowerCase()
    // setError(isLowerCase(value) ? null : 'Username must be lowercase')
    setUserName(value.toLowerCase())
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          onChange={e => handleChange(e)}
          type="text"
          id="username"
          value={username}
        />
        <div role="alert" style={{color: 'red'}}>
          {error}
        </div>
      </div>
      <button type="submit" disabled={error}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
