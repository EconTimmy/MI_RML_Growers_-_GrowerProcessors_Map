var wms_layers = [];

var format_Minor_Civil_Division_Cities_26_Townships_0 = new ol.format.GeoJSON();
var features_Minor_Civil_Division_Cities_26_Townships_0 = format_Minor_Civil_Division_Cities_26_Townships_0.readFeatures(json_Minor_Civil_Division_Cities_26_Townships_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Minor_Civil_Division_Cities_26_Townships_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Minor_Civil_Division_Cities_26_Townships_0.addFeatures(features_Minor_Civil_Division_Cities_26_Townships_0);
var lyr_Minor_Civil_Division_Cities_26_Townships_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Minor_Civil_Division_Cities_26_Townships_0, 
                style: style_Minor_Civil_Division_Cities_26_Townships_0,
                popuplayertitle: 'Minor_Civil_Division_(Cities_%26_Townships)',
                interactive: true,
                title: '<img src="styles/legend/Minor_Civil_Division_Cities_26_Townships_0.png" /> Minor_Civil_Division_(Cities_%26_Townships)'
            });
var format_Village_1 = new ol.format.GeoJSON();
var features_Village_1 = format_Village_1.readFeatures(json_Village_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Village_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Village_1.addFeatures(features_Village_1);
var lyr_Village_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Village_1, 
                style: style_Village_1,
                popuplayertitle: 'Village',
                interactive: true,
                title: '<img src="styles/legend/Village_1.png" /> Village'
            });
var format_Growers_2 = new ol.format.GeoJSON();
var features_Growers_2 = format_Growers_2.readFeatures(json_Growers_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Growers_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Growers_2.addFeatures(features_Growers_2);
var lyr_Growers_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Growers_2, 
                style: style_Growers_2,
                popuplayertitle: 'Growers',
                interactive: true,
                title: '<img src="styles/legend/Growers_2.png" /> Growers'
            });
var format_Processor_Grower_3 = new ol.format.GeoJSON();
var features_Processor_Grower_3 = format_Processor_Grower_3.readFeatures(json_Processor_Grower_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Processor_Grower_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Processor_Grower_3.addFeatures(features_Processor_Grower_3);
var lyr_Processor_Grower_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Processor_Grower_3, 
                style: style_Processor_Grower_3,
                popuplayertitle: 'Processor_Grower',
                interactive: true,
                title: '<img src="styles/legend/Processor_Grower_3.png" /> Processor_Grower'
            });

lyr_Minor_Civil_Division_Cities_26_Townships_0.setVisible(true);lyr_Village_1.setVisible(true);lyr_Growers_2.setVisible(true);lyr_Processor_Grower_3.setVisible(true);
var layersList = [lyr_Minor_Civil_Division_Cities_26_Townships_0,lyr_Village_1,lyr_Growers_2,lyr_Processor_Grower_3];
lyr_Minor_Civil_Division_Cities_26_Townships_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FIPSCode': 'FIPSCode', 'Name': 'Name', 'MapLayout': 'MapLayout', 'FIPSNum': 'FIPSNum', 'Label': 'Label', 'Type': 'Type', 'Peninsula': 'Peninsula', 'MGFVersion': 'MGFVersion', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_Village_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FIPSCode': 'FIPSCode', 'Name': 'Name', 'MapLayout': 'MapLayout', 'FIPSNum': 'FIPSNum', 'Label': 'Label', 'Type': 'Type', 'MGFVersion': 'MGFVersion', 'Peninsula': 'Peninsula', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_Growers_2.set('fieldAliases', {'loc_id': 'loc_id', 'date': 'date', 'max_date': 'max_date', 'date_retai': 'date_retai', 'date_proce': 'date_proce', 'date_grow': 'date_grow', 'max_date_r': 'max_date_r', 'max_date_p': 'max_date_p', 'max_date_g': 'max_date_g', 'retail': 'retail', 'process': 'process', 'grow': 'grow', 'grow_a': 'grow_a', 'grow_b': 'grow_b', 'grow_c': 'grow_c', 'latitude': 'latitude', 'longitude': 'longitude', 'address': 'address', 'no_exit': 'no_exit', 'month': 'month', 'year': 'year', 'quarter': 'quarter', 'my': 'my', 'qy': 'qy', 'combo': 'combo', });
lyr_Processor_Grower_3.set('fieldAliases', {'loc_id': 'loc_id', 'date': 'date', 'max_date': 'max_date', 'date_retai': 'date_retai', 'date_proce': 'date_proce', 'date_grow': 'date_grow', 'max_date_r': 'max_date_r', 'max_date_p': 'max_date_p', 'max_date_g': 'max_date_g', 'retail': 'retail', 'process': 'process', 'grow': 'grow', 'grow_a': 'grow_a', 'grow_b': 'grow_b', 'grow_c': 'grow_c', 'latitude': 'latitude', 'longitude': 'longitude', 'address': 'address', 'no_exit': 'no_exit', 'month': 'month', 'year': 'year', 'quarter': 'quarter', 'my': 'my', 'qy': 'qy', 'combo': 'combo', });
lyr_Minor_Civil_Division_Cities_26_Townships_0.set('fieldImages', {'OBJECTID': 'Range', 'FIPSCode': 'TextEdit', 'Name': 'TextEdit', 'MapLayout': 'TextEdit', 'FIPSNum': 'Range', 'Label': 'TextEdit', 'Type': 'TextEdit', 'Peninsula': 'TextEdit', 'MGFVersion': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_Village_1.set('fieldImages', {'OBJECTID': 'Range', 'FIPSCode': 'TextEdit', 'Name': 'TextEdit', 'MapLayout': 'TextEdit', 'FIPSNum': 'Range', 'Label': 'TextEdit', 'Type': 'TextEdit', 'MGFVersion': 'TextEdit', 'Peninsula': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_Growers_2.set('fieldImages', {'loc_id': 'TextEdit', 'date': 'TextEdit', 'max_date': 'TextEdit', 'date_retai': 'TextEdit', 'date_proce': 'TextEdit', 'date_grow': 'TextEdit', 'max_date_r': 'TextEdit', 'max_date_p': 'TextEdit', 'max_date_g': 'TextEdit', 'retail': 'TextEdit', 'process': 'TextEdit', 'grow': 'TextEdit', 'grow_a': 'TextEdit', 'grow_b': 'TextEdit', 'grow_c': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'address': 'TextEdit', 'no_exit': 'TextEdit', 'month': 'TextEdit', 'year': 'TextEdit', 'quarter': 'TextEdit', 'my': 'TextEdit', 'qy': 'TextEdit', 'combo': 'TextEdit', });
lyr_Processor_Grower_3.set('fieldImages', {'loc_id': 'TextEdit', 'date': 'TextEdit', 'max_date': 'TextEdit', 'date_retai': 'TextEdit', 'date_proce': 'TextEdit', 'date_grow': 'TextEdit', 'max_date_r': 'TextEdit', 'max_date_p': 'TextEdit', 'max_date_g': 'TextEdit', 'retail': 'TextEdit', 'process': 'TextEdit', 'grow': 'TextEdit', 'grow_a': 'TextEdit', 'grow_b': 'TextEdit', 'grow_c': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'address': 'TextEdit', 'no_exit': 'TextEdit', 'month': 'TextEdit', 'year': 'TextEdit', 'quarter': 'TextEdit', 'my': 'TextEdit', 'qy': 'TextEdit', 'combo': 'TextEdit', });
lyr_Minor_Civil_Division_Cities_26_Townships_0.set('fieldLabels', {'OBJECTID': 'hidden field', 'FIPSCode': 'hidden field', 'Name': 'no label', 'MapLayout': 'hidden field', 'FIPSNum': 'hidden field', 'Label': 'no label', 'Type': 'hidden field', 'Peninsula': 'hidden field', 'MGFVersion': 'hidden field', 'Shape__Are': 'hidden field', 'Shape__Len': 'hidden field', });
lyr_Village_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'FIPSCode': 'hidden field', 'Name': 'no label', 'MapLayout': 'hidden field', 'FIPSNum': 'hidden field', 'Label': 'no label', 'Type': 'hidden field', 'MGFVersion': 'hidden field', 'Peninsula': 'hidden field', 'Shape__Are': 'hidden field', 'Shape__Len': 'hidden field', });
lyr_Growers_2.set('fieldLabels', {'loc_id': 'hidden field', 'date': 'hidden field', 'max_date': 'hidden field', 'date_retai': 'hidden field', 'date_proce': 'no label', 'date_grow': 'no label', 'max_date_r': 'hidden field', 'max_date_p': 'no label', 'max_date_g': 'no label', 'retail': 'hidden field', 'process': 'no label', 'grow': 'no label', 'grow_a': 'no label', 'grow_b': 'no label', 'grow_c': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'address': 'no label', 'no_exit': 'no label', 'month': 'no label', 'year': 'no label', 'quarter': 'no label', 'my': 'no label', 'qy': 'no label', 'combo': 'no label', });
lyr_Processor_Grower_3.set('fieldLabels', {'loc_id': 'hidden field', 'date': 'hidden field', 'max_date': 'hidden field', 'date_retai': 'hidden field', 'date_proce': 'no label', 'date_grow': 'no label', 'max_date_r': 'hidden field', 'max_date_p': 'no label', 'max_date_g': 'no label', 'retail': 'hidden field', 'process': 'no label', 'grow': 'no label', 'grow_a': 'no label', 'grow_b': 'no label', 'grow_c': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'address': 'no label', 'no_exit': 'no label', 'month': 'no label', 'year': 'no label', 'quarter': 'no label', 'my': 'no label', 'qy': 'no label', 'combo': 'no label', });
lyr_Processor_Grower_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});