var wms_layers = [];

var lyr_STOrtofotocolor2023_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "ortofoto_color_2023",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: '[ST] Ortofoto color [2023]',
                            popuplayertitle: '[ST] Ortofoto color [2023]',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_STOrtofotocolor2023_0, 0]);
var format_Passosavianantsaccessibles_1 = new ol.format.GeoJSON();
var features_Passosavianantsaccessibles_1 = format_Passosavianantsaccessibles_1.readFeatures(json_Passosavianantsaccessibles_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Passosavianantsaccessibles_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Passosavianantsaccessibles_1.addFeatures(features_Passosavianantsaccessibles_1);
var lyr_Passosavianantsaccessibles_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Passosavianantsaccessibles_1, 
                style: style_Passosavianantsaccessibles_1,
                popuplayertitle: 'Passos a vianants accessibles',
                interactive: true,
                title: '<img src="styles/legend/Passosavianantsaccessibles_1.png" /> Passos a vianants accessibles'
            });
var format_Passosnoacessibles_2 = new ol.format.GeoJSON();
var features_Passosnoacessibles_2 = format_Passosnoacessibles_2.readFeatures(json_Passosnoacessibles_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Passosnoacessibles_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Passosnoacessibles_2.addFeatures(features_Passosnoacessibles_2);
var lyr_Passosnoacessibles_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Passosnoacessibles_2, 
                style: style_Passosnoacessibles_2,
                popuplayertitle: 'Passos no acessibles',
                interactive: true,
                title: '<img src="styles/legend/Passosnoacessibles_2.png" /> Passos no acessibles'
            });
var format_Ampliaccidevoreres_3 = new ol.format.GeoJSON();
var features_Ampliaccidevoreres_3 = format_Ampliaccidevoreres_3.readFeatures(json_Ampliaccidevoreres_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ampliaccidevoreres_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ampliaccidevoreres_3.addFeatures(features_Ampliaccidevoreres_3);
var lyr_Ampliaccidevoreres_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ampliaccidevoreres_3, 
                style: style_Ampliaccidevoreres_3,
                popuplayertitle: 'Ampliacció de voreres',
                interactive: true,
                title: '<img src="styles/legend/Ampliaccidevoreres_3.png" /> Ampliacció de voreres'
            });
var format_Parkingsadaptats_4 = new ol.format.GeoJSON();
var features_Parkingsadaptats_4 = format_Parkingsadaptats_4.readFeatures(json_Parkingsadaptats_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parkingsadaptats_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parkingsadaptats_4.addFeatures(features_Parkingsadaptats_4);
var lyr_Parkingsadaptats_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parkingsadaptats_4, 
                style: style_Parkingsadaptats_4,
                popuplayertitle: 'Parkings adaptats',
                interactive: true,
                title: '<img src="styles/legend/Parkingsadaptats_4.png" /> Parkings adaptats'
            });
var format_Semaforsinclusius_5 = new ol.format.GeoJSON();
var features_Semaforsinclusius_5 = format_Semaforsinclusius_5.readFeatures(json_Semaforsinclusius_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Semaforsinclusius_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Semaforsinclusius_5.addFeatures(features_Semaforsinclusius_5);
var lyr_Semaforsinclusius_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Semaforsinclusius_5, 
                style: style_Semaforsinclusius_5,
                popuplayertitle: 'Semafors inclusius',
                interactive: true,
                title: '<img src="styles/legend/Semaforsinclusius_5.png" /> Semafors inclusius'
            });
var group_Mapasdefondo = new ol.layer.Group({
                                layers: [lyr_STOrtofotocolor2023_0,lyr_Passosavianantsaccessibles_1,lyr_Passosnoacessibles_2,lyr_Ampliaccidevoreres_3,lyr_Parkingsadaptats_4,lyr_Semaforsinclusius_5,],
                                fold: 'open',
                                title: 'Mapas de fondo'});

lyr_STOrtofotocolor2023_0.setVisible(true);lyr_Passosavianantsaccessibles_1.setVisible(true);lyr_Passosnoacessibles_2.setVisible(true);lyr_Ampliaccidevoreres_3.setVisible(true);lyr_Parkingsadaptats_4.setVisible(true);lyr_Semaforsinclusius_5.setVisible(true);
var layersList = [group_Mapasdefondo];
lyr_Passosavianantsaccessibles_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Carrer': 'Carrer', 'Amplada_m': 'Amplada_m', 'Rampa PMR': 'Rampa PMR', 'Semaf_prox': 'Semaf_prox', 'Estat': 'Estat', 'Acces': 'Acces', 'Observ': 'Observ', 'Pav_tàcti': 'Pav_tàcti', });
lyr_Passosnoacessibles_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Carrer': 'Carrer', 'Problema': 'Problema', 'Rampa': 'Rampa', 'Pav_tactil': 'Pav_tactil', 'Ampl_m': 'Ampl_m', 'Risc': 'Risc', 'Prioritat': 'Prioritat', 'Estat': 'Estat', 'Actuacio': 'Actuacio', });
lyr_Ampliaccidevoreres_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Carrer': 'Carrer', 'Amp_actual': 'Amp_actual', 'Amp_nova': 'Amp_nova', 'Pendent': 'Pendent', 'Paviment': 'Paviment', 'acces_pmr': 'acces_pmr', 'Prioritat': 'Prioritat', 'Estat': 'Estat', 'Observ': 'Observ', });
lyr_Parkingsadaptats_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Ubicacio': 'Ubicacio', 'Places': 'Places', 'Amplada_m': 'Amplada_m', 'Longitud_m': 'Longitud_m', 'Tipus': 'Tipus', 'Proximitat': 'Proximitat', 'Senyal': 'Senyal', 'Ac_vorera': 'Ac_vorera', 'Estat': 'Estat', });
lyr_Semaforsinclusius_5.set('fieldAliases', {'fid': 'fid', 'Carrer': 'Carrer', 'Tipus': 'Tipus', 'Senyal_acu': 'Senyal_acu', 'Polsador': 'Polsador', 'Estat': 'Estat', 'id': 'id', });
lyr_Passosavianantsaccessibles_1.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Carrer': 'TextEdit', 'Amplada_m': 'TextEdit', 'Rampa PMR': 'TextEdit', 'Semaf_prox': 'TextEdit', 'Estat': 'TextEdit', 'Acces': 'TextEdit', 'Observ': 'TextEdit', 'Pav_tàcti': 'TextEdit', });
lyr_Passosnoacessibles_2.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Carrer': 'TextEdit', 'Problema': 'TextEdit', 'Rampa': 'TextEdit', 'Pav_tactil': 'TextEdit', 'Ampl_m': 'TextEdit', 'Risc': 'TextEdit', 'Prioritat': 'TextEdit', 'Estat': 'TextEdit', 'Actuacio': 'TextEdit', });
lyr_Ampliaccidevoreres_3.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Carrer': 'TextEdit', 'Amp_actual': 'TextEdit', 'Amp_nova': 'TextEdit', 'Pendent': 'TextEdit', 'Paviment': 'TextEdit', 'acces_pmr': 'TextEdit', 'Prioritat': 'TextEdit', 'Estat': 'TextEdit', 'Observ': 'TextEdit', });
lyr_Parkingsadaptats_4.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Ubicacio': 'TextEdit', 'Places': 'TextEdit', 'Amplada_m': 'TextEdit', 'Longitud_m': 'TextEdit', 'Tipus': 'TextEdit', 'Proximitat': 'TextEdit', 'Senyal': 'TextEdit', 'Ac_vorera': 'TextEdit', 'Estat': 'TextEdit', });
lyr_Semaforsinclusius_5.set('fieldImages', {'fid': '', 'Carrer': 'TextEdit', 'Tipus': 'TextEdit', 'Senyal_acu': 'TextEdit', 'Polsador': 'TextEdit', 'Estat': 'TextEdit', 'id': 'TextEdit', });
lyr_Passosavianantsaccessibles_1.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Carrer': 'inline label - visible with data', 'Amplada_m': 'hidden field', 'Rampa PMR': 'inline label - visible with data', 'Semaf_prox': 'hidden field', 'Estat': 'hidden field', 'Acces': 'inline label - visible with data', 'Observ': 'inline label - visible with data', 'Pav_tàcti': 'hidden field', });
lyr_Passosnoacessibles_2.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Carrer': 'inline label - visible with data', 'Problema': 'inline label - visible with data', 'Rampa': 'hidden field', 'Pav_tactil': 'hidden field', 'Ampl_m': 'hidden field', 'Risc': 'inline label - visible with data', 'Prioritat': 'hidden field', 'Estat': 'inline label - visible with data', 'Actuacio': 'inline label - visible with data', });
lyr_Ampliaccidevoreres_3.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Carrer': 'inline label - visible with data', 'Amp_actual': 'hidden field', 'Amp_nova': 'inline label - visible with data', 'Pendent': 'inline label - visible with data', 'Paviment': 'inline label - visible with data', 'acces_pmr': 'hidden field', 'Prioritat': 'hidden field', 'Estat': 'hidden field', 'Observ': 'inline label - visible with data', });
lyr_Parkingsadaptats_4.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Ubicacio': 'inline label - visible with data', 'Places': 'hidden field', 'Amplada_m': 'hidden field', 'Longitud_m': 'hidden field', 'Tipus': 'inline label - visible with data', 'Proximitat': 'hidden field', 'Senyal': 'inline label - visible with data', 'Ac_vorera': 'hidden field', 'Estat': 'inline label - visible with data', });
lyr_Semaforsinclusius_5.set('fieldLabels', {'fid': 'hidden field', 'Carrer': 'inline label - visible with data', 'Tipus': 'inline label - visible with data', 'Senyal_acu': 'inline label - visible with data', 'Polsador': 'hidden field', 'Estat': 'inline label - visible with data', 'id': 'hidden field', });
lyr_Semaforsinclusius_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
