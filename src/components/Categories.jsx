import React, { memo, useState } from 'react';

const Categories = memo(function Categories({ items, onClickCategory }) {
  const [activeClass, setActiveClass] = useState(0);

  const onSelectItem = (index) => {
    setActiveClass(index);
    onClickCategory(index);
  };

  return (
    <div className="categories">
      <ul>
        {items &&
          items.map((name, index) => (
            <li
              className={activeClass === index ? 'active' : ''}
              onClick={() => onSelectItem(index)}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
