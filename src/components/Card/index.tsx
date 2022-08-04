import toHyphenCase from "../../utils/toHypenCase";
import truncate from "../../utils/truncate";
import { Image, DatePosted, Title, Description, Wrapper } from "./styles";
import { CardProps } from "./types";

const Card = ({
  testId,
  description,
  publishDate,
  title,
  urlTitle,
  imgSrc,
}: CardProps) => (
  <Wrapper data-testid={toHyphenCase(testId)} href={toHyphenCase(urlTitle)}>
    <Image src={imgSrc} alt={title} />
    <DatePosted>Published: {publishDate}</DatePosted>
    <Title>{title}</Title>
    <Description>{truncate(description)}</Description>
  </Wrapper>
);

export default Card;
