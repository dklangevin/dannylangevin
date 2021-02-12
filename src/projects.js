import React from "react"
import Thumbnail from './thumbnail.js';
import projects_thumbnail from './images/projects.webp';
 
function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>i
      <Thumbnail
        link=""
        image={projects_thumbnail}
        title='Senior Design'
        category=""
      />
    </div>
  )
}
 
export default Projects; 
