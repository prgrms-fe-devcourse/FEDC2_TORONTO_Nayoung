import useAsync from '@/hooks/useAsync';

export default {
  title: 'Hook/useAsync',
};

const asyncReturnValue = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Success');
    }, 1000);
  });
};

export const Success = () => {
  const state = useAsync(async () => {
    return await asyncReturnValue();
  }, []);

  return (
    <div>
      <div>useAsync 테스트</div>
      <div>{JSON.stringify(state)}</div>
    </div>
  );
};
