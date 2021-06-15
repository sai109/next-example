import { Typography, Paper, Grid } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Link from 'next/link';
import Moment from 'react-moment';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			padding: theme.spacing(2),
		},
	})
);

const BlogItem = ({ id, date, title }): JSX.Element => {
	const styles = useStyles();

	return (
		<Grid item>
			<Link href={`/posts/${id}`}>
				<Paper>
					<div className={styles.root}>
						<Typography variant='h6'>{title}</Typography>
						<Typography color='textSecondary'>
							<Moment format={'MMMM d, YYYY'} date={date} />
						</Typography>
						<Typography></Typography>
					</div>
				</Paper>
			</Link>
		</Grid>
	);
};

export default BlogItem;