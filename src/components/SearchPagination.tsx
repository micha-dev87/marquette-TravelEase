import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

interface SearchPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  itemsPerPage: number;
  totalItems: number;
}

const SearchPagination: React.FC<SearchPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
  totalItems,
}) => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const showEllipsis = totalPages > 7;

    if (!showEllipsis) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Toujours afficher la première page
    pages.push(1);

    if (currentPage > 3) {
      pages.push('...');
    }

    // Pages autour de la page courante
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push('...');
    }

    // Toujours afficher la dernière page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex flex-col items-center space-y-4 py-4">
      <div className="flex items-center justify-between w-full">
        <p className="text-sm text-gray-700">
          Affichage de <span className="font-medium">{startItem}</span> à{' '}
          <span className="font-medium">{endItem}</span> sur{' '}
          <span className="font-medium">{totalItems}</span> résultats
        </p>
        <div className="hidden sm:flex sm:items-center">
          <p className="text-sm text-gray-700">
            Page <span className="font-medium">{currentPage}</span> sur{' '}
            <span className="font-medium">{totalPages}</span>
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between w-full sm:justify-center sm:space-x-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="relative inline-flex items-center px-3 py-2 text-sm font-medium rounded-md 
            disabled:opacity-50 disabled:cursor-not-allowed
            text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
        >
          <ChevronLeftIcon className="h-5 w-5" />
          <span className="sr-only">Précédent</span>
        </button>

        <div className="hidden sm:flex sm:items-center">
          {getPageNumbers().map((pageNumber, index) => (
            <React.Fragment key={index}>
              {pageNumber === '...' ? (
                <span className="px-3 py-2">...</span>
              ) : (
                <button
                  onClick={() => onPageChange(pageNumber as number)}
                  className={`relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md mx-1
                    ${currentPage === pageNumber
                      ? 'z-10 bg-blue-600 text-white'
                      : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
                    }`}
                >
                  {pageNumber}
                </button>
              )}
            </React.Fragment>
          ))}
        </div>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="relative inline-flex items-center px-3 py-2 text-sm font-medium rounded-md 
            disabled:opacity-50 disabled:cursor-not-allowed
            text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
        >
          <ChevronRightIcon className="h-5 w-5" />
          <span className="sr-only">Suivant</span>
        </button>
      </div>
    </div>
  );
};

export default SearchPagination; 