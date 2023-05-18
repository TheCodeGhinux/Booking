import { Dot, LoadingWrapper, Text } from './styles';

export default function Loading() {
  return (
    <LoadingWrapper>
      <Text>Loading</Text>
      <Dot delay='0s' />
      <Dot delay='0.1s' />
      <Dot delay='0.2s' />
    </LoadingWrapper>
  );
}
