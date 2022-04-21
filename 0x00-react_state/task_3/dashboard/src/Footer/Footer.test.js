/**
 * @jest-environment jsdom
 */
import { assert } from 'chai';
import { shallow, mount } from '../../config/setupTests';
import Footer from './Footer';
import AppContext, { user } from '../App/AppContext';

describe('<Footer />', () => {
  it('Footer component renders without crashing', () => {
    shallow(<Footer />);
  });
  it('Component renders the text “Copyright”', () => {
    const footer = shallow(<Footer />);
    assert.isTrue(footer.find('footer').text().includes('Copyright'));
  });
  it('Component renders contact link when user is logged in', () => {
    const footer = mount(
      <AppContext.Provider
        value={{
          user: { email: 'test@user.com', password: 'pass', isLoggedIn: true },
          logOut: () => {},
        }}
      >
        <Footer />
      </AppContext.Provider>
    );
    assert.equal(footer.find('p#contactLink').length, 1);
  });
  it('Component does not render contact link when user is logged out', () => {
    const footer = mount(
      <AppContext.Provider
        value={{
          user,
          logOut: () => {},
        }}
      >
        <Footer />
      </AppContext.Provider>
    );
    assert.equal(footer.find('p#contactLink').length, 0);
  });
});
