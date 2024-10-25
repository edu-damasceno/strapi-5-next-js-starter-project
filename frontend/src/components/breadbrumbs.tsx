import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsData {
  items: BreadcrumbItem[];
}

export function Breadcrumbs(data: Readonly<BreadcrumbsData>) {
  if (!data) return null;
  const { items } = data;

  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="container my-4 text-sm">
      <ol className="inline-flex list-none p-0">
        <li className="flex items-center">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="mx-2 size-4 text-gray-400" />
            {index === items.length - 1 ? (
              <span className="text-gray-700" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="text-gray-500 hover:text-gray-700">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
