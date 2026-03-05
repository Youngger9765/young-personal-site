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
  const baseStyles = 'font-sans font-semibold transition-all duration-200 inline-block text-center rounded-lg';

  const variantStyles = {
    primary: 'bg-accent text-white hover:bg-accent-hover shadow-soft hover:shadow-soft-md',
    secondary: 'bg-stone-900 text-white hover:bg-stone-800 shadow-soft',
    outline: 'bg-transparent text-stone-900 border-2 border-stone-300 hover:border-accent hover:text-accent',
  };

  const sizeStyles = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-3.5 text-lg',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClassName}>
          {children}
        </a>
      );
    }
    return <Link href={href} className={combinedClassName}>{children}</Link>;
  }

  return <button onClick={onClick} className={combinedClassName}>{children}</button>;
}
