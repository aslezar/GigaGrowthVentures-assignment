import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

//CSS
import './global.css';

//ENV VARS
const client_id =
	'451848493009-22s0o4k44u743v4hmikrsbh2f1ij5ln1.apps.googleusercontent.com';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<GoogleOAuthProvider clientId={client_id}>
				<App />
			</GoogleOAuthProvider>
		</BrowserRouter>
	</React.StrictMode>
);
