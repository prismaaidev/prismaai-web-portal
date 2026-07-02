import React from 'react';

interface TitleProps {
  mainTitle: string;
  subtitle?: string;
  badge?: string;
}

export default function SectionTitle({ mainTitle, subtitle, badge }: TitleProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto pb-10 pt-25">
      {badge && (
        <span className="mb-3 px-3 py-1 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full dark:bg-blue-900/30 dark:text-blue-400">
          {badge}
        </span>
      )}
      
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-white">
        {mainTitle}
      </h2>
      
      {subtitle && (
        <p className="mt-4 px-4 text-lg text-gray-600 dark:text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}
