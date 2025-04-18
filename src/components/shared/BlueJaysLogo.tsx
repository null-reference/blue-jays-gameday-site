import Image from 'next/image';

interface BlueJaysLogoProps {
  className?: string;
}

const BlueJaysLogo = ({ className }: BlueJaysLogoProps) => {
  return (
    <Image
      src="/logo-blue-jays-primary-1200x1035-trans.png"
      alt="Blue Jays logo"
      width={1200}
      height={1035}
      className={className}
      style={{ width: '250px', height: 'auto' }}
    />
  );
};

export default BlueJaysLogo;
