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
var format_ZMG_mpos_1 = new ol.format.GeoJSON();
var features_ZMG_mpos_1 = format_ZMG_mpos_1.readFeatures(json_ZMG_mpos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZMG_mpos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZMG_mpos_1.addFeatures(features_ZMG_mpos_1);
var lyr_ZMG_mpos_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZMG_mpos_1, 
                style: style_ZMG_mpos_1,
                interactive: false,
                title: '<img src="styles/legend/ZMG_mpos_1.png" /> ZMG_mpos'
            });
var format_ZMG_Colonias_2 = new ol.format.GeoJSON();
var features_ZMG_Colonias_2 = format_ZMG_Colonias_2.readFeatures(json_ZMG_Colonias_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZMG_Colonias_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZMG_Colonias_2.addFeatures(features_ZMG_Colonias_2);
var lyr_ZMG_Colonias_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZMG_Colonias_2, 
                style: style_ZMG_Colonias_2,
                interactive: false,
                title: '<img src="styles/legend/ZMG_Colonias_2.png" /> ZMG_Colonias'
            });
var format_delitosvsmujeres_zmg_3 = new ol.format.GeoJSON();
var features_delitosvsmujeres_zmg_3 = format_delitosvsmujeres_zmg_3.readFeatures(json_delitosvsmujeres_zmg_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_delitosvsmujeres_zmg_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_delitosvsmujeres_zmg_3.addFeatures(features_delitosvsmujeres_zmg_3);
var lyr_delitosvsmujeres_zmg_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_delitosvsmujeres_zmg_3, 
                style: style_delitosvsmujeres_zmg_3,
                interactive: false,
    title: 'delitosvsmujeres_zmg<br />\
    <img src="styles/legend/delitosvsmujeres_zmg_3_0.png" /> Feminicidio<br />\
    <img src="styles/legend/delitosvsmujeres_zmg_3_1.png" /> Violacion<br />\
    <img src="styles/legend/delitosvsmujeres_zmg_3_2.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_ZMG_mpos_1.setVisible(true);lyr_ZMG_Colonias_2.setVisible(true);lyr_delitosvsmujeres_zmg_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ZMG_mpos_1,lyr_ZMG_Colonias_2,lyr_delitosvsmujeres_zmg_3];
lyr_ZMG_mpos_1.set('fieldAliases', {'ID': 'ID', 'ENTIDAD': 'ENTIDAD', 'MUNICIPIO': 'MUNICIPIO', 'NOMBRE': 'NOMBRE', 'CONTROL': 'CONTROL', 'GEOMETRY1_': 'GEOMETRY1_', });
lyr_ZMG_Colonias_2.set('fieldAliases', {'ID': 'ID', 'ENTIDAD': 'ENTIDAD', 'MUNICIPIO': 'MUNICIPIO', 'NOMBRE': 'NOMBRE', 'CLASIFICAC': 'CLASIFICAC', 'CP': 'CP', 'OTROS_CP': 'OTROS_CP', 'CONTROL': 'CONTROL', 'Geometry1_': 'Geometry1_', });
lyr_delitosvsmujeres_zmg_3.set('fieldAliases', {'fecha': 'fecha', 'delito': 'delito', 'x': 'x', 'y': 'y', 'colonia': 'colonia', 'municipio': 'municipio', 'clave_mun': 'clave_mun', 'hora': 'hora', 'bien_afect': 'bien_afect', 'zona_geogr': 'zona_geogr', });
lyr_ZMG_mpos_1.set('fieldImages', {'ID': 'TextEdit', 'ENTIDAD': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'NOMBRE': 'TextEdit', 'CONTROL': 'TextEdit', 'GEOMETRY1_': 'TextEdit', });
lyr_ZMG_Colonias_2.set('fieldImages', {'ID': 'TextEdit', 'ENTIDAD': 'Range', 'MUNICIPIO': 'Range', 'NOMBRE': 'TextEdit', 'CLASIFICAC': 'Range', 'CP': 'TextEdit', 'OTROS_CP': 'TextEdit', 'CONTROL': 'TextEdit', 'Geometry1_': 'TextEdit', });
lyr_delitosvsmujeres_zmg_3.set('fieldImages', {'fecha': 'DateTime', 'delito': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'colonia': 'TextEdit', 'municipio': 'TextEdit', 'clave_mun': 'TextEdit', 'hora': 'TextEdit', 'bien_afect': 'TextEdit', 'zona_geogr': 'TextEdit', });
lyr_ZMG_mpos_1.set('fieldLabels', {'ID': 'no label', 'ENTIDAD': 'no label', 'MUNICIPIO': 'header label', 'NOMBRE': 'no label', 'CONTROL': 'no label', 'GEOMETRY1_': 'no label', });
lyr_ZMG_Colonias_2.set('fieldLabels', {'ID': 'no label', 'ENTIDAD': 'no label', 'MUNICIPIO': 'no label', 'NOMBRE': 'no label', 'CLASIFICAC': 'no label', 'CP': 'no label', 'OTROS_CP': 'no label', 'CONTROL': 'no label', 'Geometry1_': 'no label', });
lyr_delitosvsmujeres_zmg_3.set('fieldLabels', {'fecha': 'no label', 'delito': 'no label', 'x': 'no label', 'y': 'no label', 'colonia': 'no label', 'municipio': 'no label', 'clave_mun': 'no label', 'hora': 'no label', 'bien_afect': 'no label', 'zona_geogr': 'no label', });
lyr_delitosvsmujeres_zmg_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});