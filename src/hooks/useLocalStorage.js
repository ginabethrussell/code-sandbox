import { useState } from 'react';

export default function useLocalStorage(defaultData){
    const [user, setUser] = useState(()=>{
        if (window.localStorage.getItem('testUser') !== null){
            return JSON.parse(window.localStorage.getItem('testUser'));
        }
        return defaultData;
    })
    return [user, setUser]
}

