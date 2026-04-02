import React, { useMemo } from 'react';
import { cn } from '../../../lib/utils';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import './Pagination.css';

export const DOTS = '...';

const range = (start: number, end: number) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export interface PaginationProps {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className?: string;
  size?: '1' | '2';
  color?: 'brand' | 'gray';
}

const Pagination: React.FC<PaginationProps> = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
  size = '2',
  color = 'brand',
}) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5;

    /*
      Case 1:
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    /*
    	Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
    */
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    /*
      We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
    */
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    /*
    	Case 2: No left dots to show, but rights dots to be shown
    */
    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    /*
    	Case 3: No right dots to show, but left dots to be shown
    */
    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    /*
    	Case 4: Both left and right dots to be shown
    */
    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange ? paginationRange[paginationRange.length - 1] : 0;

  return (
    <nav
      className={cn(
        'mms-pagination-root',
        `mms-pagination-size-${size}`,
        `mms-pagination-color-${color}`,
        className
      )}
    >
      {/* Left navigation arrow */}
      <button
        className={cn('pagination-item arrow', currentPage === 1 && 'disabled')}
        onClick={onPrevious}
        disabled={currentPage === 1}
      >
        <RiArrowLeftSLine className="pagination-icon" />
      </button>

      {paginationRange?.map((pageNumber, idx) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <span key={`dots-${idx}`} className="pagination-item dots">&#8230;</span>;
        }

        // Render our Page Pills
        return (
          <button
            key={`page-${pageNumber}`}
            className={cn(
              'pagination-item',
              pageNumber === currentPage && 'active'
            )}
            onClick={() => onPageChange(pageNumber as number)}
          >
            {pageNumber}
          </button>
        );
      })}

      {/*  Right navigation arrow */}
      <button
        className={cn('pagination-item arrow', currentPage === lastPage && 'disabled')}
        onClick={onNext}
        disabled={currentPage === lastPage}
      >
        <RiArrowRightSLine className="pagination-icon" />
      </button>
    </nav>
  );
};

export default Pagination;
