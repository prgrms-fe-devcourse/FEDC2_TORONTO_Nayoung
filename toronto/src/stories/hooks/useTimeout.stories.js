import useTimeout from '@/hooks/useTimeout';

export default {
  title: 'Hook/useTimeout',
};

export const Default = () => {
  const clear = useTimeout(() => {
    alert('실행!');
  }, 3000);

  return (
    <>
      <div>useTimeout 테스트</div>
      <button onClick={clear}>멈취!</button>
    </>
  );
};
