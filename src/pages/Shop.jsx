// import { useState } from "react";
// import { productData } from "../database/ProductData";
// import SearchInput from "../components/ShopPage/SearchInput";
// import ProductList from "../components/ShopPage/ProductList";
// import CategoryFilter from "../components/ShopPage/CategoryFilter";
// import PriceRangeFilter from "../components/ShopPage/PriceRangeFilter";

// const Shop = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [selectedPriceRange, setSelectedPriceRange] = useState(null);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//   };

//   const handlePriceRangeChange = (range) => {
//     setSelectedPriceRange(range);
//   };

//   const filteredProducts = productData.filter((product) => {
//     const matchesSearch = product.name
//       .toLowerCase()
//       .includes(searchTerm.toLowerCase());
//     const matchesCategory =
//       selectedCategory === "all" || product.category === selectedCategory;
//     const matchesPrice =
//       !selectedPriceRange ||
//       (product.price >= selectedPriceRange.min &&
//         product.price <= selectedPriceRange.max);
//     return matchesSearch && matchesCategory && matchesPrice;
//   });

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Shop</h1>
//       <SearchInput searchTerm={searchTerm} handleSearch={handleSearch} />
//       <CategoryFilter
//         selectedCategory={selectedCategory}
//         handleCategoryChange={handleCategoryChange}
//       />
//       <PriceRangeFilter
//         selectedPriceRange={selectedPriceRange}
//         handlePriceRangeChange={handlePriceRangeChange}
//       />
//       <ProductList filteredProducts={filteredProducts} />
//     </div>
//   );
// };

// export default Shop;

import { useState } from "react";
import { productData } from "../database/ProductData";
import SearchInput from "../components/ShopPage/SearchInput";
import ProductList from "../components/ShopPage/ProductList";
import CategoryFilter from "../components/ShopPage/CategoryFilter";
import PriceRangeFilter from "../components/ShopPage/PriceRangeFilter";

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handlePriceRangeChange = (range) => {
    setSelectedPriceRange(range);
  };

  // Reset filters function
  const handleResetFilters = () => {
    setSearchTerm(""); // Clear search
    setSelectedCategory("all"); // Reset category
    setSelectedPriceRange(null); // Reset price range
  };

  const filteredProducts = productData.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesPrice =
      !selectedPriceRange ||
      (product.price >= selectedPriceRange.min &&
        product.price <= selectedPriceRange.max);
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shop</h1>
      <div className="flex space-x-4"></div>
      <SearchInput searchTerm={searchTerm} handleSearch={handleSearch} />
      <CategoryFilter
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />
      <PriceRangeFilter
        selectedPriceRange={selectedPriceRange}
        handlePriceRangeChange={handlePriceRangeChange}
      />

      {/* Reset Filters Button */}
      <button
        className="bg-red-500 text-white px-4 py-2 mt-4 rounded"
        onClick={handleResetFilters}
      >
        Clear All Filters
      </button>

      <ProductList filteredProducts={filteredProducts} />
    </div>
  );
};

export default Shop;
