import React, { useState } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';
import _ from 'lodash';
import {
	Button,
	Select,
	MenuItem,
	InputLabel,
	FormControl,
	FormHelperText,
	Typography,
	Grid,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Layout from '../components/Layout';
import theme from '../libs/theme';

if (typeof Highcharts === 'object') {
	HighchartsExporting(Highcharts);
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		grid: {
			marginTop: theme.spacing(1),
		},
	})
);

const Chart = (props: HighchartsReact.Props) => {
	console.log(theme.palette.primary.main);
	const styles = useStyles();
	const chartTitle = 'Test chart';
	const data = [1, 2, 3, 6, 8, 10, 14, 67];

	const [option, setOption] = useState<string>('');

	const [options, setOptions] = useState<Highcharts.Options>({
		title: {
			text: chartTitle,
		},
		series: [
			{
				type: 'line',
				data,
				color: theme.palette.primary.main,
			},
		],
	});

	const stockOptions: Highcharts.Options = {
		title: {
			text: 'My stock chart',
		},
		series: [
			{
				type: 'line',
				data: [1, 2, 1, 4, 3, 6, 7, 3, 8, 6, 9],
				color: theme.palette.primary.main,
			},
		],
	};

	const updateSeries = array => {
		setOptions((prevOptions: Highcharts.Options) => ({
			...prevOptions,
			series: [
				{
					type: 'line',
					data: array,
					color: theme.palette.primary.main,
				},
			],
		}));
	};

	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setOption(event.target.value as string);
	};

	return (
		<Layout>
			<Typography variant='h4' component='h2'>
				Charts
			</Typography>
			<Typography>
				This page is where I have constructed some stuff to have a play about
				with Highcharts to display graphs.
			</Typography>
			<FormControl>
				<InputLabel id='climate-scenario'>Climate scenario</InputLabel>
				<Select
					value={option}
					onChange={handleChange}
					labelId='climate-scenario'
				>
					<MenuItem value='+0.5℃'>+0.5℃</MenuItem>
					<MenuItem value='+1.0℃'>+1.0℃</MenuItem>
					<MenuItem value='+1.5℃'>+1.5℃</MenuItem>
					<MenuItem value='+2.0℃'>+2.0℃</MenuItem>
				</Select>
				<FormHelperText>
					Select the scenario you want to visualise
				</FormHelperText>
			</FormControl>
			<Grid container spacing={2} className={styles.grid}>
				<Grid xs={12} md={8}>
					<HighchartsReact
						highcharts={Highcharts}
						options={options}
						{...props}
						updateArgs={[true, true, true]}
					/>
					<Button
						variant='contained'
						onClick={() => updateSeries(_.shuffle(data))}
						style={{
							marginBottom: theme.spacing(2),
						}}
					>
						Change data
					</Button>
				</Grid>
				<Grid xs={12} md={4}>
					<HighchartsReact
						highcharts={Highcharts}
						constructorType={'stockChart'}
						options={stockOptions}
					/>
				</Grid>
			</Grid>
		</Layout>
	);
};

export default Chart;
