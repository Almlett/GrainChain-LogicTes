import React, {useEffect} from 'react';
import propTypes from 'prop-types';
import {Content,OriginalRoom,AcomodatedRoom} from './ShowRoom.styled';
const ShowRoom = ({ response }) => {
	useEffect(() => {
		console.log(response);
	}, [response]);

	return (
		<Content>
			<OriginalRoom>Original</OriginalRoom>
			<AcomodatedRoom>Acomodado</AcomodatedRoom>
		</Content>
	);
};

ShowRoom.propTypes  = {
	response: propTypes.object.isRequired,
};

export default ShowRoom;