import { AppBar } from 'components/AppBar';
import { Navigation } from 'components/Navigation';
import { Container } from 'globalStyles/globalStyle';
const Dashboard = () => {
  return (
    <>
      <AppBar />
      <Container>
        <Navigation />
      </Container>
    </>
  );
};

export default Dashboard;
