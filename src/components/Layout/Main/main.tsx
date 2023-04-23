import { MainProps } from './main.types';
import { Container, MainContainer } from './main.styles';

export function Main({ children }: MainProps) {
  return (
    <MainContainer>
      <Container>{children}</Container>
    </MainContainer>
  );
}
