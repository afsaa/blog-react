import React from "react";
import AppBar from "../components/AppBar";
import Posts from "../components/Posts";
import Users from "../components/Users";
import { connect } from "react-redux";

type loggedInUser = {
  id: number;
  name: string;
  email: string;
  phoneNumber: number;
  userType: string;
  createdAt: string;
  updatedAt: string;
};

function Home({
  loggedInUser,
  users,
  posts,
}: {
  loggedInUser?: loggedInUser;
  users?: Array<any>;
  posts?: Array<any>;
}) {
  return (
    <>
      <AppBar />
      {loggedInUser?.userType === "Administrador" ? <Users /> : <Posts />}
    </>
  );
}

const mapStateToProps = (state: any) => {
  return {
    loggedInUser: state.loggedInUser,
    users: state.users,
    posts: state.posts,
  };
};

export default connect(mapStateToProps, null)(Home);
