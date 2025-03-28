import styled from "styled-components";
import { BodyMedium } from "../styles/CombinedFontStyles";
import { Form, FormInput, FormButton } from "../styles/FormStyles";

const NewsLetter = () => {
  // const [email, setEmail] = useState('')

  return (
    <NewsLetterContainer>
      <FlexOne>
        <BodyMedium color="var(--color-black)">
          Subscribe to our newsletter for exclusive offers and updates on our
          latest products
        </BodyMedium>
      </FlexOne>
      <Form>
        <FormInput type="email" placeholder="Your e-mail..." required />
        <FormButton type="submit">Subscribe</FormButton>
      </Form>
    </NewsLetterContainer>
  );
};

export default NewsLetter;

/* ----------STYLES---------- */

const NewsLetterContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 390px;
  padding: 1rem;
  align-items: center;
  gap: 1rem;
  background: var(--color-white);
  margin-top: auto;
`;

const FlexOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  text-align: center;
`;
