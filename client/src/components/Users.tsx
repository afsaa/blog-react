import React from "react";
import { connect } from "react-redux";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";
import DeleteIcon from "@material-ui/icons/Delete";
import { deleteUserAxiosRequest } from "../api";
import { deleteUserRequest } from "../actions";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            background: "transparent",
        },
        title: {
            margin: theme.spacing(4, 0, 2),
        },
    })
);

function Users({
    users,
    token,
    deleteUserRequest,
}: {
    users?: Array<any>;
    token?: string;
    deleteUserRequest: Function;
}) {
    const classes = useStyles();

    const handleDelete = (userId: any) => {
        deleteUserAxiosRequest(token, userId)
            .then((result) => {
                console.log(result);
                deleteUserRequest(userId);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <h1>Usuarios</h1>
            <div className={classes.root}>
                <List dense={true}>
                    {users?.map((user) => {
                        return (
                            <ListItem key={user.id}>
                                <ListItemAvatar>
                                    <Avatar>
                                        <PersonIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={user.name}
                                    secondary={user.email}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton
                                        edge="end"
                                        aria-label="delete"
                                        onClick={() => handleDelete(user.id)}
                                    >
                                        <DeleteIcon color="action" />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        );
                    })}
                </List>
            </div>
        </>
    );
}

const mapStateToProps = (state: any) => {
    return {
        token: state.token,
    };
};

const mapDispatchToProps = {
    deleteUserRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
