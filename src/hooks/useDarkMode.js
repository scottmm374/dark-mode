import { useLocalStorage } from './useLocalStorage'
import { useEffect } from 'react'


export function useDarkMode() {
    const [darkMode, setDarkMode] = useLocalStorage(key, false)

    useEffect(() => {
        setDarkMode(darkMode)
        if (darkMode) {
            mode = document.getElementByTagName('body')
            mode.classList.add('dark-mode')
        }else {
            mode.classList.remove('dark-mode')
        }


    }, [key, false])

    return [darkMode, setDarkMode]
}