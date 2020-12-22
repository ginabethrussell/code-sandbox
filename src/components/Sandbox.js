import React, {useEffect} from 'react';
import CodeEditor from './CodeEditor';
import useLocalStorage from '../hooks/useLocalStorage';

const initialUserData = {
    username: '',
    email: '',
    password: '', 
    files: []
}
export default function Sandbox() {
    const [user, setUser] = useLocalStorage(initialUserData);

    useEffect(()=> {
        console.log(user)
    }, [])
    console.log(user);
    const saveFile = (newFileObj) => {
        setUser({
            ...user, 
            files: [...user.files, newFileObj]
        })
    }

    const logOutUser = () => {
        window.localStorage.setItem([user.username], JSON.stringify(user));
        setUser(initialUserData);
    }
  
    return (
        <div className='sandbox-wrapper'>
            <CodeEditor user={user.username} saveFile={saveFile} logOutUser={logOutUser} files={user.files}/>
            {/* <div>Download Icon made by <a href="https://www.flaticon.com/authors/mavadee" title="mavadee">mavadee</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            <div>Open and Girl Icon made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
        </div>
    )
}