import { forwardRef } from 'react';
import Input, { type InputProps } from '../Input/Input';
import { RiSearchLine } from 'react-icons/ri';

export interface SearchProps extends InputProps {
  onClear?: () => void;
}

export const Search = forwardRef<HTMLInputElement, SearchProps>(({
  className,
  leftSlot,
  ...props
}, ref) => {
  return (
    <Input
      ref={ref}
      type="text"
      className={className}
      leftSlot={leftSlot || <RiSearchLine />}
      {...props}
    />
  );
});

Search.displayName = 'Search';

export default Search;
