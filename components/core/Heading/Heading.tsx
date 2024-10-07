import React from 'react';
import cn from 'classnames';

interface HeadingProps {
  title: string;
  className?: string;
}

export const Heading = ({ title, className }: HeadingProps) => {
  return (
    <h1 className={cn('font-bold text-[25px]', className)}>
      {title}
    </h1>
  );
};
