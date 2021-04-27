import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Categories, SortPopup, PizzaBlock } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';

const categoryNames = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortNames = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' },
];

export default function Home() {
  const items = useSelector(({ pizzas }) => pizzas.items);
  const dispatch = useDispatch();

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSort = useCallback((index) => {
    dispatch(setSortBy(sortNames[index].type));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickCategory={onSelectCategory} items={categoryNames} />
        <SortPopup onClickSort={onSelectSort} items={sortNames} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}
