import Image from 'next/image';

interface ProjectSolarLogoProps {
  className?: string;
  variant?: '1' | '2';
}

const ProjectSolarLogo = ({ className, variant }: ProjectSolarLogoProps) => {
  const variants = {
    '1': {
      src: '/logo-ps-1.png',
      width: 180,
      height: 15,
    },
    '2': {
      src: '/logo-ps-2.png',
      width: 300,
      height: 25,
    },
  };

  const { src, width, height } = variants[variant || '1'];

  return (
    <Image src={src} alt="Project Solar logo" width={width} height={height} className={className} />
  );
};

export default ProjectSolarLogo;
