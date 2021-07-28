import React, { useContext, useState } from 'react';
import MapAddressBox from './MapAddressBox/MapAddressBox';
import REGION_LIST from './mapRegionData';
import { RegistrationUpdateContext } from '../../context';
import { NaverMap, Marker } from 'react-naver-maps';

import * as S from './styles';

function RegionSelect() {
  const [cityName, setCityName] = useState('');
  const [districtList, setDistrictList] = useState(REGION_LIST[0].district);
  const [districtValue, setDistrictValue] = useState(0);
  const [districtName, setDistrictName] = useState(districtList[0].name);
  const [latitude, setLatitude] = useState(districtList[0].lat);
  const [longitude, setLongitude] = useState(districtList[0].lon);
  const [address, setAddress] = useState('');

  const { setter } = useContext(RegistrationUpdateContext);

  const navermaps = window.naver.maps;

  const saveCityName = e => {
    setCityName(e.target.value);

    for (let i = 0; i < REGION_LIST.length; i++) {
      if (REGION_LIST[i].cityname === e.target.value) {
        setDistrictList(REGION_LIST[i].district);
        setDistrictName(REGION_LIST[i].district[0].name);
        setLatitude(REGION_LIST[i].district[0].lat);
        setLongitude(REGION_LIST[i].district[0].lon);
        setDistrictValue(0);

        searchCoordinateToAddress(
          REGION_LIST[i].district[0].lat,
          REGION_LIST[i].district[0].lon
        );
      }
    }
  };

  const saveEachDistrictInfo = e => {
    setDistrictValue(e.target.value);
    setDistrictName(districtList[e.target.value].name);
    setLatitude(districtList[e.target.value].lat);
    setLongitude(districtList[e.target.value].lon);

    searchCoordinateToAddress(
      districtList[e.target.value].lat,
      districtList[e.target.value].lon
    );
  };

  const handleMarkerPosition = e => {
    setLatitude(e.coord._lat);
    setLongitude(e.coord._lng);

    searchCoordinateToAddress(e.coord._lat, e.coord._lng);
  };

  const searchCoordinateToAddress = (lat, lng) => {
    navermaps.Service.reverseGeocode(
      {
        location: new navermaps.LatLng(lat, lng),
      },
      function (status, response) {
        if (status !== navermaps.Service.Status.OK) {
          return alert('Something wrong!');
        }

        setAddress(response.result.items[0].address);
        const sliceSido = response.result.items[0].addrdetail.sido.slice(0, 2);

        setter.setAddressSido(sliceSido);
      }
    );
  };

  return (
    <S.MapContainer>
      <S.MapTitle>지역 선택</S.MapTitle>

      <div>
        <S.MapRegionSelect onChange={saveCityName} value={cityName}>
          {REGION_LIST.map((city, index) => {
            return (
              <option key={index} value={city.cityname}>
                {city.cityname}
              </option>
            );
          })}
        </S.MapRegionSelect>
        <S.MapDetailRegionSelect
          onChange={saveEachDistrictInfo}
          value={districtValue}
        >
          {districtList.map((district, index) => {
            return (
              <option key={index} value={index}>
                {district.name}
              </option>
            );
          })}
        </S.MapDetailRegionSelect>
      </div>

      <S.Map>
        <NaverMap
          mapDivId={'maps-getting-started-uncontrolled'}
          style={{
            width: '100%',
            height: '100%',
            outline: 'none',
          }}
          center={{ lat: latitude, lng: longitude }}
          defaultZoom={13}
          onClick={handleMarkerPosition}
        >
          <Marker
            key={1}
            position={{ lat: latitude, lng: longitude }}
            animation={0}
          />
          );
        </NaverMap>

        <MapAddressBox
          address={address}
          setLatitude={setLatitude}
          setLongitude={setLongitude}
        />
      </S.Map>
    </S.MapContainer>
  );
}

export default RegionSelect;
