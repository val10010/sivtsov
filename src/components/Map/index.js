import React from 'react';
import { MapContainer, TileLayer, SVGOverlay } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapWithSvgMarker({ className }) {
    const markerWidth = 39; // Ширина маркера в пикселях
    const markerHeight = 70; // Высота маркера в пикселях
    const latitude = 45.35021421714966; // Широта координаты маркера
    const longitude = 28.837855742526695; // Долгота координаты маркера

    const southWest = [latitude, longitude - (markerWidth / (111000 * Math.cos(latitude * (Math.PI / 180))))];
    const northEast = [latitude + (markerHeight / 111000), longitude + (markerWidth / (111000 * Math.cos(latitude * (Math.PI / 180))))];

    const bounds = [southWest, northEast];
    const position = [latitude, longitude];

    return (
        <MapContainer key={new Date().getTime()} className={className} center={position} zoom={17} >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <SVGOverlay key={new Date().getTime()} bounds={bounds}>
                <svg viewBox="0 0 39 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.5 70C27.9783 54.8193 39 30.1106 39 19.3976C39 8.6846 30.2696 0 19.5 0C8.73045 0 0 8.6846 0 19.3976C0 30.1106 11.8696 57.3494 19.5 70ZM19 29C23.9706 29 28 24.9706 28 20C28 15.0294 23.9706 11 19 11C14.0294 11 10 15.0294 10 20C10 24.9706 14.0294 29 19 29Z" fill="var(--point-bg-color)"/>
                </svg>
            </SVGOverlay>
        </MapContainer>
    );
}

export default MapWithSvgMarker;
