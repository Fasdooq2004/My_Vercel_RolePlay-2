import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = "px-6 py-3 rounded-[4px] font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider text-xs sm:text-sm";

  const variants = {
    primary: "bg-gradient-to-r from-purple-600 to-purple-500 text-white border border-purple-500/50 hover:border-purple-400 hover:shadow-glow hover:from-purple-500 hover:to-purple-400",
    secondary: "bg-zinc-900/80 text-zinc-300 border border-zinc-700 hover:bg-zinc-800 hover:text-white hover:border-zinc-500",
    outline: "bg-transparent text-purple-500 border border-purple-900/60 hover:border-purple-500 hover:bg-purple-950/10 hover:text-purple-400 hover:shadow-glow-sm",
    danger: "bg-red-950/20 text-red-500 border border-red-900/50 hover:bg-red-900/40 hover:border-red-700",
    ghost: "bg-transparent text-zinc-500 hover:text-purple-400 hover:bg-white/5"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};