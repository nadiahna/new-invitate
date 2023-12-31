import {
    useLoadScript,
    GoogleMap,
    MarkerF,
    CircleF,
} from '@react-google-maps/api';
import { useState, useEffect, useMemo } from 'react';

const Maps = () => {
    const [lat, setLat] = useState(-7.9209072);
    const [lng, setLng] = useState(112.5757861);

    const libraries = useMemo(() => ['places'], []);
    const mapCenter = useMemo(() => ({ lat: lat, lng: lng }), [lat, lng]);

    const mapOptions = useMemo<google.maps.MapOptions>(
        () => ({
            disableDefaultUI: true,
            clickableIcons: true,
            scrollwheel: false,
        }),
        []
    );

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY as string,
        libraries: libraries as any,
    });

    if (!isLoaded) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <GoogleMap
                options={mapOptions}
                zoom={14}
                center={mapCenter}
                mapTypeId={google.maps.MapTypeId.ROADMAP}
                mapContainerStyle={{ width: '98vw', height: '50vh' }}
                onLoad={(map) => console.log('Map Loaded')}
            >
                <MarkerF
                    position={mapCenter}
                    onLoad={() => console.log('Marker Loaded')}
                />

                {/* {[1000, 2500].map((radius, idx) => {
                    return (
                        <CircleF
                            key={idx}
                            center={mapCenter}
                            radius={radius}
                            onLoad={() => console.log('Circle Load...')}
                            options={{
                                fillColor: radius > 1000 ? 'red' : 'green',
                                strokeColor: radius > 1000 ? 'red' : 'green',
                                strokeOpacity: 0.8,
                            }}
                        />
                    );
                })} */}
            </GoogleMap>
        </div>
    )
}

export default Maps;