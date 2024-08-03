import { projects } from '@/constants/data';
import { SingleProject } from './SingleProject';
import { Fragment } from 'react';

const ProjectsList = () => {
	return (
		<div className='grid grid-cols-3 gap-8 lg:grid-cols-2 md:flex md:flex-col'>
			{projects.map(project => (
				<Fragment key={project.id}>
					<SingleProject data={project} />
				</Fragment>
			))}
		</div>
	);
};

export { ProjectsList };
