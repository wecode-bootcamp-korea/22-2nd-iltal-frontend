import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

function Cards(props) {
  const { bgimg, title, price, like, like_count, name, nick, userImg } =
    props.card;

  const history = useHistory();

  const redirect = () => {
    history.push(`/products/public/${props.card.id}`);
  };

  return (
    <div>
      <Card>
        <BoxImg src={bgimg} alt="background" onClick={redirect} />
        <CardContainer>
          <Title>
            {title}
            <Price>₩{parseInt(price).toLocaleString()}원</Price>
            {/* <LikeText>{like_count}명이 좋아합니다.</LikeText> */}
          </Title>
          <ProfileBox>
            <SubBox>
              <Profile src={userImg} alt="profile" />
              <Name>{name}</Name>
              <Nick>{nick}</Nick>
            </SubBox>
            <LikeButton
            // onClick={() => {
            //   like(like_count + 1);
            // }}
            >
              <Heart clicked={!like} className="far fa-heart fa-lg"></Heart>
              <Heart clicked={like} className="fas fa-heart fa-lg"></Heart>
            </LikeButton>
          </ProfileBox>
        </CardContainer>
      </Card>
    </div>
  );
}

export default Cards;

const Card = styled.div`
  width: 20em;
  height: 20em;
  background-color: white;
  border: 1px solid #dbdbdb;
  cursor: pointer;
`;

const BoxImg = styled.img`
  width: 322px;
  height: 200px;
  object-fit: cover;
`;

const Title = styled.div`
  margin-left: 5%;
  width: 64%;
  font-size: 16px;
  color: ${props => props.theme.fontColor};
  font-weight: 700;
  line-height: 1.4;
`;

const SubBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;
const Price = styled.div`
  color: ${({ theme }) => theme.fontColor};
  font-size: 18px;
  margin-top: 12px;
`;

const CardContainer = styled.div`
  ${({ theme }) => theme.displayFlex('space-between', 'center')}
`;

const ProfileBox = styled.div`
  ${({ theme }) => theme.FlexColCenter('center', 'column')};
  width: 80px;
  height: 100px;
  text-align: center;
`;

const Profile = styled.img`
  margin: 0 auto 6px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 45px;
  height: 45px;
  border-radius: 50%;
`;

const Name = styled.div`
  color: ${({ theme }) => theme.fontColor};
  font-size: 14px;
  margin-bottom: 4px;
  font-weight: 600;
`;

const LikeText = styled.div`
  font-size: 12px;
  font-weight: 600;
`;
const Nick = styled.div`
  color: ${({ theme }) => theme.fontColor};
  font-size: 12px;
`;

const LikeButton = styled.div`
  cursor: pointer;
  color: red;
`;

const Heart = styled.i`
  display: ${props => (props.clicked ? 'block' : 'none')};
  cursor: pointer;
  margin-bottom: 50px;
`;
