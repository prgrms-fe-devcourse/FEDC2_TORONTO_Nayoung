import { useEffect, useRef, useState } from 'react';
import { Card, Header, Button, Loader } from '@/components/atoms';
import { CommentItem } from '@/components/molecules';

const CommentList = ({ name, width, comments, limit, onDelete, loading }) => {
  const [commentList, setCommentList] = useState([]);
  const indexRef = useRef(limit);

  const handleClick = () => {
    setCommentList([
      ...commentList,
      ...comments.slice(indexRef.current, indexRef.current + limit),
    ]);
    indexRef.current += limit;
  };

  const handleDelete = (id) => {
    onDelete && onDelete(id);
  };

  useEffect(() => {
    setCommentList([...comments.slice(0, limit)]);
  }, [comments, limit]);

  return (
    <Card padding={0} style={{ width: width }} shadow={false}>
      <div>
        <Header
          level={3}
          style={{
            borderBottom: '1px solid black',
            paddingBottom: 10,
          }}
        >
          {name}
        </Header>
        {loading ? (
          <div
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <Loader type='spinner' size={24} />
          </div>
        ) : (
          commentList?.map((item) => (
            <CommentItem
              key={item._id}
              id={item._id}
              width='100%'
              author={item.author.fullName}
              authorId={item.author._id}
              content={JSON.parse(item.comment).content}
              onDelete={handleDelete}
              style={{ marginTop: '10px' }}
            />
          ))
        )}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          {comments.length === commentList.length ? null : (
            <Button onClick={handleClick}>댓글 더보기</Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default CommentList;
