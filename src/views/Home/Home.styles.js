const styles = theme => ({
  content: {
    paddingTop: 25,
    paddingBottom: 25,
    minHeight: '20vh'
  },
  searchPaper: {
    padding: '2px 4px',
    display: 'flex',
    elevation: 0,
    width: '100%',
  },
  cgrLogo: {
    marginRight: 7,
    width: 75,
    height: 75
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  root: {
    minHeight: '75vh'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  main: {
    textAlign: 'center',
    display: 'inline',
  },
  menuRoot: {
    paddingTop: 50,
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    textShadow: '0px 2px 2px #222222'
  },
  stats: {
    marginTop: 5,
    marginBottom: 5,
    textAlign: 'center',
    display: 'inline',
    color: 'grey'
  },
  statsNumber: {
    color: '#AAA',
  },
  footer: {
    paddingTop: 25,
    paddingBottom: 25,
    textAlign: 'left',
    backgroundColor: theme.palette.primary.dark,
    minHeight: '30vh'
  },
  footerBlock: {
    fontSize: 'small',
  },
  footerItemTitle: {
    paddingLeft: 50,
    color: theme.palette.secondary.contrastText
  },
  footerItem: {
    paddingLeft: 50,
    color: theme.palette.secondary.contrastText
  },
  errorSnackbar: {
    backgroundColor: theme.palette.error.dark,
    color: 'white'
  },
});

export default styles;
