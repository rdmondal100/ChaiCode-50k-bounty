import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


// calculate the percentage 
const parseNumber = (price) => parseInt(price.replace(/[^0-9]/g, ""), 10);
export const getSavePercent = (regular, discounted) => {
	const r = parseNumber(regular);
	const d = parseNumber(discounted);
	if (!r || !d) return null;
	const percent = Math.round(((r - d) / r) * 100);
	return `Save ${percent}%`;
};

export const getCourseBadge = (rating) => {
  if (rating >= 4.5) return { label: "Top Rated", color: "bg-green-100 text-green-800" };
  if (rating >= 4.0) return { label: "Popular", color: "bg-yellow-100 text-yellow-800" };
  if (rating >= 3.5) return { label: "Recommended", color: "bg-blue-100 text-blue-800" };
  return { label: "New Course", color: "bg-gray-100 text-gray-800" };
};