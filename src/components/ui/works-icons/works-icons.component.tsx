import { works } from '../../../data/constants/works.constants';
import { Icon } from './works-icons.styles';

export const WorksIcons = () => {
  return (
    <>
      {works.map(({ src, name }) => {
        return <Icon src={src} alt={name} key={src} />;
      })}
    </>
  );
};
