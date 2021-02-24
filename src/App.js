import {ChatEngine} from 'react-chat-engine';

import './App.css';
import ChatFeed from "./component/ChatFeed";
import LoginForm from "./component/LoginForm";

const projectID = 'dc27f96d-b256-401e-84cf-e8fe401d2269';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;
    return (
        <ChatEngine
            height="100vh"
            projectID={projectID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;