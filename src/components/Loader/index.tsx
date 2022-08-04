import { Wrapper, LoaderContent, LoaderIcon } from "./styles";

const Loader = () => (
  <Wrapper data-testid="loader">
    <LoaderContent>
      <LoaderIcon />
      <LoaderIcon />
      <LoaderIcon />
    </LoaderContent>
  </Wrapper>
);

export default Loader;
