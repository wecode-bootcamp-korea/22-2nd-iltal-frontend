import { useState, useEffect } from 'react';
import { GET_PRODCUT_API } from '../../config';
import styled from 'styled-components';
import { useHistory } from 'react-router';
export default function Detail({ match }) {
  const [productData, setProductData] = useState([]);
  //토큰
  const access_token = localStorage.getItem(localStorage.key(0));
  useEffect(() => {
    const requestOption = {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    };
    fetch(
      `${GET_PRODCUT_API}/${access_token ? 'private' : 'public'}/${
        match.params.id
      }`,
      requestOption,
    )
      .then(res => res.json())
      .then(res => {
        setProductData(res.message[0]);
      });
  }, []);
  const { id, title, userImg, name, nick, bgimg, price, like } = productData;
  const postLike = () => {
    fetch(
      `${GET_PRODCUT_API}/${access_token ? 'private' : 'public'}/${
        match.params.id
      }`,
      {
        method: 'POST',
        headers: { Authorization: localStorage.getItem('access_token') },
        body: JSON.stringify({
          productID: id,
          like: !like,
        }),
      },
    );
  };
  const history = useHistory();
  const isLike = event => {
    if (access_token) {
      const ChangeLike = { ...productData };
      postLike();
      if (like) {
        ChangeLike.like = false;
        setProductData(ChangeLike);
      } else {
        ChangeLike.like = true;
        setProductData(ChangeLike);
      }
      console.log(productData.like);
    } else {
      alert('로그인이 필요합니다.');
      history.push('/login');
    }
  };
  const isReservation = event => {
    if (access_token) {
      alert('예약이 완료되었습니다');
    } else {
      alert('로그인이 필요합니다.');
      history.push('/login');
    }
  };
  return (
    <DetailWrapper>
      <DetailContent>
        <h1>{title}</h1>
        <HostImg alt="hostImg" src={`${bgimg}`} />
        <HostInfo>
          <dl>
            <dt>
              <img alt="propductImg" src={`${userImg}`} />
            </dt>
            <dd>
              <span className="hostName">{name}</span>
              <span className="hostNick">{nick}</span>
            </dd>
          </dl>
        </HostInfo>
      </DetailContent>
      <DetailFooter>
        <ul className="priceBox">
          <span className="price salePrice">
            {(parseInt(price) * 2).toLocaleString()}원
          </span>
          <span className="price salePercent">50%</span>
          <span className="price currentPrice">
            {parseInt(price).toLocaleString()}원
          </span>
        </ul>
        <div className="buttonBox">
          <LikeButton
            onClick={isLike}
            style={{ backgroundColor: like ? '#FF024A' : '#555555' }}
          >
            <i className="fas fa-heart" />
          </LikeButton>
          <ReservationButton onClick={isReservation}>
            예약하기
          </ReservationButton>
        </div>
      </DetailFooter>
    </DetailWrapper>
  );
}
const DetailWrapper = styled.div`
  position: relative;
`;
const DetailContent = styled.section`
  margin: 100px 200px 10px;
  h1 {
    margin: 10px 0;
    font-size: 36px;
    font-weight: bold;
    line-height: 45px;
  }
`;
const HostImg = styled.img`
  flex: 5;
  width: 100%;
  margin-bottom: 20px;
`;
const HostInfo = styled.div`
  dl {
    ${props => props.theme.displayFlex('flex-start', 'center')};
    dt {
      img {
        width: 60px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
    dd {
      font-size: 18px;
      .hostName {
        font-weight: bold;
        &::after {
          content: '|';
          margin: 0 10px;
          font-weight: normal;
        }
      }
    }
  }
`;
const DetailFooter = styled.footer`
  ${props => props.theme.displayFlex('space-between', 'center')};
  position: sticky;
  left: 0px;
  bottom: 0px;
  height: 90px;
  width: 100%;
  padding: 0 200px;
  background-color: #ffffff;
  border-top: 1px solid #eeeeee;
  .priceBox {
    ${props => props.theme.displayFlex('center', 'center')};
    .price {
      margin-right: 10px;
    }
    .salePrice {
      ${props => props.theme.fontColor};
      text-decoration: line-through;
    }
    .salePercent {
      font-weight: bold;
      color: ${props => props.theme.mainColor};
    }
    .currentPrice {
      font-weight: bold;
      font-size: 20px;
    }
  }
`;
const DetailButton = styled.button`
  border-radius: 5px;
  margin-left: 10px;
  padding: 10px 30px;
  font-weight: bold;
  line-height: 20px;
  color: #ffffff;
`;
const LikeButton = styled(DetailButton)``;
const ReservationButton = styled(DetailButton)`
  background-color: #7815dc;
`;
