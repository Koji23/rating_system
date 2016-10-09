import { renderComponent , expect } from '../test_helpers.js';
import App from './App.jsx';

describe('App' , () => {
  let component;
  beforeEach(() => {
   component = renderComponent(App);
  });

  it('shows a container element', () => {
    expect(component.hasClass('container')).to.equal(true);
  });
});