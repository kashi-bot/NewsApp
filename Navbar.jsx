import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [selectedCategory, setSelectedCategory] = useState("General");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Set the selected category based on the current URL
    const path = location.pathname.substring(1); // Remove leading '/'
    const validCategories = [
      "General",
      "Business",
      "Entertainment",
      "Health",
      "Science",
      "Sports",
      "Technology",
    ];
    if (validCategories.includes(path)) {
      setSelectedCategory(path);
    } else {
      setSelectedCategory("General");
    }
  }, [location]);

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);
    // Redirect to the selected category
    navigate(`/${selectedCategory}`);
  };

  const handleHomeClick = () => {
    setSelectedCategory("General");
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={handleHomeClick}>
          VariedNews
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/General"
                onClick={handleHomeClick}
              >
                Home
              </Link>
            </li>
          </ul>
          <select
            name="category"
            style={{ border: "none", outline: "none", marginInline: "10px" }}
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="General">General</option>
            <option value="Business">Business</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Health">Health</option>
            <option value="Science">Science</option>
            <option value="Sports">Sports</option>
            <option value="Technology">Technology</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
