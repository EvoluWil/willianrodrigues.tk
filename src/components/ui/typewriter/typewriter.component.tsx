import TypewriterBase from 'typewriter-effect';

interface TypewriterProps {
  words: string[];
}

export const Typewriter: React.FC<TypewriterProps> = ({ words }) => {
  return (
    <TypewriterBase
      options={{
        strings: words,
        autoStart: true,
        loop: true,
        wrapperClassName: 'typewriter'
      }}
    />
  );
};
