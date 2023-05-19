import styled from 'styled-components';

export const Title = styled.p`
  width: 280px;
  margin-top: 40px;
  margin-left: 20px;
  margin-bottom: 8px;

  font-family: ${p => p.theme.fonts.accentText};
  font-size: ${p => p.theme.fontSizes[4]};
`;

export const ChartWrapper = styled.div`
  width: 280px;
  margin-right: auto;
  margin-left: auto;
`;

export const Head = styled.ul`
  width: 280px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border-radius: ${p => p.theme.radii.button};

  background-color: ${p => p.theme.colors.white};
`;

export const HeadItem = styled.li`
  font-family: ${p => p.theme.fonts.baseFontBold};
  padding: 16px;
`;

export const Body = styled.ul`
  width: 280px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex: 1;
  justify-content: space-between;
  align-items: left;
  border-bottom: 1px solid #ddd;
`;
export const BodyItemColor = styled.li`
  width: 24px;
  height: 24px;
  margin-left: 20px;
  margin-top: 10px;
  display: block;
  background-color: ${({ color }) => color};
`;

export const BodyItemCategory = styled.li`
  width: calc(55%);
  padding: 10px;
  // margin: 10px 10px 10px;
`;

export const BodyItemSum = styled.li`
  padding: 10px;
`;
