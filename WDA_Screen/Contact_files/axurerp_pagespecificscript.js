for(var i = 0; i < 17; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u15'] = 'top';
u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Vehicle.html');

}
});
gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u2'] = 'center';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u5'] = 'top';
u6.style.cursor = 'pointer';
$axure.eventManager.click('u6', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});

u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
