import React, { useRef, useState } from 'react';

function Map() {
  const [coords, setCoords] = useState(null);
  const mapRef = useRef(null);

  function initMap() {
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 17.397033, lng: 78.490183 },
      zoom: 18.5,
      mapTypeId: window.google.maps.MapTypeId.SATELLITE,
    });

    map.addListener('click', (event) => {
      const { lat, lng } = event.latLng.toJSON();
      setCoords({ lat, lng });
    });
  }

  function loadScript(url) {
    const script = document.createElement('script');
    script.src = url;
    script.onload = () => initMap();
    document.head.appendChild(script);
  }

  React.useEffect(() => {
    const API_KEY = 'AIzaSyAmlRtE1Ggrzz-iSUAWGIcm0mmi7GXbKtI';
    loadScript(`https://maps.googleapis.com/maps/api/js?key=${API_KEY}`);
  }, []);

  return (
    <>
    <div className='d-flex justify-content-center'>
      <div
        ref={mapRef}
        style={{ height: '400px', width: '50%' }}
      />
    </div>
      <br/>
      <div className='row d-flex justify-content-center text-light'>
      <div className='col-sm-3 d-flex justify-content-center'>
      {coords && (
        <div className='row'>
            <div className='col-sm-6'><button className='btn btn-primary' onClick={() => {navigator.clipboard.writeText(coords.lat)}}><abbr title='Copy!' style={{textDecoration: "none"}}><b><i>Latitude</i></b>  {coords.lat}</abbr></button></div>
            <div className='col-sm-6'><button className='btn btn-primary'  onClick={() => {navigator.clipboard.writeText(coords.lng)}}><abbr title='Copy!' style={{textDecoration: "none"}}><b><i>Longitude</i></b>  {coords.lng}</abbr></button></div>
        </div>
      )}
      </div>
      </div>
    </>
  );
}

export default Map;
