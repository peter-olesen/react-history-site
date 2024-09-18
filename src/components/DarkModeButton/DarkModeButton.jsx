import { useDarkMode } from '../../contexts/DarkModeContext'

export const DarkModeButton = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode()

    return (
        <button onClick={toggleDarkMode} style={{background: isDarkMode ? '#333': '#fff'}}>{isDarkMode ? 'Dark' : 'Light'}</button>
    )
}