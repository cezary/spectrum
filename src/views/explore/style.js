import styled from 'styled-components';

import {
  FlexCol,
  FlexRow,
  H1,
  H2,
  H3,
  P,
  Transition,
  Gradient,
  Shadow,
  hexa,
} from '../../components/globals';
import { StyledCard } from '../../components/listItems/style';
import ScrollRow from '../../components/scrollRow';

import { Button } from '../../components/buttons';
// import ScrollRow from '../../../shared/ScrollRow';

export const ViewContainer = styled(FlexCol)`
  flex: auto;
  align-self: stretch;
  overflow: hidden;
  overflow-y: scroll;
`;

export const ScrollBody = styled(FlexCol)`
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  position: relative;
  z-index: 1;
  background-color: ${({ theme }) => theme.bg.wash};
`;

export const ViewTitle = styled(H1)`
  margin-left: 48px;
  margin-top: 48px;
  font-size: 32px;
  font-weight: 900;
  color: ${({ theme }) => theme.text.reverse};
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    margin-left: 16px;
    margin-top: 16px;
  }
`;

export const ViewSubtitle = styled(H2)`
  margin-left: 48px;
  color: ${({ theme }) => theme.text.reverse};
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    margin-left: 16px;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const ListCard = styled(StyledCard)`
@media (max-width: 768px) {
  display: flex;
  margin-bottom: 32px;
}
`;

export const Section = styled(FlexCol)`
  padding: 32px;
  padding-top: 0;
  display: flex;
  flex: none;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  align-self: stretch;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const SectionWrapper = styled(FlexRow)`
  flex: none;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ViewHeader = styled(Section)`
  flex: none;
  padding: 120px 0 160px 0;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.space.dark};
  background-image: ${({ theme }) => `radial-gradient(farthest-corner at 50% 100%, ${hexa(theme.brand.alt, 0.75)}, ${theme.space.dark} )`};

  @media (max-width: 768px) {
    padding: 48px 24px 96px 24px;
  }
`;

export const SectionWithGradientTransition = styled(Section)`
  background-image: ${({ theme }) => `linear-gradient(${theme.bg.default}, ${theme.bg.wash})`};

  @media (max-width: 768px) {
    padding: 32px;
  }
`;

export const SectionTitle = styled(H2)`
  color: ${({ theme }) => theme.text.default};
  margin-left: 16px;
  font-size: 32px;
  margin-bottom: 16px;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const SectionSubtitle = styled(H3)`
  color: ${({ theme }) => theme.text.default};
  margin-bottom: 8px;
  margin-left: 48px;

  @media (max-width: 768px) {
    margin-left: 16px;
  }
`;

export const Row = styled(ScrollRow)`
  max-width: 100%;
  width: 100%;
  flex: 0 0 320px;
  padding: 8px 16px 32px 16px;
  overflow-x: scroll;
  align-items: flex-start;

  &:after, &:before{
    content: '';
    display: inline-block;
    flex: 0 0 32px;
    align-self: stretch;
    background-color: transparent;
  }
`;

export const Item = styled(FlexCol)`
  padding: 16px;
  flex: 0 0 280px;
  flex-order: ${props => (props.active ? '2' : '1')};
  background-color: ${({ theme }) => theme.bg.default};
  color: ${({ theme }) => theme.text.default};
  border-radius: 16px;
  margin-right: 24px;
  justify-content: space-between;
  position: relative;
  opacity: ${props => (props.active ? '0.85' : '1')};
  box-shadow: ${Shadow.low} ${props => hexa(props.theme.text.placeholder, 1)};
  transition: ${Transition.hover.off};

  &:hover {
    box-shadow: ${Shadow.high} ${props => hexa(props.theme.text.placeholder, 1)};
    transition: ${Transition.hover.on};
    opacity: 1;
  }
`;

export const ItemTitle = styled(H2)`
  font-weight: 700;
  color: ${({ theme }) => theme.text.default};
`;

export const ItemCopy = styled(P)`
  color: ${({ theme }) => theme.text.default};
  margin: 8px 0;
`;

export const ItemMeta = styled(ItemCopy)`
  font-weight: 900;
  color: ${({ theme }) => theme.text.placeholder};
`;

export const ButtonContainer = styled(FlexRow)`
  justify-content: ${props => (props.center ? 'center' : 'flex-end')};
  align-items: center;

  > div {
    margin-right: 8px;
  }
`;

export const ItemButton = styled(Button)`
  font-weight: 700;
  color: ${({ theme }) => theme.text.reverse};
  background-color: ${props => (props.joined ? props.theme.inactive : props.theme.brand.default)};
  background-image: ${props => (props.joined ? 'none' : Gradient(props.theme.brand.alt, props.theme.brand.default))};
  box-shadow: none;
  transition: ${Transition.hover.on};

  &:hover {
    box-shadow: none;
  }
`;

export const Constellations = styled.div`
	background-color: transparent;
	background: url(/img/constellations.svg) center top no-repeat;
	position: absolute;
	background-size: cover 100%;
	z-index: 0;
	height: calc(100% + 4px);
	width: 110%;
	top: -10px;
	bottom: 0;
	left: 0;
	right: 0;
  pointer-events: none;
`;

export const ErrorState = styled(FlexCol)`
  width: 100%;
  margin-top: 32px;
  h2 {
    text-align: center;
    opacity: 0.5;
  }

  p {
    text-align: center;
    opacity: 0.5;
  }
  &:not(:first-of-type) {
    display: none;
  }
`;