import React, { useState } from 'react';

const Home = () => {
	const [file, setFile] = useState(null);

	const handleFile = (e) => {
		setFile(e.target.files[0]);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('file', file);
		fetch('http://localhost:4000/upload/', {
			method: 'POST',
			body: formData,
		})
			.then((res) => res.json())
			.then((data) => console.log(data))
			.catch((err) => console.log(err));
	};

	return <>Home
		<input type="file" onChange={handleFile} />
		<button onClick={handleSubmit}>Submit</button>
	</>;
};

export default Home;
