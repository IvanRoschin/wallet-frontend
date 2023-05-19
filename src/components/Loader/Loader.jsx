import { BeatLoader } from 'react-spinners';
import { LoaderContainer } from './Loader.styled';
// { color, size }
export const Loader = ({ color }) => {
  return (
    <LoaderContainer>
      <BeatLoader color={color} />
    </LoaderContainer>
  );
};
