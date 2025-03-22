import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export function ServiceCard({ title, description, Icon }: ServiceCardProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-base text-gray-500">{description}</p>
    </div>
  );
}