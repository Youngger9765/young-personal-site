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
  gradient = false,
}: GlassCardProps) {
  const baseStyles = 'backdrop-blur-glass bg-white/80 rounded-2xl shadow-glass border border-white/20';
  const hoverStyles = hover ? 'hover:shadow-soft-lg hover:scale-[1.02] transition-all duration-300' : '';
  const gradientStyles = gradient ? 'bg-gradient-to-br from-white/90 to-purple-primary/10' : '';

  return (
    <div className={`${baseStyles} ${hoverStyles} ${gradientStyles} ${className}`}>
      {children}
    </div>
  );
}
