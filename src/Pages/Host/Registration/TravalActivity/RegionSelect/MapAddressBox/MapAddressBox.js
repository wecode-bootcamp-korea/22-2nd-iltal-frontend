import React, { useEffect, useContext } from 'react';
import {
  RegistrationContext,
  RegistrationUpdateContext,
} from '../../../context';
import * as S from './styles';

function MapAddressBox(props) {
  const { getter } = useContext(RegistrationContext);
  const { setter } = useContext(RegistrationUpdateContext);

  const navermaps = window.naver.maps;

  const handleAddress = e => {
    const addressValue = e.target.value;
    setter.setReviseAddress(addressValue);
  };

  useEffect(() => {
    setter.setReviseAddress(props.address);
  }, [props.address]);

  const searchLatLng = e => {
    if (e.which === 13) {
      navermaps.Service.geocode(
        {
          address: getter.reviseAddress,
        },
        function (status, response) {
          if (status !== navermaps.Service.Status.OK) {
            return alert('Something wrong!');
          }

          if (response.result.items.length === 0) {
            alert('해당 주소를 찾을 수 없습니다.');
          } else {
            const transAddressLng = response.result.items[0].point.x;
            const transAddressLat = response.result.items[0].point.y;

            props.setLatitude(transAddressLat);
            props.setLongitude(transAddressLng);

            navermaps.Service.reverseGeocode(
              {
                location: new navermaps.LatLng(
                  transAddressLat,
                  transAddressLng
                ),
              },
              function (status, response) {
                const sliceSido =
                  response.result.items[0].addrdetail.sido.slice(0, 2);

                setter.setAddressSido(sliceSido);
              }
            );
          }
        }
      );
    }
  };

  return (
    <S.MapAddressBox>
      <S.MapAddressTitle>상세주소</S.MapAddressTitle>
      <S.MapAddress
        value={getter.reviseAddress || ''}
        placeholder="주소가 정확히 맞는지 확인해주세요"
        onChange={handleAddress}
        onKeyPress={searchLatLng}
      ></S.MapAddress>
    </S.MapAddressBox>
  );
}

export default MapAddressBox;
