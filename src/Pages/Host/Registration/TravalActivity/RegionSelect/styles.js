import styled, { css } from 'styled-components';

const mapRegionStyle = css`
  height: 45px;
  width: 295px;
  padding-left: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  appearance: none;
  background: url('images/icon-down-arrow.png') no-repeat right 9px center/13px;
`;

export const MapContainer = styled.div`
  font-size: 14px;
`;

export const MapTitle = styled.h2`
  margin: 40px 0px 15px 0px;
  font-weight: 600;
`;

export const MapRegionSelect = styled.select`
  ${mapRegionStyle}
`;

export const MapDetailRegionSelect = styled.select`
  margin-left: 10px;
  ${mapRegionStyle}
`;

export const Map = styled.div`
  height: 400px;
  width: 600px;
  margin-top: 20px;
  border: 1px solid #ddd;
`;
