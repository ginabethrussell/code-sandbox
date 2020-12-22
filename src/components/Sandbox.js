import React, {useState} from 'react';
import CodeEditor from './CodeEditor';

const initialUserData = {
    username: 'Claire',
    email: 'cer4477@gmail.com',
    password: 'password', 
    files: []
}
export default function Sandbox() {
    const [user, setUser] = useState(initialUserData);

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