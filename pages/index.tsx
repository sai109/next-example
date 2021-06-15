import Layout, { siteTitle } from '../components/Layout';
import { Grid, Typography } from '@material-ui/core';
import BlogItem from '../components/blog/BlogItem';

import { getSortedPostsData } from '../libs/posts';
import Moment from 'react-moment';

export const getStaticProps = async () => {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
};
const Home = ({ allPostsData }) => {
	return (
		<Layout>
			<Typography variant='h4'>My Posts</Typography>
			<Grid container spacing={2} direction='column'>
				{allPostsData.map(({ id, date, title }) => (
					<BlogItem id={id} date={date} title={title} />
				))}
			</Grid>
		</Layout>
	);
};

export default Home;
