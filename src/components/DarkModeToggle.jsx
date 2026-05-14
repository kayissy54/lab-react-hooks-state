import React from 'react'

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  // TODO: Implement dark mode toggle logic

  return (
    <button onClick={toggleDarkMode}>
       Toggle {darkMode ? 'Light' : 'Dark'}
    </button> 
  )
}

export default DarkModeToggle 
