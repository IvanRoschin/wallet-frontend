import { AppBar } from 'components/AppBar';

// import { Container } from 'globalStyles/globalStyle';

import { Wrapper, LeftSide, RightSide, PageContainer } from './UserPage.styled';

const Dashboard = () => {
  return (
    <>
      <AppBar />
      <PageContainer>
        <Wrapper>
          <LeftSide>Left Side</LeftSide>
          <RightSide>Right Side </RightSide>
        </Wrapper>
      </PageContainer>
    </>
  );
};

export default Dashboard;
