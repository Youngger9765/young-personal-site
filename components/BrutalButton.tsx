import React from 'react';
import Link from 'next/link';

interface BrutalButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}

export default function BrutalButton({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  external = false,
  className = '',
}: BrutalButtonProps) {
  const baseStyles = 'font-ui font-bold transition-all duration-200 border-[3px] inline-block';

  const variantStyles = {
    primary: 'bg-amber-gold text-deep-brown border-deep-brown hover:bg-bronze shadow-brutal hover:shadow-brutal-lg hover:translate-x-1 hover:translate-y-1',
    secondary: 'bg-transparent text-deep-brown border-deep-brown hover:bg-deep-brown hover:text-warm-cream shadow-brutal hover:shadow-brutal-lg',
  };

  const sizeStyles = {
    sm: 'px-6 py-3 text-sm rounded-lg',
    md: 'px-10 py-4 text-base rounded-xl',
    lg: 'px-12 py-6 text-lg rounded-xl',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClassName}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}
