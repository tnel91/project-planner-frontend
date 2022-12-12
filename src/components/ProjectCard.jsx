const ProjectCard = (props) => {
  return (
    <div
      className="project_card border border-success container rounded m-2 p-2"
      onClick={() => props.onClick(props.id)}
    >
      <h4 className="text-primary">{props.name}</h4>
      <p>{`Created by: ${props.owner}`}</p>
    </div>
  )
}

export default ProjectCard
