import React, {useState} from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap, GeoJSON } from 'react-leaflet';
import features from "../../data/fungal_geoJSON.json";
//import { layerGroup } from "leaflet";
import HistoLegend from "./histo_legend";

function HistoMap() {
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
        layer.bindTooltip(`<div><b>County:</b> ${feature.properties.NAME}<p>Cases/100k person-years</p></p><p><b>Histoplasmosis:</b> ${feature.properties.histo}<p><b>Blastomycosis:</b> ${feature.properties.blasto}</p><p><b>Coccidiodomycosis:</b> ${feature.properties.cocci}</p></div>`,
            {
                direction: "top",
                sticky: true,
                offset: [0,0],
                opacity: 0.85,
                className: 'leaflet-tooltip'
            });
            layer.openTooltip();
    }

    const mapPolygonColorToDensity = (histoCount => {
        return histoCount > 1000
        ? '#003f5c'
        : histoCount > 250
        ? '#7a5195'
        : histoCount > 100
        ? '#ef5675'
        : histoCount > 0
        ? "#ffa600"
        : '#fee5d9';
    });

    const style = (feature => {
        return ({
            fillColor: mapPolygonColorToDensity(feature.properties.histo),
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
        [4.499550, -187.276413], //Southwest
        [83.162102, -42.233040]  //Northeast
    ];
    
return (
    <section
        aria-labelledby="section-map"
        className="max-w-full mx-auto pt-18 px-4 sm:pt-10 sm:px-20 lg:max-w-7xl lg:px-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center">
                Histoplasmosis Cases Per 100,000 Person-Years
            </h2>
            <br />
        <div className="h-full">
            <MapContainer 
                zoom={4}
                maxZoom={6}
                minZoom={4}
                style={mapStyle}
                scrollWheelZoom={true}
                maxBounds={maxBounds}
                maxBoundsViscosity={1}
                center={[38.616276686609176, -98.4219812261325426]}>
                    <TileLayer 
                    attribution="Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL."
                    url="https://cartocdn_{s}.global.ssl.fastly.net/base-eco/{z}/{x}/{y}.png"/>
                    {feature && (<GeoJSON data={feature} style={style} onEachFeature={onEachFeature} />
                    )}
                <HistoLegend />
            </MapContainer>


        </div>

    </section>
)
 

}

export default HistoMap;