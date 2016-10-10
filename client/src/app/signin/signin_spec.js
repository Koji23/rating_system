import { renderComponent , expect } from '../../test_helpers.js';
import Signin from './Signin.jsx';

describe('Signin' , () => {
  let component;
  beforeEach(() => {
   component = renderComponent(Signin);
  });

  it('shows a container element', () => {
    expect(component.hasClass('signin')).to.equal(true);
  });
});