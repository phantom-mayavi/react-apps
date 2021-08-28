import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGoogle,
    faFacebook,
    faTwitter,
    faInstagram,
    faPinterest,
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
    return (
        <div class="social-container">
            <FontAwesomeIcon icon={faTwitter}  />&nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon icon={faFacebook}  />&nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon icon={faInstagram} />
            <br/>
            <FontAwesomeIcon icon={faPinterest} />&nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon icon={faGoogle} />

        </div>
      );
}