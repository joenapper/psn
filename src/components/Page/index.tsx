import GlobalStyles from "../../styles/GlobalStyles";
import MainNav from "../MainNav";
import SocialNav from "../SocialNav";
import { Wrapper } from "./styles";
import { PageProps } from "./types";

const Page = ({ hasError, children }: PageProps) => {
  if (hasError)
    return (
      <p data-testid="error">Page failed to load. Please try again later.</p>
    );

  return (
    <>
      <GlobalStyles />
      <SocialNav />
      <MainNav />
      <Wrapper data-testid="page-content">{children}</Wrapper>
      {/* footer? */}
    </>
  );
};

export default Page;
