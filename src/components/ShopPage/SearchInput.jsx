/* eslint-disable react/prop-types */
const SearchInput = ({ searchTerm, handleSearch }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        className="p-2  ring-0 bg-primary rounded md:w-[50%] focus:outline-none focus:ring-0 placeholder:text-secondary placeholder:text-opacity-50"
        placeholder="Search for a product..."
      />
    </div>
  );
};

export default SearchInput;
