import React from 'react';

interface BrutalCardProps {
  children: React.ReactNode;
  className?: string;
  noBorder?: boolean;
  noPadding?: boolean;
}

export default function BrutalCard({
  children,
  className = '',
  noBorder = false,
  noPadding = false,
}: BrutalCardProps) {
  const baseStyles = 'bg-warm-cream';
  const borderStyles = noBorder ? '' : 'border-3 border-deep-brown shadow-brutal';
  const paddingStyles = noPadding ? '' : 'p-8 md:p-10';

  return (
    <div className={`${baseStyles} ${borderStyles} ${paddingStyles} ${className}`}>
      {children}
    </div>
  );
}
