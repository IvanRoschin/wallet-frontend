import { AppBar } from 'components/AppBar';
import { Navigation } from 'components/Navigation';
import { Balance } from 'components/Balance';
import { Currency } from 'components/Currency';
import { Transactions } from 'components/Transactions';
// import { Container } from 'globalStyles/globalStyle';

import {
  Wrapper,
  LeftSide,
  RightSide,
  PageContainer,
} from './DashboardPage.styled';

const Dashboard = () => {
  return (
    <>
      <AppBar />
      <PageContainer>
        <Wrapper>
          <LeftSide>
            <Navigation />
            <Balance />
            <Currency />
          </LeftSide>
          <RightSide>
            <Transactions />
          </RightSide>
        </Wrapper>
      </PageContainer>
    </>
  );
};

export default Dashboard;
