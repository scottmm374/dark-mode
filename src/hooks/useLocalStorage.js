import { useState } from 'react'

export function useLocalStorage(key, initialValue){
    const [storedValue] = useState(() => {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = newValue => {
        setStoredValue(newValue);
        window.localStorage.setItem(key, JSON.stringify(newValue));
    }
    return [storedValue, setValue];
}