import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaYahoo,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import Crousel from "../carousel/Crousel";
import { AuthContext } from "../../../Context/authContext/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const RightSideNav = () => {
  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="sticky-top">
      <ButtonGroup vertical>
        <Button
          onClick={handleGoogleSignIn}
          className="mb-3"
          variant="outline-primary"
        >
          <FaGoogle></FaGoogle> Login with Google
        </Button>

        <Button variant="outline-dark">
          <FaGithub></FaGithub> Login With Github
        </Button>
      </ButtonGroup>

      <div className="mt-3">
        <h2 className="text-danger">find us On</h2>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaYoutube></FaYoutube>YouTube
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaYahoo></FaYahoo> Yahoo
          </ListGroup.Item>
        </ListGroup>
      </div>

      <div>
        <Crousel></Crousel>
      </div>
    </div>
  );
};

export default RightSideNav;
