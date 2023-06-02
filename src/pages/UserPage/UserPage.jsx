import { AppBar } from 'components/AppBar';
import { Container } from 'globalStyles/globalStyle';
import { UserData } from 'components/UserData';

import { CategoryList } from 'components/Category';

import { Wrapper, LeftSide, RightSide } from './UserPage.styled';

const Dashboard = () => {
  return (
    <>
      <AppBar />
      <Container>
        <Wrapper>
          <LeftSide>
            <UserData />
          </LeftSide>
          <RightSide>
            <CategoryList />
          </RightSide>
        </Wrapper>
      </Container>
    </>
  );
};

export default Dashboard;
