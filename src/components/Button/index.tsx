import toHyphenCase from "../../utils/toHypenCase";

import { StyledButton } from "./styles";
import { ButtonProps } from "./types";

const Button = ({ children, id }: ButtonProps) => (
  <StyledButton data-testid={toHyphenCase(id)}>{children}</StyledButton>
);

export default Button;
