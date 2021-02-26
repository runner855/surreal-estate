import styled from "styled-components";

const NavContainer = styled.div`
  border-bottom: 5px;
`;

const HeroImage = styled.img`
  padding: 1.3em;
  height: 3em;
  width: 3em;
  float: left;
`;

const NavBar = () => {
  return (
    <>
      <NavContainer>
        <HeroImage
          id="img-lg"
          src="https://www.pinclipart.com/picdir/big/519-5193111_house-clipart-animated-transparent-house-cartoon-png.png"
          alt="house-logo"
        />
      </NavContainer>
    </>
  );
};

export default NavBar;
