import React, {useState} from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap, GeoJSON } from 'react-leaflet';
import features from "../data/fungal_geoJSON.json";
import { layerGroup } from "leaflet";

function Map() {
    const [onSelect, setOnselect] = useState({});

    const highlightFeature = (e => {
        const {
            NAME,
            STATE,
            blasto,
            histo,
            cocci } = e.target.feature.properties;
        setOnselect({
            county: NAME,
            stateNum: STATE,
            blastoCount: blasto,
            histoCount: histo,
            cocciCount: cocci,
        });
    });

    const onEachFeature = (feature, layer) => {
        layer.on({
            click: highlightFeature,
        });
        layer.bindTooltip(`<div><b>County:</b> ${feature.properties.NAME}<p><b>Blasto Cases:</b> ${feature.properties.blasto}</p></div>`,
            {
                direction: "top",
                sticky: true,
                offset: [0,0],
                opacity: 0.85,
                className: 'leaflet-tooltip'
            });
            layer.openTooltip();
    }

    const mapPolygonColorToDensity = (blastoCount => {
        return blastoCount > 150
        ? '#fe0131'
        : blastoCount > 50
        ? '#e90069'
        : blastoCount > 25
        ? '#bd2d8f'
        : blastoCount > 1
        ? "#84489d"
        : blastoCount > 0
        ? "#4b5294"
        : '#fee5d9';
    });

    const style = (feature => {
        return ({
            fillColor: mapPolygonColorToDensity(feature.properties.blastoCount),
            weight: 1,
            opacity: 1,
            color: 'black',
            dashArray: '2',
            fillOpacity: 1
        });
    });

    const mapStyle = {
        height: '65vh',
        width: '95%',
        margin: '0 auto',
    };

    const feature = features.features.map(feature => {
        return(feature);
    });
    
    var maxBounds = [
        [5.499550, -167.276413], //Southwest
        [83.162102, -52.233040]  //Northeast
    ];
    
return (
    <section
        aria-labelledby="section-map"
        className="max-w-full mx-auto pt-18 px-4 sm:pt-10 sm:px-20 lg:max-w-7xl lg:px-8">
        <div className="h-full">
            <MapContainer 
                zoom={3}
                maxZoom={6}
                minZoom={2}
                style={mapStyle}
                scrollWheelZoom={true}>
                    <TileLayer 
                    url="https://tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=3f2cdfc0d2f647b0bfd1a3d8a7227bfd"/>
                    {feature && (<GeoJSON data={feature} style={style} onEachFeature={onEachFeature} />
                    )}
            </MapContainer>


        </div>

    </section>
)
 

}

export default Map;