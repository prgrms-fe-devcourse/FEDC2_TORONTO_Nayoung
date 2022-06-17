import styled from 'styled-components';
import Header from '@/components/atoms/Header';
import Text from '@/components/atoms/Text';
import ControversyVote from '@/components/molecules/ControversyVote';
import PropTypes from 'prop-types';

const ControversyFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ControversyForm = ({
  header,
  details,
  agreeTitle,
  disagreeTitle,
  imgSrc,
}) => {
  return (
    <ControversyFormWrapper>
      <Header>{header}</Header>
      <Text style={{ marginBottom: '24px' }}>{details}</Text>
      <ControversyVote
        agreeTitle={agreeTitle}
        disagreeTitle={disagreeTitle}
        imgSrc={imgSrc}
      />
    </ControversyFormWrapper>
  );
};

ControversyForm.propTypes = {
  header: PropTypes.string,
  details: PropTypes.string,
  agreeTitle: PropTypes.string,
  disagreeTitle: PropTypes.string,
  imgSrc: PropTypes.string,
};
export default ControversyForm;
