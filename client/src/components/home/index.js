import React, {useState} from 'react';
import UploadFile from '../lightedroom/UploadFile.jsx';
import ShowRoom from '../lightedroom/ShowRoom.jsx';
import {Content} from './index.styled.jsx';

const Home = () => {
	const [response, setResponse] = useState(null);

	return <Content><UploadFile response={response} setResponse={setResponse} /><ShowRoom response={response}/></Content>;
};


export default Home;
