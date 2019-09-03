import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import useStyles from '../styles/stepForm'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import recordingService from '../services/recordingServices'
import AdapterLink from './misc/Enlace'
import SearchBar from './misc/SearchBar'
import {upperFirst} from 'lodash'
import GoBack from './misc/GoBack'
import Link from '@material-ui/core/Link'

// import queryString from 'query-string';
import {GoToCreate} from './recordings/Checkout'
// import {desc, stableSort, getSroting} from '../utils/handlingData'

export default function RecordingList() {
  const classes = useStyles();
  // const querySearch = queryString.parse(this.props.location.search)

  const [data, setData] = React.useState([])
  const fetchData = async () => {
    const response = await recordingService.getData()
    setData(response)
  }

  React.useEffect(()=>{fetchData()}, [])
  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
        <Typography component="h1" variant="h4" align="center">
          {'Recordings'}
        </Typography>
        <SearchBar />
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">student&nbsp;A</TableCell>
              <TableCell align="right">student&nbsp;B</TableCell>
              <TableCell align="right">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(row => (
              <TableRow key={row.name}>
                <TableCell scope="row" component={'th'}>
                  <Link color="inherit" component={AdapterLink} to={`/record/${row.id}`}>
                    {upperFirst(row.name)}
                  </Link>
                </TableCell>
                <TableCell align="right">{row.studentA}</TableCell>
                <TableCell align="right">{row.studentB}</TableCell>
                <TableCell align="right">{row.date.split("T")[0]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <GoToCreate/>
      <GoBack />
      </main>
    </React.Fragment>

  );
}