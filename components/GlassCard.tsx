import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export default function GlassCard({
  children,
  className = '',
  hover = false,
}: GlassCardProps) {
  const baseStyles = 'bg-white rounded-xl border border-slate-200 shadow-soft';
  const hoverStyles = hover ? 'hover:shadow-soft-md hover:border-slate-300 transition-all duration-200' : '';

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
