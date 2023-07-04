var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Municipios_1 = new ol.format.GeoJSON();
var features_Municipios_1 = format_Municipios_1.readFeatures(json_Municipios_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipios_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipios_1.addFeatures(features_Municipios_1);
var lyr_Municipios_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipios_1, 
                style: style_Municipios_1,
                interactive: false,
                title: '<img src="styles/legend/Municipios_1.png" /> Municipios'
            });
var format_Colonias_2 = new ol.format.GeoJSON();
var features_Colonias_2 = format_Colonias_2.readFeatures(json_Colonias_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colonias_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colonias_2.addFeatures(features_Colonias_2);
var lyr_Colonias_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Colonias_2, 
                style: style_Colonias_2,
                interactive: false,
                title: '<img src="styles/legend/Colonias_2.png" /> Colonias'
            });
var format_Delitos_3 = new ol.format.GeoJSON();
var features_Delitos_3 = format_Delitos_3.readFeatures(json_Delitos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Delitos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Delitos_3.addFeatures(features_Delitos_3);
var lyr_Delitos_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Delitos_3, 
                style: style_Delitos_3,
                interactive: false,
    title: 'Delitos<br />\
    <img src="styles/legend/Delitos_3_0.png" /> Feminicidio<br />\
    <img src="styles/legend/Delitos_3_1.png" /> Violacion<br />\
    <img src="styles/legend/Delitos_3_2.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Municipios_1.setVisible(true);lyr_Colonias_2.setVisible(true);lyr_Delitos_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Municipios_1,lyr_Colonias_2,lyr_Delitos_3];
lyr_Municipios_1.set('fieldAliases', {'ID': 'ID', 'ENTIDAD': 'ENTIDAD', 'MUNICIPIO': 'MUNICIPIO', 'NOMBRE': 'NOMBRE', 'CONTROL': 'CONTROL', 'GEOMETRY1_': 'GEOMETRY1_', });
lyr_Colonias_2.set('fieldAliases', {'ID': 'ID', 'ENTIDAD': 'ENTIDAD', 'MUNICIPIO': 'MUNICIPIO', 'NOMBRE': 'NOMBRE', 'CLASIFICAC': 'CLASIFICAC', 'CP': 'CP', 'OTROS_CP': 'OTROS_CP', 'CONTROL': 'CONTROL', 'Geometry1_': 'Geometry1_', });
lyr_Delitos_3.set('fieldAliases', {'fecha': 'fecha', 'delito': 'delito', 'x': 'x', 'y': 'y', 'colonia': 'colonia', 'municipio': 'municipio', 'clave_mun': 'clave_mun', 'hora': 'hora', 'bien_afect': 'bien_afect', 'zona_geogr': 'zona_geogr', 'id': 'id', });
lyr_Municipios_1.set('fieldImages', {'ID': 'TextEdit', 'ENTIDAD': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'NOMBRE': 'TextEdit', 'CONTROL': 'TextEdit', 'GEOMETRY1_': 'TextEdit', });
lyr_Colonias_2.set('fieldImages', {'ID': 'TextEdit', 'ENTIDAD': 'Range', 'MUNICIPIO': 'Range', 'NOMBRE': 'TextEdit', 'CLASIFICAC': 'Range', 'CP': 'TextEdit', 'OTROS_CP': 'TextEdit', 'CONTROL': 'TextEdit', 'Geometry1_': 'TextEdit', });
lyr_Delitos_3.set('fieldImages', {'fecha': 'DateTime', 'delito': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'colonia': 'TextEdit', 'municipio': 'TextEdit', 'clave_mun': 'TextEdit', 'hora': 'TextEdit', 'bien_afect': 'TextEdit', 'zona_geogr': 'TextEdit', 'id': 'TextEdit', });
lyr_Municipios_1.set('fieldLabels', {'ID': 'no label', 'ENTIDAD': 'header label', 'MUNICIPIO': 'no label', 'NOMBRE': 'inline label', 'CONTROL': 'inline label', 'GEOMETRY1_': 'inline label', });
lyr_Colonias_2.set('fieldLabels', {'ID': 'no label', 'ENTIDAD': 'no label', 'MUNICIPIO': 'no label', 'NOMBRE': 'no label', 'CLASIFICAC': 'no label', 'CP': 'no label', 'OTROS_CP': 'no label', 'CONTROL': 'no label', 'Geometry1_': 'no label', });
lyr_Delitos_3.set('fieldLabels', {'fecha': 'no label', 'delito': 'no label', 'x': 'no label', 'y': 'no label', 'colonia': 'no label', 'municipio': 'no label', 'clave_mun': 'no label', 'hora': 'no label', 'bien_afect': 'no label', 'zona_geogr': 'no label', 'id': 'no label', });
lyr_Delitos_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});