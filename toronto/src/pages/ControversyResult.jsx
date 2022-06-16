import { useCallback, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '@/components/atoms/Header';
import DoughnutChart from '@/components/atoms/DoughnutChart';
import Vote from '@/components/molecules/Vote';
import InputBar from '@/components/molecules/InputBar';
import CommentList from '@/components/organisms/CommentList';
import { getToken } from '../lib/Login';

const ResultPage = () => {
  const [data, setData] = useState({
    post: {},
    agree: 0,
    disagree: 0,
    comments: [],
  });
  const [opinion, setOpinion] = useState('');
  const { postId } = useParams();
  const token = getToken();

  const getPostData = useCallback(() => {
    axios(`${process.env.REACT_APP_END_POINT}/posts/${postId}`).then((res) => {
      const titleData = JSON.parse(res.data.title);

      setData({
        post: {
          id: res.data._id,
          title: titleData.postTitle,
        },
        agree: titleData.agree.length,
        disagree: titleData.disagree.length,
        comments: res.data.comments,
      });
    });
  }, [postId]);

  const deleteComment = (id) => {
    axios(`${process.env.REACT_APP_END_POINT}/comments/delete`, {
      method: 'delete',
      headers: {
        Authorization: `bearer ${token}`,
      },
      data: {
        id,
      },
    }).then((res) => getPostData());
  };

  useEffect(() => {
    getPostData();
  }, [getPostData]);

  const agreeComments = data.comments
    .filter((item) => {
      const type = JSON.parse(item.comment).type;
      return type === 'agree';
    })
    .reverse();

  const disagreeComments = data.comments
    .filter((item) => {
      const type = JSON.parse(item.comment).type;
      return type === 'disagree';
    })
    .reverse();

  const handleChange = (opinionState) => {
    setOpinion(opinionState);
  };

  const handleSubmit = (text) => {
    if (opinion === '') {
      alert('찬성/반대 의견을 선택해주세요.');
      return;
    }
    if (postId && text.trim().length > 2) {
      axios(`${process.env.REACT_APP_END_POINT}/comments/create`, {
        method: 'post',
        headers: {
          Authorization: `bearer ${process.env.REACT_APP_USER_TOKEN}`,
        },
        data: {
          comment: JSON.stringify({
            type: opinion,
            content: text,
          }),
          postId: postId,
        },
      }).then((res) => getPostData());
    }
  };

  return (
    <div style={{ backgroundColor: '#efefef' }}>
      <div>
        <Header>{data?.post.title}</Header>
      </div>
      <div></div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <DoughnutChart
          data={[data?.agree, data?.disagree]}
          labels={['찬성', '반대']}
          backgroundColor={[
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 99, 132, 0.2)',
          ]}
          borderColor={['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)']}
          chartSize={500}
        />
        <Vote onChange={handleChange} agreeText='찬성' disagreeText='반대' />
        <InputBar
          totalWidth={500}
          placeholder='댓글을 작성해주세요.'
          buttonText='댓글 작성'
          onSubmit={handleSubmit}
        />
      </div>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          gap: '20px',
          marginTop: '20px',
        }}
      >
        <div style={{ flex: 1 }}>
          <CommentList
            name='찬성 댓글'
            width={'calc(100% - 20px)'}
            limit={5}
            comments={agreeComments}
            onDelete={deleteComment}
          />
        </div>
        <div style={{ flex: 1 }}>
          <CommentList
            name='반대 댓글'
            width='calc(100% - 20px)'
            limit={5}
            comments={disagreeComments}
            onDelete={deleteComment}
          />
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
