import { HeaderContainer } from './styles';


const Header = () => {
  return (
    <HeaderContainer>
      <nav className='navigation'>
        <ul>
          <li>
              <a href="#home">Home</a>
          </li>
          <li>
              <a href="#projects">
                Projects
              </a>
          </li>
          <li>
              <a href="#about">
                  About
              </a>
            </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
}

export default Header;