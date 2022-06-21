import { StacksIcons } from '../../../data/constants/stack-icons.constant';

interface IconFunctionProps {
  stack: string;
}

export const StackIcon = ({ stack }: IconFunctionProps) => {
  const { icon } = StacksIcons[stack];
  return icon;
};
