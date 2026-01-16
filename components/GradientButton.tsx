import React from 'react';
import Link from 'next/link';

interface GradientButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}

export default function GradientButton({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  external = false,
  className = '',
}: GradientButtonProps) {
  const baseStyles = 'font-sans font-semibold transition-all duration-300 inline-block text-center';

  const variantStyles = {
    primary: 'bg-gradient-purple-orange text-white hover:shadow-gradient-glow hover:scale-105 shadow-soft-md',
    secondary: 'bg-gradient-purple-pink text-white hover:shadow-soft-lg hover:scale-105 shadow-soft',
    outline: 'bg-transparent text-purple-primary border-2 border-purple-primary hover:bg-purple-primary hover:text-white shadow-soft hover:shadow-soft-md',
  };

  const sizeStyles = {
    sm: 'px-6 py-2.5 text-sm rounded-pill',
    md: 'px-8 py-3.5 text-base rounded-pill',
    lg: 'px-10 py-4 text-lg rounded-pill',
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
