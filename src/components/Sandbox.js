import React, {useState} from 'react';
import Header from './Header';
import CodeEditor from './CodeEditor';

const initialUserData = {
    username: '',
    email: '',
    password: '', 
    files: []
}
export default function Sandbox() {
    const [user, setUser] = useState(initialUserData);

    
   
    return (
        <div className='sandbox-wrapper'>
            <Header />
            <CodeEditor />
            {/* <div>Download Icon made by <a href="https://www.flaticon.com/authors/mavadee" title="mavadee">mavadee</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            <div>Open, Play, and Girl Icon made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
        </div>
    )
}