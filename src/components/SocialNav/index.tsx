import Button from "../Button";
import data from "./data";
import { Wrapper, Logo, ButtonWrapper } from "./styles";

const SocialNav = () => {
  return (
    <Wrapper data-testid="social-nav">
      <Logo>Logo</Logo>
      <ButtonWrapper>
        {data.map((item, index) => (
          <Button key={index} id={`${item}-button`}>
            {item}
          </Button>
        ))}
      </ButtonWrapper>
    </Wrapper>
  );
};

export default SocialNav;
