import { renderComponent , expect } from '../../test_helpers.js';
import RestaurantsList from './RestaurantsList.jsx';

describe('RestaurantsList' , () => {
  let component;
  beforeEach(() => {
   component = renderComponent(RestaurantsList);
  });

  it('shows a container element', () => {
    expect(component.hasClass('restaurantsList')).to.equal(true);
  });
});