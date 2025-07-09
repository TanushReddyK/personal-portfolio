import { TypeAnimation } from 'react-type-animation';

const TextEffect= () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Coder',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1500,
        'Data Analyst',
        1500,
        'Data Scientist',
        1500
      ]}
     
      speed={50}
     className='h1'
      repeat={Infinity}
    />
  );
};

export default TextEffect;