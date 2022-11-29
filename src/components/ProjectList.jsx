import { Container, Grid, GridItem } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useCollection } from '../hooks/useCollection';
import ProjectCard from './ProjectCard';

const ProjectList = ({ filterValue }) => {
  const { documents: projects, error, isPending } = useCollection('projects');
  if (isPending) return <p>Waiting</p>;

  const { user } = useContext(AuthContext);

  // console.log(user.uid);

  // if (filterValue === 'mine') {
  //   return
  // } else if (filterValue === 'all') {
  //   return project;
  // } else {
  //   return project.category.value === filterValue;
  // }

  const filteredProjects = projects?.filter((project) => {
    switch (filterValue) {
      case 'mine':
        return project?.assignedUsersList.find((u) => u.id == user.uid);

      case 'development':
      case 'sales':
      case 'marketing':
      case 'design':
        return project.category.value === filterValue;

      default:
        return projects;
    }
  });

  return (
    <Container maxWidth={'container.xl'}>
      {error && <p>{error}</p>}
      <Grid
        templateColumns='repeat(3, 1fr)'
        gap={6}>
        {!isPending &&
          filteredProjects?.map((project) => (
            <GridItem
              key={project.id}
              w='100%'>
              <ProjectCard project={project} />
            </GridItem>
          ))}
      </Grid>
    </Container>
  );
};

export default ProjectList;
