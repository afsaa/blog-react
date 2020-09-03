import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {}
});

type Post = {
    image_url: string;
    long_text: string;
    short_text: string;
    slug: string;
    title: string;
};

export default function PostCard({ post }: { post?: Post }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Whatever"
                    height="150"
                    image={post?.image_url}
                    title={post?.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {post?.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {post?.short_text}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Like
                </Button>
                <Button size="small" color="primary">
                    <Link to={`blog/${post?.slug}`}>Leer Más</Link>
                </Button>
            </CardActions>
        </Card>
    );
}
