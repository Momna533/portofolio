import React from "react";
import { Link, Element } from 'react-scroll';

function Project(){
    return(
        <>
        <Element  name="projects" data-scroll-to>
        <div className="projects" id="projects">
            <div className="projects_content">
                <h2>My Recent Work</h2>
                <p>Here are a few projects I've worked on recently</p>
                <div className="underline"></div>
                <div className="projects_content_entries">
                <div className="projects_content_entry">
                            <div className="projects_content_entry_img">
                    <img className="projects_content_entry_img_image" src={require("../images/project.webp")} alt="projects_img" />
                 </div>
                 <div className="projects_content_entry_text">
                     <h3>Expense-tracker Project</h3>
                     <h4>Featured Project</h4>
                     <p>Can track your income and expenses and helps you to keep an eye on history 
                     </p>
                     <div className="projects_content_entry_text_links">
                     <a target="_blank" href="https://expense-tracker-4b5c7.web.app/">demo</a>
                     <a target="_blank" href="https://github.com/">github</a>
                     </div>
                 </div>
                 </div>
                 <div className="projects_content_entry">
                            <div className="projects_content_entry_img">
                    <img className="projects_content_entry_img_image" src={require("../images/project.webp")} alt="projects_img" />
                 </div>
                 <div className="projects_content_entry_text">
                 <h3>Cavai-clone Project</h3>
                     <h4>Featured Project</h4>
                     <p>Cavai can manage  adds tremendously and efficiently 
                     </p>
                     <div className="projects_content_entry_text_links">
                     <a target="_blank" href="https://cavai-clone.web.app/">demo</a>
                     <a target="_blank" href="https://github.com/">github</a>
                     </div>
                 </div>
                 </div>
                 <div className="projects_content_entry">
                            <div className="projects_content_entry_img">
                    <img className="projects_content_entry_img_image" src={require("../images/project.webp")} alt="projects_img" />
                 </div>
                 <div className="projects_content_entry_text">
                 <h3>Moded-Portofolio Project</h3>
                     <h4>Featured Project</h4>
                     <p>Moded portofolio having enchanting features
                     </p>
                     <div className="projects_content_entry_text_links">
                     <a target="_blank" href="https://moded-portofolio.web.app/" >demo</a>
                     <a target="_blank" href="https://github.com/">github</a>
                     </div>
                 </div>
                 </div>
                 <div className="projects_content_entry">
                            <div className="projects_content_entry_img">
                    <img className="projects_content_entry_img_image" src={require("../images/project.webp")} alt="projects_img" />
                 </div>
                 <div className="projects_content_entry_text">
                 <h3>instagram-clone Project</h3>
                     <h4>Featured Project</h4>
                     <p>Upload your profile image and login to your desired account
                     </p>
                     <div className="projects_content_entry_text_links">
                     <a target="_blank" href="https://instagram-clone-ef282.web.app/" >demo</a>
                     <a target="_blank" href="https://github.com/">github</a>
                     </div>
                 </div>
                 </div>
                </div>
            </div>
        </div>
        </Element>
        
        </>
    )
}

export default Project;