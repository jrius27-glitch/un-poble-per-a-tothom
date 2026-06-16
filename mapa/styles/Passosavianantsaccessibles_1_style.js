var size = 0;
var placement = 'point';

var style_Passosavianantsaccessibles_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var labelText = "";
    var value = feature.get("");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = [ new ol.style.Style({
        image: new ol.style.Icon({
            src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="36" height="36"><circle cx="18" cy="18" r="16" fill="%2310b981" stroke="%23ffffff" stroke-width="2" /><circle cx="18" cy="9.5" r="2.5" fill="%23ffffff" /><path d="M19.5 13.5l-2.5-1.5c-.5-.3-1.1-.3-1.6 0l-3.4 2c-.4.2-.6.7-.4 1.1.2.4.7.6 1.1.4l2.8-1.7v3.7l-2.6 3.5c-.3.4-.2 1 .2 1.3s1 .2 1.3-.2l2.1-2.9.1 5.4c0 .5.4.9.9.9s.9-.4.9-.9V19l2.2 3.3c.3.4.9.5 1.3.2.4-.3.5-.9.2-1.3l-2.7-4v-4l2.4 1.4c.4.2 1 0 1.2-.4.2-.4 0-1-.4-1.2z" fill="%23ffffff" /><line x1="10" y1="28" x2="26" y2="28" stroke="%23ffffff" stroke-width="2.5" stroke-linecap="round" /><line x1="11" y1="31" x2="25" y2="31" stroke="%23ffffff" stroke-width="1.5" stroke-dasharray="3 3" /></svg>',
            scale: 0.8,
            anchor: [0.5, 0.5]
        }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
