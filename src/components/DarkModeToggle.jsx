import React from 'react'

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  // TODO: Implement dark mode toggle logic

  return (
    <button onClick={toggleDarkMode}>
       {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button> 
  )
}

export default DarkModeToggle 
