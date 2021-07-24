import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { GET_PRODCUT_API } from '../../config';
import styled from 'styled-components';

export default function Detail() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch(`${GET_PRODCUT_API}`)
      .then(res => res.json())
      .then(res => {
        setProductData(res.message[0]);
      });
  }, []);

  //defualt = false
  //post -> propduct ID, like 상태 POST /onclick

  const isLike = event => {
    // 로그인 유무에 따른 fetch 함수 적용
    // access_token 없는 경우, Login page 연결
    // access_token 있는 경우, 아래 로직 실행

    if (like) {
      return;
    } else {
      const changeLike = { ...productData };
      changeLike.like = true;
      setProductData(changeLike);
    }
  };

  const history = useHistory();

  const isReservation = evnet => {
    // 로그인 유무에 따른 fetch 함수 적용
    if ('hastoken') {
      alert('예약이 완료되었습니다');
    } else {
      alert('⚠️ 회원 가입이 필요합니다');
      history.push('/loogin');
    }
  };

  const { title, userImg, name, nick, bgimg, price, like } = productData;

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
          {/* 토큰이 없을 때, 로그인 페이지로 그렇지 않으면 하트 적용 */}
          <LikeButton
            onClick={isLike}
            style={{ backgroundColor: like ? '#FF024A' : '#555555' }}
            disabled={like}
          >
            <i className="fas fa-heart" />
          </LikeButton>
          {/* 토큰이 없을 때, 로그인 페이지로 그렇지 않으면 신청되었다는 알럿 띄우기 */}
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
  margin: 20px 200px 10px;

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
