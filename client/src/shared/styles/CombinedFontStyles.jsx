import styled, { css } from "styled-components";

// Base text styles to be reused across components
const textStyles = css`
  color: ${(props) => props.color || "var(--color-950)"};
  font-family: var(--font-family-basier-square);
`;

const textStylesGray = css`
  color: ${(props) => props.color || "var(--color-600)"};
  font-family: var(--font-family-basier-square);
`;

// Style variations for font weights
const stylesBold = css`
  font-weight: var(--font-weight-bold);
`;

const stylesSemiBold = css`
  font-weight: var(--font-weight-semibold);
`;

const stylesMedium = css`
  font-weight: var(--font-weight-medium);
`;

const stylesRegular = css`
  font-weight: var(--font-weight-regular);
`;

const stylesLight = css`
  font-weight: var(--font-weight-light);
`;

//Line height variations
const lineHeightBody = css`
  line-height: var(--line-height-145);
`;

// Display components with different font weights and sizes
const DisplayBold = styled.h1`
  ${textStyles}
  ${stylesBold}
  font-size: var(--font-size-4xl);
  line-height: var(--line-height-120);
  letter-spacing: var(--letter-spacing-neg-08px);
`;

const DisplaySemiBold = styled.h1`
  ${textStyles}
  ${stylesSemiBold}
  font-size: var(--font-size-4xl);
  line-height: var(--line-height-120);
  letter-spacing: var(--letter-spacing-neg-08px);
`;

// Heading components with different sizes and font weights
const H1Bold = styled.h1`
  ${textStyles}
  ${stylesBold}
  font-size: var(--font-size-3xl);
  line-height: var(--line-height-130);
  letter-spacing: var(--letter-spacing-neg-064px);
`;

const H2Bold = styled.h2`
  ${textStyles}
  ${stylesBold}
  line-height: var(--line-height-135);
  letter-spacing: var(--letter-spacing-neg-042px);
`;

const H3Bold = styled.h3`
  ${textStyles}
  ${stylesBold}
  line-height: var(--line-height-135);
  letter-spacing: var(--letter-spacing-neg-026px);
`;

const H4Bold = styled.h4`
  ${textStyles}
  ${stylesBold}
  line-height: var(--line-height-135);
`;

const H5Bold = styled.h5`
  ${textStyles}
  ${stylesBold}
  line-height: var(--line-height-135);
`;

// Secondary heading styles with different font weights
const H1SemiBold = styled.h1`
  ${textStyles}
  ${stylesSemiBold}
  font-size: var(--font-size-3xl);
  line-height: var(--line-height-130);
  letter-spacing: var(--letter-spacing-neg-064px);
`;

const H2SemiBold = styled.h2`
  ${textStyles}
  ${stylesSemiBold}
  line-height: var(--line-height-135);
  letter-spacing: var(--letter-spacing-neg-042px);
`;

const H3SemiBold = styled.h3`
  ${textStyles}
  ${stylesSemiBold}
  line-height: var(--line-height-135);
  letter-spacing: var(--letter-spacing-neg-026px);
`;

const H4SemiBold = styled.h4`
  ${textStyles}
  ${stylesSemiBold}
  line-height: var(--line-height-135);
`;

const H5SemiBold = styled.h5`
  ${textStyles}
  ${stylesSemiBold}
  line-height: var(--line-height-135);
`;

// Paragraph components with different font weights and line heights
const BodyBold = styled.p`
  ${textStyles}
  ${stylesBold}
  ${lineHeightBody}
`;

const BodySemiBold = styled.p`
  ${textStyles}
  ${stylesSemiBold}
  ${lineHeightBody}
`;

const BodyMedium = styled.p`
  ${textStyles}
  ${stylesMedium}
  ${lineHeightBody}
`;

const BodyRegular = styled.p`
  ${textStylesGray}
  ${stylesRegular}
  ${lineHeightBody}
`;

const BodyLight = styled.p`
  ${textStylesGray}
  ${stylesLight}
  ${lineHeightBody}
`;

// Small text
const SmallBold = styled.p`
  ${textStyles}
  ${stylesBold}
  ${lineHeightBody}
  font-size: var(--font-size-s);
`;

const SmallMedium = styled.p`
  ${textStyles}
  ${stylesMedium}
  ${lineHeightBody}
  font-size: var(--font-size-s);
`;

const SmallRegular = styled.p`
  ${textStyles}
  ${stylesRegular}
  ${lineHeightBody}
  font-size: var(--font-size-s);
`;

//Label text
const LabelBold = styled.p`
  ${textStyles}
  ${stylesBold}
  ${lineHeightBody}
  font-size: var(--font-size-xs);
`;

const LabelMedium = styled.p`
  ${textStyles}
  ${stylesMedium}
  ${lineHeightBody}
  font-size: var(--font-size-xs);
`;

const LabelRegular = styled.p`
  ${textStyles}
  ${stylesRegular}
  ${lineHeightBody}
  font-size: var(--font-size-xs);
`;

export {
  DisplayBold,
  DisplaySemiBold,
  H1Bold,
  H2Bold,
  H3Bold,
  H4Bold,
  H5Bold,
  H1SemiBold,
  H2SemiBold,
  H3SemiBold,
  H4SemiBold,
  H5SemiBold,
  BodyBold,
  BodySemiBold,
  BodyMedium,
  BodyRegular,
  BodyLight,
  SmallBold,
  SmallMedium,
  SmallRegular,
  LabelBold,
  LabelMedium,
  LabelRegular,
};
