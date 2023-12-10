
import React, { useState, useEffect } from 'react';
import './Category.css'; 
import Card from "../cards/Cards";
import "../cards/Cards.css"


const CategoryList = ({ data }) => {
  const [openCategories, setOpenCategories] = useState([]);
  const [groupedData, setGroupedData] = useState({});

  useEffect(() => {
    const grouped = data.reduce((acc, item) => {
      acc[item.category] = acc[item.category] || [];
      acc[item.category].push(item);
      return acc;
    }, {});

    setGroupedData(grouped);
  }, [data]);

  const toggleCategory = (category) => {
    if (openCategories.includes(category)) {
      setOpenCategories(openCategories.filter((c) => c !== category));
    } else {
      setOpenCategories([...openCategories, category]);
    }
  };

  return (
    <div className="category-list">
      {Object.keys(groupedData).map((category) => (
        <div key={category}>
          <div className={`category-header ${openCategories.includes(category) ? 'open' : ''}`} onClick={() => toggleCategory(category)}>
            <span>{category}</span>
            <span className="arrow">{openCategories.includes(category) ? '▼' : '►'}</span>
          </div>
          {openCategories.includes(category) && (
            <div className="category-content">
              <section id="products-section" className="card-container">
              {groupedData[category].map((item) => (
                // <p key={item.id}>{item.name}</p>
                <Card title={item.title} price={item.price} src={item.thumbnail} />
              ))}
              </section>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
