import styled from "styled-components";

const NavContainer = styled.div`
  border-bottom: 5px;
`;

const HeroImage = styled.img`
  height: 5em;
  width: 5em;

  flex-direction: end;
  display: flex;
`;

const NavBar = () => {
  return (
    <>
      <NavContainer>
        <HeroImage
          id="img-lg"
          src="https://i.pinimg.com/736x/69/34/73/693473a49f5048dd83077eb82b4513f9.jpg"
          alt="house-logo"
        />
      </NavContainer>
    </>
  );
};

export default NavBar;
