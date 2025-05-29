import { Icon } from '@iconify/react';
import { useState } from 'react';

interface IconWrapperProps {
  icon: string;
  size: number;
}

export default function IconWrapper({ icon, size }: IconWrapperProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <span
      style={{
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 0.2s ease-in-out',
      }}
    >
      <Icon
        icon={icon}
        width={size}
        height={size}
        onLoad={() => setIsLoaded(true)}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
    </span>
  );
}
