import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

const categoryNames = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortNames = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' },
];

export default function Home() {
  const dispatch = useDispatch();
  const { items, isLoaded } = useSelector(({ pizzas }) => pizzas);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(fetchPizzas());
  }, [category, sortBy]);

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
        {isLoaded
          ? items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
          : Array(12)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
}
