import './search-bar-styles.css'

const SearchBar = ({ searchHeandler, className, placeholder }) => {
  return (
    <div>
      <input 
      className={`search-box ${className}`}
      placeholder={placeholder} 
      type="search" 
      onChange={searchHeandler} />
    </div>
  );
}

export default SearchBar;
