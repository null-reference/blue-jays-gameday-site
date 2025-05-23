import Image from 'next/image';

interface BlueJaysLogoProps {
  className?: string;
}

const BlueJaysLogo = ({ className }: BlueJaysLogoProps) => {
  return (
    <Image
      src="/logo-blue-jays-primary-250x216-trans.png"
      alt="Blue Jays logo"
      width={250}
      height={216}
      className={className}
      style={{ width: '250px', height: 'auto' }}
    />
  );
};

export default BlueJaysLogo;
