import React from 'react';
import PropTypes from 'prop-types';
import {PageContent} from './Content.styled';
const Content = ({ children }) => {
	return (
		<PageContent>
			{children}
		</PageContent>
	);
};

Content.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Content;