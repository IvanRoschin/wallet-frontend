import { AppBar } from 'components/AppBar';
import { Navigation } from 'components/Navigation';
import { Balance } from 'components/Balance';
import { Container } from 'globalStyles/globalStyle';
const Dashboard = () => {
  return (
    <>
      <AppBar />
      <Container>
        <Navigation />
        <Balance />
      </Container>
    </>
  );
};

export default Dashboard;
