import { Work } from '../../../data/models/work.model';
import { translate } from '../../../utils/translate.util';
import { Icon } from './works-icons.styles';

export const WorksIcons = () => {
  return (
    <>
      {translate('work.works').map(({ src, name }: Work) => {
        return <Icon src={src} alt={name} key={src} />;
      })}
    </>
  );
};
