import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
    root: {
        background: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
        margin: "25px 0px",
    },
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
                    height="200"
                    image={post?.image_url}
                    title={post?.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                        {post?.title}
                    </Typography>
                    <Typography
                        variant="body1"
                        color="textSecondary"
                        component="p"
                    >
                        {post?.short_text}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="medium" color="primary">
                    Like
                </Button>
                <Button
                    size="medium"
                    color="primary"
                    component={RouterLink}
                    to={`blog/${post?.slug}`}
                >
                    Leer Más
                </Button>
            </CardActions>
        </Card>
    );
}
