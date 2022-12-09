import React from "react";

import { Button } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { socialLinks } from "../information/information";

const SocialLinks = () => {
    return (
        <div className="btn-wrapper text-lg">

            {socialLinks.github && (
                <Button
                    className="btn-icon-only rounded-circle ml-1"
                    href={socialLinks.github}
                    rel="noopener"
                    aria-label="Github"
                    target="_blank"
                >
                    <span className="btn-inner--icon" style={{ backgroundColor: '#222222'}}>
                        <GitHubIcon className='homepage-social-icons' />
                    </span>
                </Button>
            )}
            {socialLinks.linkedin && (
                <Button
                    className="btn-icon-only rounded-circle ml-1"
                    rel="noopener"
                    aria-label="Linkedin"
                    href={socialLinks.linkedin}
                    target="_blank"
                >
                    <span className="btn-inner--icon" style={{ backgroundColor: '#1da1f2'}}>
                        <LinkedInIcon className='homepage-social-icons' />
                        {/* <i className="fa fa-linkedin" /> */}
                    </span>
                </Button>
            )}
            {socialLinks.instagram && (
                <Button
                    className="btn-icon-only rounded-circle ml-1"
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener"
                    aria-label="Instagram"
                >
                    <span className="btn-inner--icon" style={{ backgroundColor: '#e4405f'}}>
                        <InstagramIcon className='homepage-social-icons' />
                    </span>
                </Button>
            )}
            {socialLinks.facebook && (
                <Button
                    className="btn-icon-only rounded-circle ml-1"
                    href={socialLinks.facebook}
                    target="_blank"
                    rel="noopener"
                    aria-label="Facebook"
                >
                    <span className="btn-inner--icon" style={{ backgroundColor: '#3b5999'}}>
                        <FacebookIcon className='homepage-social-icons' />
                    </span>
                </Button>
            )}
        </div>
    );
};

export default SocialLinks;
