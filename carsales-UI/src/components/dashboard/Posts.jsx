import React from 'react'
import Grid from '@mui/material/Grid'
import CssBaseline from '@mui/material/CssBaseline'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from './Drawer'
import Navbar from './Navbar'
import { drawerWidth } from '../Dashboard'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import img from '../../assets/img/backroundpicture.jpg'

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    })
}))

const Container = styled(Grid)({
    padding: '5em 10em',
    display: 'flex',
    justifyContent: 'center',
    gap: '3em',
    flexWrap: 'wrap',
})

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Posts() {
    const [showDrawer, setShowDrawer] = React.useState(false)
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Box sx={{ display: 'flex' }}>

            <CssBaseline />

            <Navbar showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
            <Drawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />

            <Main open={showDrawer}>
                <Container>
                    <Card sx={{ maxWidth: 400 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    R
                                </Avatar>
                            }
                            title="Postare nr 1"
                            subheader="28 iulie 1914"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={img}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Detalii masina
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            {/* <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton> */}
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>Date tip an fabricatie accidente etc:</Typography>
                                <Typography paragraph>
                                    Stare ... dotari
                                </Typography>
                                <Typography paragraph>
                                    Pret pe undeva, etc
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                    <Card sx={{ maxWidth: 400 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    R
                                </Avatar>
                            }
                            title="Postare nr 2"
                            subheader="11 noiembrie 1918"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={img}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                               Detalii masina
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            {/* <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton> */}
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>:</Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                    <Card sx={{ maxWidth: 400 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    R
                                </Avatar>
                            }
                            title="Postare nr 3"
                            subheader="1 decembrie 2021 "
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={img}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                               Detalii masina
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            {/* <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton> */}
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>:</Typography>
                                <Typography paragraph>
                                 asdfasdfasdfasdf
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                    <Card sx={{ maxWidth: 400 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    R
                                </Avatar>
                            }
                            title="Postare nr 4"
                            subheader="18 martie 2023"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={img}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                              Detalii masina
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            {/* <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton> */}
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>:</Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                    <Card sx={{ maxWidth: 400 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    R
                                </Avatar>
                            }
                            title="Postare nr 5"
                            subheader="10 ianuarie 2025"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={img}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Detalii masina
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            {/* <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton> */}
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>:</Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Container>
            </Main>
        </Box>
    )
}
