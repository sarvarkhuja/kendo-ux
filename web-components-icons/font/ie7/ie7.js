/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'WebComponentsIcons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'k-i-arrow-45-up-right': '&#xe000;',
		'k-i-arrow-45-down-right': '&#xe001;',
		'k-i-arrow-45-down-left': '&#xe002;',
		'k-i-arrow-45-up-left': '&#xe003;',
		'k-i-arrow-60-up': '&#xe004;',
		'k-i-arrow-60-right': '&#xe005;',
		'k-i-arrow-60-down': '&#xe006;',
		'k-i-arrow-60-left': '&#xe007;',
		'k-i-arrow-end-up': '&#xe008;',
		'k-i-arrow-end-right': '&#xe009;',
		'k-i-arrow-end-down': '&#xe00a;',
		'k-i-arrow-end-left': '&#xe00b;',
		'k-i-arrow-double-60-up': '&#xe00c;',
		'k-i-arrow-double-60-right': '&#xe00d;',
		'k-i-arrow-double-60-down': '&#xe00e;',
		'k-i-arrow-double-60-left': '&#xe00f;',
		'k-i-arrows-kpi': '&#xe010;',
		'k-i-arrows-no-change': '&#xe011;',
		'k-i-arrow-overflow-down': '&#xe012;',
		'k-i-arrow-chevron-up': '&#xe013;',
		'k-i-arrow-chevron-right': '&#xe014;',
		'k-i-arrow-chevron-down': '&#xe015;',
		'k-i-arrow-chevron-left': '&#xe016;',
		'k-i-arrow-up': '&#xe017;',
		'k-i-arrow-right': '&#xe018;',
		'k-i-arrow-down': '&#xe019;',
		'k-i-arrow-left': '&#xe01a;',
		'k-i-arrow-drill': '&#xe01b;',
		'k-i-arrow-parent': '&#xe01c;',
		'k-i-arrow-root': '&#xe01d;',
		'k-i-arrows-resizing': '&#xe01e;',
		'k-i-arrows-dimensions': '&#xe01f;',
		'k-i-arrows-swap': '&#xe020;',
		'k-i-drag-and-drop': '&#xe021;',
		'k-i-categorize': '&#xe022;',
		'k-i-grid': '&#xe023;',
		'k-i-grid-layout': '&#xe024;',
		'k-i-group': '&#xe025;',
		'k-i-ungroup': '&#xe026;',
		'k-i-handler-drag': '&#xe027;',
		'k-i-layout': '&#xe028;',
		'k-i-layout-1-by-4': '&#xe029;',
		'k-i-layout-2-by-2': '&#xe02a;',
		'k-i-layout-side-by-side': '&#xe02b;',
		'k-i-layout-stacked': '&#xe02c;',
		'k-i-columns': '&#xe02d;',
		'k-i-rows': '&#xe02e;',
		'k-i-reorder': '&#xe02f;',
		'k-i-menu': '&#xe030;',
		'k-i-more-vertical': '&#xe031;',
		'k-i-more-horizontal': '&#xe032;',
		'k-i-overlap': '&#xe033;',
		'k-i-home': '&#xe034;',
		'k-i-undo': '&#xe100;',
		'k-i-redo': '&#xe101;',
		'k-i-reset': '&#xe102;',
		'k-i-reload': '&#xe103;',
		'k-i-non-recurrence': '&#xe104;',
		'k-i-reset-sm': '&#xe105;',
		'k-i-reload-sm': '&#xe106;',
		'k-i-clock': '&#xe107;',
		'k-i-calendar': '&#xe108;',
		'k-i-save': '&#xe109;',
		'k-i-print': '&#xe10a;',
		'k-i-edit': '&#xe10b;',
		'k-i-delete': '&#xe10c;',
		'k-i-attachment': '&#xe10d;',
		'k-i-attachment-45': '&#xe10e;',
		'k-i-link-horizontal': '&#xe10f;',
		'k-i-unlink-horizontal': '&#xe110;',
		'k-i-link-vertical': '&#xe111;',
		'k-i-unlink-vertical': '&#xe112;',
		'k-i-lock': '&#xe113;',
		'k-i-unlock': '&#xe114;',
		'k-i-cancel': '&#xe115;',
		'k-i-cancel-outline': '&#xe116;',
		'k-i-cancel-circle': '&#xe117;',
		'k-i-check': '&#xe118;',
		'k-i-check-outline': '&#xe119;',
		'k-i-check-circle': '&#xe11a;',
		'k-i-close': '&#xe11b;',
		'k-i-close-outline': '&#xe11c;',
		'k-i-close-circle': '&#xe11d;',
		'k-i-plus': '&#xe11e;',
		'k-i-plus-outline': '&#xe11f;',
		'k-i-plus-circle': '&#xe120;',
		'k-i-minus': '&#xe121;',
		'k-i-minus-outline': '&#xe122;',
		'k-i-minus-circle': '&#xe123;',
		'k-i-sort-asc': '&#xe124;',
		'k-i-sort-desc': '&#xe125;',
		'k-i-unsort': '&#xe126;',
		'k-i-sort-asc-sm': '&#xe127;',
		'k-i-sort-desc-sm': '&#xe128;',
		'k-i-filter': '&#xe129;',
		'k-i-filter-clear': '&#xe12a;',
		'k-i-filter-sm': '&#xe12b;',
		'k-i-filter-sort-asc-sm': '&#xe12c;',
		'k-i-filter-sort-desc-sm': '&#xe12d;',
		'k-i-filter-add-expression': '&#xe12e;',
		'k-i-filter-add-group': '&#xe12f;',
		'k-i-login': '&#xe130;',
		'k-i-logout': '&#xe131;',
		'k-i-download': '&#xe132;',
		'k-i-upload': '&#xe133;',
		'k-i-hyperlink-open': '&#xe134;',
		'k-i-hyperlink-open-sm': '&#xe135;',
		'k-i-launch': '&#xe136;',
		'k-i-window': '&#xe137;',
		'k-i-windows': '&#xe138;',
		'k-i-window-minimize': '&#xe139;',
		'k-i-gear': '&#xe13a;',
		'k-i-gears': '&#xe13b;',
		'k-i-wrench': '&#xe13c;',
		'k-i-preview': '&#xe13d;',
		'k-i-zoom': '&#xe13e;',
		'k-i-zoom-in': '&#xe13f;',
		'k-i-zoom-out': '&#xe140;',
		'k-i-pan': '&#xe141;',
		'k-i-calculator': '&#xe142;',
		'k-i-cart': '&#xe143;',
		'k-i-connector': '&#xe144;',
		'k-i-plus-sm': '&#xe145;',
		'k-i-minus-sm': '&#xe146;',
		'k-i-kpi-status-deny': '&#xe147;',
		'k-i-kpi-status-hold': '&#xe148;',
		'k-i-kpi-status-open': '&#xe149;',
		'k-i-equal': '&#xe14a;',
		'k-i-not-equal': '&#xe14b;',
		'k-i-less-or-equal': '&#xe14c;',
		'k-i-greater-or-equal': '&#xe14d;',
		'k-i-divide': '&#xe14e;',
		'k-i-accessibility': '&#xe14f;',
		'k-i-barcode-outline': '&#xe150;',
		'k-i-barcode': '&#xe151;',
		'k-i-barcode-scanner': '&#xe152;',
		'k-i-qr-code-outline': '&#xe153;',
		'k-i-qr-code': '&#xe154;',
		'k-i-qr-code-scanner': '&#xe155;',
		'k-i-barcode-qr-code-scanner': '&#xe156;',
		'k-i-signature': '&#xe157;',
		'k-i-hand': '&#xe158;',
		'k-i-cursor': '&#xe159;',
		'k-i-play': '&#xe200;',
		'k-i-pause': '&#xe201;',
		'k-i-stop': '&#xe202;',
		'k-i-rewind': '&#xe203;',
		'k-i-forward': '&#xe204;',
		'k-i-volume-down': '&#xe205;',
		'k-i-volume-up': '&#xe206;',
		'k-i-volume-off': '&#xe207;',
		'k-i-hd': '&#xe208;',
		'k-i-subtitles': '&#xe209;',
		'k-i-playlist': '&#xe20a;',
		'k-i-audio': '&#xe20b;',
		'k-i-play-sm': '&#xe20c;',
		'k-i-pause-sm': '&#xe20d;',
		'k-i-stop-sm': '&#xe20e;',
		'k-i-heart-outline': '&#xe300;',
		'k-i-heart': '&#xe301;',
		'k-i-star-outline': '&#xe302;',
		'k-i-star': '&#xe303;',
		'k-i-checkbox': '&#xe304;',
		'k-i-checkbox-checked': '&#xe305;',
		'k-i-tri-state-indeterminate': '&#xe306;',
		'k-i-tri-state-null': '&#xe307;',
		'k-i-circle': '&#xe308;',
		'k-i-radiobutton': '&#xe309;',
		'k-i-radiobutton-checked': '&#xe30a;',
		'k-i-notification': '&#xe400;',
		'k-i-information': '&#xe401;',
		'k-i-question': '&#xe402;',
		'k-i-warning': '&#xe403;',
		'k-i-photo-camera': '&#xe500;',
		'k-i-image': '&#xe501;',
		'k-i-image-export': '&#xe502;',
		'k-i-zoom-actual-size': '&#xe503;',
		'k-i-zoom-best-fit': '&#xe504;',
		'k-i-image-resize': '&#xe505;',
		'k-i-crop': '&#xe506;',
		'k-i-mirror': '&#xe507;',
		'k-i-flip-horizontal': '&#xe508;',
		'k-i-flip-vertical': '&#xe509;',
		'k-i-rotate': '&#xe50a;',
		'k-i-rotate-right': '&#xe50b;',
		'k-i-rotate-left': '&#xe50c;',
		'k-i-brush': '&#xe50d;',
		'k-i-palette': '&#xe50e;',
		'k-i-paint': '&#xe50f;',
		'k-i-line': '&#xe510;',
		'k-i-brightness-contrast': '&#xe511;',
		'k-i-saturation': '&#xe512;',
		'k-i-invert-colors': '&#xe513;',
		'k-i-transperancy': '&#xe514;',
		'k-i-greyscale': '&#xe515;',
		'k-i-blur': '&#xe516;',
		'k-i-sharpen': '&#xe517;',
		'k-i-shape': '&#xe518;',
		'k-i-round-corners': '&#xe519;',
		'k-i-front-element': '&#xe51a;',
		'k-i-back-element': '&#xe51b;',
		'k-i-forward-element': '&#xe51c;',
		'k-i-backward-element': '&#xe51d;',
		'k-i-align-left-element': '&#xe51e;',
		'k-i-align-center-element': '&#xe51f;',
		'k-i-align-right-element': '&#xe520;',
		'k-i-align-top-element': '&#xe521;',
		'k-i-align-middle-element': '&#xe522;',
		'k-i-align-bottom-element': '&#xe523;',
		'k-i-thumbnails-up': '&#xe524;',
		'k-i-thumbnails-right': '&#xe525;',
		'k-i-thumbnails-down': '&#xe526;',
		'k-i-thumbnails-left': '&#xe527;',
		'k-i-full-screen': '&#xe528;',
		'k-i-full-screen-exit': '&#xe529;',
		'k-i-reset-color': '&#xe52a;',
		'k-i-images': '&#xe52b;',
		'k-i-align-to-grid': '&#xe52c;',
		'k-i-size-to-grid': '&#xe52d;',
		'k-i-make-same-size': '&#xe52e;',
		'k-i-make-same-width': '&#xe52f;',
		'k-i-make-same-height': '&#xe530;',
		'k-i-make-horizontal-spacing-equal': '&#xe531;',
		'k-i-increase-horizontal-spacing': '&#xe532;',
		'k-i-decrease-horizontal-spacing': '&#xe533;',
		'k-i-remove-horizontal-spacing': '&#xe534;',
		'k-i-make-vertical-spacing-equal': '&#xe535;',
		'k-i-increase-vertical-spacing': '&#xe536;',
		'k-i-decrease-vertical-spacing': '&#xe537;',
		'k-i-remove-vertical-spacing': '&#xe538;',
		'k-i-eyedropper': '&#xe539;',
		'k-i-snap-grid': '&#xe53a;',
		'k-i-snap-to-gridlines': '&#xe53b;',
		'k-i-snap-to-snaplines': '&#xe53c;',
		'k-i-dimentions': '&#xe53d;',
		'k-i-align-stretch-element-horizontal': '&#xe53e;',
		'k-i-align-stretch-element-vertical': '&#xe53f;',
		'k-i-align-left-elements': '&#xe540;',
		'k-i-align-center-elements': '&#xe541;',
		'k-i-align-right-elements': '&#xe542;',
		'k-i-align-stretch-elements-horizontal': '&#xe543;',
		'k-i-align-baseline-horizontal': '&#xe544;',
		'k-i-align-top-elements': '&#xe545;',
		'k-i-align-middle-elements': '&#xe546;',
		'k-i-align-bottom-elements': '&#xe547;',
		'k-i-align-stretch-elements-vertical': '&#xe548;',
		'k-i-align-baseline-vertical': '&#xe549;',
		'k-i-justify-start-horizontal': '&#xe54a;',
		'k-i-justify-center-horizontal': '&#xe54b;',
		'k-i-justify-end-horizontal': '&#xe54c;',
		'k-i-justify-between-horizontal': '&#xe54d;',
		'k-i-justify-around-horizontal': '&#xe54e;',
		'k-i-justify-start-vertical': '&#xe54f;',
		'k-i-justify-center-vertical': '&#xe550;',
		'k-i-justify-end-vertical': '&#xe551;',
		'k-i-justify-between-vertical': '&#xe552;',
		'k-i-justify-around-vertical': '&#xe553;',
		'k-i-page-properties': '&#xe600;',
		'k-i-bold': '&#xe601;',
		'k-i-italic': '&#xe602;',
		'k-i-underline': '&#xe603;',
		'k-i-font-family': '&#xe604;',
		'k-i-foreground-color': '&#xe605;',
		'k-i-convert-lowercase': '&#xe606;',
		'k-i-convert-uppercase': '&#xe607;',
		'k-i-strikethrough': '&#xe608;',
		'k-i-sub-script': '&#xe609;',
		'k-i-sup-script': '&#xe60a;',
		'k-i-div': '&#xe60b;',
		'k-i-all': '&#xe60c;',
		'k-i-h1': '&#xe60d;',
		'k-i-h2': '&#xe60e;',
		'k-i-h3': '&#xe60f;',
		'k-i-h4': '&#xe610;',
		'k-i-h5': '&#xe611;',
		'k-i-h6': '&#xe612;',
		'k-i-list-ordered': '&#xe613;',
		'k-i-list-unordered': '&#xe614;',
		'k-i-indent-increase': '&#xe615;',
		'k-i-indent-decrease': '&#xe616;',
		'k-i-insert-up': '&#xe617;',
		'k-i-insert-middle': '&#xe618;',
		'k-i-insert-down': '&#xe619;',
		'k-i-align-top': '&#xe61a;',
		'k-i-align-middle': '&#xe61b;',
		'k-i-align-bottom': '&#xe61c;',
		'k-i-align-left': '&#xe61d;',
		'k-i-align-center': '&#xe61e;',
		'k-i-align-right': '&#xe61f;',
		'k-i-align-justify': '&#xe620;',
		'k-i-align-remove': '&#xe621;',
		'k-i-text-wrap': '&#xe622;',
		'k-i-rule-horizontal': '&#xe623;',
		'k-i-table-align-top-left': '&#xe624;',
		'k-i-table-align-top-center': '&#xe625;',
		'k-i-table-align-top-right': '&#xe626;',
		'k-i-table-align-middle-left': '&#xe627;',
		'k-i-table-align-middle-center': '&#xe628;',
		'k-i-table-align-middle-right': '&#xe629;',
		'k-i-table-align-bottom-left': '&#xe62a;',
		'k-i-table-align-bottom-center': '&#xe62b;',
		'k-i-table-align-bottom-right': '&#xe62c;',
		'k-i-table-align-remove': '&#xe62d;',
		'k-i-borders-all': '&#xe62e;',
		'k-i-borders-outside': '&#xe62f;',
		'k-i-borders-inside': '&#xe630;',
		'k-i-borders-inside-horizontal': '&#xe631;',
		'k-i-borders-inside-vertical': '&#xe632;',
		'k-i-border-top': '&#xe633;',
		'k-i-border-bottom': '&#xe634;',
		'k-i-border-left': '&#xe635;',
		'k-i-border-right': '&#xe636;',
		'k-i-border-no': '&#xe637;',
		'k-i-borders-show-hide': '&#xe638;',
		'k-i-form': '&#xe639;',
		'k-i-form-element': '&#xe63a;',
		'k-i-code-snippet': '&#xe63b;',
		'k-i-select-all': '&#xe63c;',
		'k-i-button': '&#xe63d;',
		'k-i-select-box': '&#xe63e;',
		'k-i-calendar-date': '&#xe63f;',
		'k-i-group-box': '&#xe640;',
		'k-i-textarea': '&#xe641;',
		'k-i-textbox': '&#xe642;',
		'k-i-textbox-hidden': '&#xe643;',
		'k-i-password': '&#xe644;',
		'k-i-paragraph-add': '&#xe645;',
		'k-i-edit-tools': '&#xe646;',
		'k-i-template-manager': '&#xe647;',
		'k-i-change-manually': '&#xe648;',
		'k-i-track-changes': '&#xe649;',
		'k-i-track-changes-enable': '&#xe64a;',
		'k-i-track-changes-accept': '&#xe64b;',
		'k-i-track-changes-accept-all': '&#xe64c;',
		'k-i-track-changes-reject': '&#xe64d;',
		'k-i-track-changes-reject-all': '&#xe64e;',
		'k-i-document-manager': '&#xe64f;',
		'k-i-custom-icon': '&#xe650;',
		'k-i-dictionary-add': '&#xe651;',
		'k-i-image-light-dialog': '&#xe652;',
		'k-i-image-edit': '&#xe653;',
		'k-i-image-map-editor': '&#xe654;',
		'k-i-comment': '&#xe655;',
		'k-i-comment-remove': '&#xe656;',
		'k-i-comments-remove-all': '&#xe657;',
		'k-i-silverlight': '&#xe658;',
		'k-i-media-manager': '&#xe659;',
		'k-i-video-external': '&#xe65a;',
		'k-i-flash-manager': '&#xe65b;',
		'k-i-find-and-replace': '&#xe65c;',
		'k-i-copy': '&#xe65d;',
		'k-i-cut': '&#xe65e;',
		'k-i-paste': '&#xe65f;',
		'k-i-paste-as-html': '&#xe660;',
		'k-i-paste-from-word': '&#xe661;',
		'k-i-paste-from-word-strip-file': '&#xe662;',
		'k-i-paste-html': '&#xe663;',
		'k-i-paste-markdown': '&#xe664;',
		'k-i-paste-plain-text': '&#xe665;',
		'k-i-apply-format': '&#xe666;',
		'k-i-clear-css': '&#xe667;',
		'k-i-copy-format': '&#xe668;',
		'k-i-strip-all-formatting': '&#xe669;',
		'k-i-strip-css-format': '&#xe66a;',
		'k-i-strip-font-elements': '&#xe66b;',
		'k-i-strip-span-elements': '&#xe66c;',
		'k-i-strip-word-formatting': '&#xe66d;',
		'k-i-format-code-block': '&#xe66e;',
		'k-i-style-builder': '&#xe66f;',
		'k-i-module-manager': '&#xe670;',
		'k-i-hyperlink-light-dialog': '&#xe671;',
		'k-i-hyperlink-globe': '&#xe672;',
		'k-i-hyperlink-globe-remove': '&#xe673;',
		'k-i-hyperlink-email': '&#xe674;',
		'k-i-anchor': '&#xe675;',
		'k-i-table-light-dialog': '&#xe676;',
		'k-i-table': '&#xe677;',
		'k-i-table-properties': '&#xe678;',
		'k-i-table-cell': '&#xe679;',
		'k-i-table-cell-properties': '&#xe67a;',
		'k-i-table-column-insert-left': '&#xe67b;',
		'k-i-table-column-insert-right': '&#xe67c;',
		'k-i-table-row-insert-above': '&#xe67d;',
		'k-i-table-row-insert-below': '&#xe67e;',
		'k-i-table-column-delete': '&#xe67f;',
		'k-i-table-row-delete': '&#xe680;',
		'k-i-table-cell-delete': '&#xe681;',
		'k-i-table-delete': '&#xe682;',
		'k-i-cells-merge': '&#xe683;',
		'k-i-cells-merge-horizontally': '&#xe684;',
		'k-i-cells-merge-vertically': '&#xe685;',
		'k-i-cell-split-horizontally': '&#xe686;',
		'k-i-cell-split-vertically': '&#xe687;',
		'k-i-table-unmerge': '&#xe688;',
		'k-i-pane-freeze': '&#xe689;',
		'k-i-row-freeze': '&#xe68a;',
		'k-i-column-freeze': '&#xe68b;',
		'k-i-toolbar-float': '&#xe68c;',
		'k-i-spell-checker': '&#xe68d;',
		'k-i-validation-xhtml': '&#xe68e;',
		'k-i-validation-data': '&#xe68f;',
		'k-i-toggle-full-screen-mode': '&#xe690;',
		'k-i-formula-fx': '&#xe691;',
		'k-i-sum': '&#xe692;',
		'k-i-symbol': '&#xe693;',
		'k-i-dollar': '&#xe694;',
		'k-i-percent': '&#xe695;',
		'k-i-custom-format': '&#xe696;',
		'k-i-decimal-increase': '&#xe697;',
		'k-i-decimal-decrease': '&#xe698;',
		'k-i-font-size': '&#xe699;',
		'k-i-image-absolute-position': '&#xe69a;',
		'k-i-wizard-table': '&#xe69b;',
		'k-i-crosstab': '&#xe69c;',
		'k-i-wizard-crosstab': '&#xe69d;',
		'k-i-table-body': '&#xe69e;',
		'k-i-table-column-groups': '&#xe69f;',
		'k-i-table-corner': '&#xe6a0;',
		'k-i-table-row-groups': '&#xe6a1;',
		'k-i-globe-outline': '&#xe700;',
		'k-i-globe': '&#xe701;',
		'k-i-marker-pin': '&#xe702;',
		'k-i-marker-pin-target': '&#xe703;',
		'k-i-pin': '&#xe704;',
		'k-i-unpin': '&#xe705;',
		'k-i-share': '&#xe800;',
		'k-i-user': '&#xe801;',
		'k-i-inbox': '&#xe802;',
		'k-i-blogger': '&#xe803;',
		'k-i-blogger-box': '&#xe804;',
		'k-i-delicious': '&#xe805;',
		'k-i-delicious-box': '&#xe806;',
		'k-i-digg': '&#xe807;',
		'k-i-digg-box': '&#xe808;',
		'k-i-email': '&#xe809;',
		'k-i-email-box': '&#xe80a;',
		'k-i-facebook': '&#xe80b;',
		'k-i-facebook-box': '&#xe80c;',
		'k-i-google': '&#xe80d;',
		'k-i-google-box': '&#xe80e;',
		'k-i-google-plus': '&#xe80f;',
		'k-i-google-plus-box': '&#xe810;',
		'k-i-linkedin': '&#xe811;',
		'k-i-linkedin-box': '&#xe812;',
		'k-i-myspace': '&#xe813;',
		'k-i-myspace-box': '&#xe814;',
		'k-i-pinterest': '&#xe815;',
		'k-i-pinterest-box': '&#xe816;',
		'k-i-reddit': '&#xe817;',
		'k-i-reddit-box': '&#xe818;',
		'k-i-stumble-upon': '&#xe819;',
		'k-i-stumble-upon-box': '&#xe81a;',
		'k-i-tell-a-friend': '&#xe81b;',
		'k-i-tell-a-friend-box': '&#xe81c;',
		'k-i-tumblr': '&#xe81d;',
		'k-i-tumblr-box': '&#xe81e;',
		'k-i-twitter': '&#xe81f;',
		'k-i-twitter-box': '&#xe820;',
		'k-i-yammer': '&#xe821;',
		'k-i-yammer-box': '&#xe822;',
		'k-i-behance': '&#xe823;',
		'k-i-behance-box': '&#xe824;',
		'k-i-dribbble': '&#xe825;',
		'k-i-dribbble-box': '&#xe826;',
		'k-i-rss': '&#xe827;',
		'k-i-rss-box': '&#xe828;',
		'k-i-vimeo': '&#xe829;',
		'k-i-vimeo-box': '&#xe82a;',
		'k-i-youtube': '&#xe82b;',
		'k-i-youtube-box': '&#xe82c;',
		'k-i-folder': '&#xe900;',
		'k-i-folder-open': '&#xe901;',
		'k-i-folder-add': '&#xe902;',
		'k-i-folder-up': '&#xe903;',
		'k-i-folder-more': '&#xe904;',
		'k-i-aggregate-fields': '&#xe905;',
		'k-i-file': '&#xe906;',
		'k-i-file-add': '&#xe907;',
		'k-i-file-txt': '&#xe908;',
		'k-i-file-csv': '&#xe909;',
		'k-i-file-excel': '&#xe90a;',
		'k-i-file-word': '&#xe90b;',
		'k-i-file-mdb': '&#xe90c;',
		'k-i-file-ppt': '&#xe90d;',
		'k-i-file-pdf': '&#xe90e;',
		'k-i-file-psd': '&#xe90f;',
		'k-i-file-flash': '&#xe910;',
		'k-i-file-config': '&#xe911;',
		'k-i-file-ascx': '&#xe912;',
		'k-i-file-bac': '&#xe913;',
		'k-i-file-zip': '&#xe914;',
		'k-i-film': '&#xe915;',
		'k-i-css3': '&#xe916;',
		'k-i-html5': '&#xe917;',
		'k-i-html': '&#xe918;',
		'k-i-css': '&#xe919;',
		'k-i-js': '&#xe91a;',
		'k-i-exe': '&#xe91b;',
		'k-i-csproj': '&#xe91c;',
		'k-i-vbproj': '&#xe91d;',
		'k-i-cs': '&#xe91e;',
		'k-i-vb': '&#xe91f;',
		'k-i-sln': '&#xe920;',
		'k-i-cloud': '&#xe921;',
		'k-i-file-horizontal': '&#xe922;',
		'k-i-subreport': '&#xe923;',
		'k-i-data': '&#xe924;',
		'k-i-report-header-section': '&#xe925;',
		'k-i-report-footer-section': '&#xe926;',
		'k-i-group-header-section': '&#xe927;',
		'k-i-group-footer-section': '&#xe928;',
		'k-i-page-header-section': '&#xe929;',
		'k-i-page-footer-section': '&#xe92a;',
		'k-i-detail-section': '&#xe92b;',
		'k-i-toc-section': '&#xe92c;',
		'k-i-group-section': '&#xe92d;',
		'k-i-parameters': '&#xe92e;',
		'k-i-data-csv': '&#xe92f;',
		'k-i-data-json': '&#xe930;',
		'k-i-data-sql': '&#xe931;',
		'k-i-data-web': '&#xe932;',
		'k-i-group-collection': '&#xe933;',
		'k-i-parameter-boolean': '&#xe934;',
		'k-i-parameter-date-time': '&#xe935;',
		'k-i-parameter-float': '&#xe936;',
		'k-i-parameter-integer': '&#xe937;',
		'k-i-parameter-string': '&#xe938;',
		'k-i-toc-section-level': '&#xe939;',
		'k-i-inherited': '&#xe93a;',
		'k-i-file-video': '&#xe93b;',
		'k-i-file-audio': '&#xe93c;',
		'k-i-file-image': '&#xe93d;',
		'k-i-file-presentation': '&#xe93e;',
		'k-i-file-data': '&#xe93f;',
		'k-i-file-disc-image': '&#xe940;',
		'k-i-file-programming': '&#xe941;',
		'k-i-parameters-byte-array': '&#xe942;',
		'k-i-parameters-unknown': '&#xe943;',
		'k-i-file-error': '&#xe944;',
		'k-i-files-error': '&#xe945;',
		'k-i-graph': '&#xea00;',
		'k-i-column-clustered': '&#xea01;',
		'k-i-column-stacked': '&#xea02;',
		'k-i-column-stacked100': '&#xea03;',
		'k-i-column-range': '&#xea04;',
		'k-i-bar-clustered': '&#xea05;',
		'k-i-bar-stacked': '&#xea06;',
		'k-i-bar-stacked100': '&#xea07;',
		'k-i-bar-range': '&#xea08;',
		'k-i-area-clustered': '&#xea09;',
		'k-i-area-stacked': '&#xea0a;',
		'k-i-area-stacked100': '&#xea0b;',
		'k-i-area-range': '&#xea0c;',
		'k-i-line1': '&#xea0d;',
		'k-i-line-stacked': '&#xea0e;',
		'k-i-line-stacked100': '&#xea0f;',
		'k-i-line-markers': '&#xea10;',
		'k-i-line-stacked-markers': '&#xea11;',
		'k-i-line-stacked100-markers': '&#xea12;',
		'k-i-pie': '&#xea13;',
		'k-i-doughnut': '&#xea14;',
		'k-i-scatter': '&#xea15;',
		'k-i-scatter-smooth-lines-markers': '&#xea16;',
		'k-i-scatter-smooth-lines': '&#xea17;',
		'k-i-scatter-straight-lines-markers': '&#xea18;',
		'k-i-scatter-straight-lines': '&#xea19;',
		'k-i-bubble': '&#xea1a;',
		'k-i-candle-stick': '&#xea1b;',
		'k-i-bar': '&#xea1c;',
		'k-i-radar': '&#xea1d;',
		'k-i-radar-markers': '&#xea1e;',
		'k-i-radar-filled': '&#xea1f;',
		'k-i-rose': '&#xea20;',
		'k-i-choropleth': '&#xea21;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/k-i-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
