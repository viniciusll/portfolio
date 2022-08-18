import { CardType } from "./card.type";
import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextTitle,
  CardTextBody,
  CardStatWrapper,
  CardStats,
  LinkText
} from "./styles";
import Tilt from "react-parallax-tilt";

export const Card = ({ title, imgUrl, linkRepository, linkWebsite, description }: CardType) => {
  return (
    <Tilt style={{ maxWidth: '300px', }}>
      <CardWrapper>
        <CardImage background={imgUrl} />
        <CardTextWrapper>
          <CardTextTitle>{title}</CardTextTitle>
          <CardTextBody>
            {description}
          </CardTextBody>
        </CardTextWrapper>
        <CardStatWrapper>
          <CardStats>
            <LinkText href={linkWebsite}>website</LinkText>
          </CardStats>
          <CardStats>
            <LinkText href={linkRepository}>github</LinkText>
          </CardStats>
        </CardStatWrapper>
      </CardWrapper>
    </Tilt>
  );
};
