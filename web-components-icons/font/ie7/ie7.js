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
		el.innerHTML = '<span style="font-family: \'widgets\'">' + entity + '</span>' + html;
	}
	var icons = {
		'i-arrow-45-up-right': '&#xe000;',
		'i-arrow-45-down-right': '&#xe001;',
		'i-arrow-45-down-left': '&#xe002;',
		'i-arrow-45-up-left': '&#xe003;',
		'i-arrow-60-up': '&#xe004;',
		'i-arrow-60-right': '&#xe005;',
		'i-arrow-60-down': '&#xe006;',
		'i-arrow-60-left': '&#xe007;',
		'i-arrow-end-up': '&#xe008;',
		'i-arrow-end-right': '&#xe009;',
		'i-arrow-end-down': '&#xe00a;',
		'i-arrow-end-left': '&#xe00b;',
		'i-arrow-double-60-up': '&#xe00c;',
		'i-arrow-double-60-right': '&#xe00d;',
		'i-arrow-double-60-down': '&#xe00e;',
		'i-arrow-double-60-left': '&#xe00f;',
		'i-arrows-kpi': '&#xe010;',
		'i-arrows-no-change': '&#xe011;',
		'i-arrow-overflow-down': '&#xe012;',
		'i-arrow-chevron-up': '&#xe013;',
		'i-arrow-chevron-right': '&#xe014;',
		'i-arrow-chevron-down': '&#xe015;',
		'i-arrow-chevron-left': '&#xe016;',
		'i-arrow-up': '&#xe017;',
		'i-arrow-right': '&#xe018;',
		'i-arrow-down': '&#xe019;',
		'i-arrow-left': '&#xe01a;',
		'i-arrow-drill': '&#xe01b;',
		'i-arrow-parent': '&#xe01c;',
		'i-arrow-root': '&#xe01d;',
		'i-arrows-resizing': '&#xe01e;',
		'i-arrows-dimensions': '&#xe01f;',
		'i-arrows-swap': '&#xe020;',
		'i-drag-and-drop': '&#xe021;',
		'i-categorize': '&#xe022;',
		'i-grid': '&#xe023;',
		'i-grid-layout': '&#xe024;',
		'i-group': '&#xe025;',
		'i-ungroup': '&#xe026;',
		'i-handler-drag': '&#xe027;',
		'i-layout': '&#xe028;',
		'i-layout-1-by-4': '&#xe029;',
		'i-layout-2-by-2': '&#xe02a;',
		'i-layout-side-by-side': '&#xe02b;',
		'i-layout-stacked': '&#xe02c;',
		'i-columns': '&#xe02d;',
		'i-rows': '&#xe02e;',
		'i-reorder': '&#xe02f;',
		'i-menu': '&#xe030;',
		'i-more-vertical': '&#xe031;',
		'i-more-horizontal': '&#xe032;',
		'i-undo': '&#xe100;',
		'i-redo': '&#xe101;',
		'i-reset': '&#xe102;',
		'i-reload': '&#xe103;',
		'i-non-recurrence': '&#xe104;',
		'i-reset-sm': '&#xe105;',
		'i-reload-sm': '&#xe106;',
		'i-clock': '&#xe107;',
		'i-calendar': '&#xe108;',
		'i-save': '&#xe109;',
		'i-print': '&#xe10a;',
		'i-edit': '&#xe10b;',
		'i-delete': '&#xe10c;',
		'i-attachment': '&#xe10d;',
		'i-attachment-45': '&#xe10e;',
		'i-link-horizontal': '&#xe10f;',
		'i-unlink-horizontal': '&#xe110;',
		'i-link-vertical': '&#xe111;',
		'i-unlink-vertical': '&#xe112;',
		'i-lock': '&#xe113;',
		'i-unlock': '&#xe114;',
		'i-cancel': '&#xe115;',
		'i-cancel-outline': '&#xe116;',
		'i-cancel-circle': '&#xe117;',
		'i-check': '&#xe118;',
		'i-check-outline': '&#xe119;',
		'i-check-circle': '&#xe11a;',
		'i-close': '&#xe11b;',
		'i-close-outline': '&#xe11c;',
		'i-close-circle': '&#xe11d;',
		'i-plus': '&#xe11e;',
		'i-plus-outline': '&#xe11f;',
		'i-plus-circle': '&#xe120;',
		'i-minus': '&#xe121;',
		'i-minus-outline': '&#xe122;',
		'i-minus-circle': '&#xe123;',
		'i-sort-asc': '&#xe124;',
		'i-sort-desc': '&#xe125;',
		'i-unsort': '&#xe126;',
		'i-sort-asc-sm': '&#xe127;',
		'i-sort-desc-sm': '&#xe128;',
		'i-filter': '&#xe129;',
		'i-filter-clear': '&#xe12a;',
		'i-filter-sm': '&#xe12b;',
		'i-filter-sort-asc-sm': '&#xe12c;',
		'i-filter-sort-desc-sm': '&#xe12d;',
		'i-filter-add-expression': '&#xe12e;',
		'i-filter-add-group': '&#xe12f;',
		'i-login': '&#xe130;',
		'i-logout': '&#xe131;',
		'i-download': '&#xe132;',
		'i-upload': '&#xe133;',
		'i-hyperlink-open': '&#xe134;',
		'i-hyperlink-open-sm': '&#xe135;',
		'i-launch': '&#xe136;',
		'i-window': '&#xe137;',
		'i-windows': '&#xe138;',
		'i-window-minimize': '&#xe139;',
		'i-gear': '&#xe13a;',
		'i-gears': '&#xe13b;',
		'i-wrench': '&#xe13c;',
		'i-preview': '&#xe13d;',
		'i-zoom': '&#xe13e;',
		'i-zoom-in': '&#xe13f;',
		'i-zoom-out': '&#xe140;',
		'i-pan': '&#xe141;',
		'i-calculator': '&#xe142;',
		'i-cart': '&#xe143;',
		'i-connector': '&#xe144;',
		'i-plus-sm': '&#xe145;',
		'i-minus-sm': '&#xe146;',
		'i-kpi-status-deny': '&#xe147;',
		'i-kpi-status-hold': '&#xe148;',
		'i-kpi-status-open': '&#xe149;',
		'i-play': '&#xe200;',
		'i-pause': '&#xe201;',
		'i-stop': '&#xe202;',
		'i-rewind': '&#xe203;',
		'i-forward': '&#xe204;',
		'i-volume-down': '&#xe205;',
		'i-volume-up': '&#xe206;',
		'i-volume-off': '&#xe207;',
		'i-hd': '&#xe208;',
		'i-subtitles': '&#xe209;',
		'i-playlist': '&#xe20a;',
		'i-audio': '&#xe20b;',
		'i-play-sm': '&#xe20c;',
		'i-pause-sm': '&#xe20d;',
		'i-stop-sm': '&#xe20e;',
		'i-heart-outline': '&#xe300;',
		'i-heart': '&#xe301;',
		'i-star-outline': '&#xe302;',
		'i-star': '&#xe303;',
		'i-checkbox': '&#xe304;',
		'i-checkbox-checked': '&#xe305;',
		'i-tri-state-indeterminate': '&#xe306;',
		'i-tri-state-null': '&#xe307;',
		'i-circle': '&#xe308;',
		'i-radiobutton': '&#xe309;',
		'i-radiobutton-checked': '&#xe30a;',
		'i-notification': '&#xe400;',
		'i-information': '&#xe401;',
		'i-question': '&#xe402;',
		'i-warning': '&#xe403;',
		'i-photo-camera': '&#xe500;',
		'i-image': '&#xe501;',
		'i-image-export': '&#xe502;',
		'i-zoom-actual-size': '&#xe503;',
		'i-zoom-best-fit': '&#xe504;',
		'i-image-resize': '&#xe505;',
		'i-crop': '&#xe506;',
		'i-mirror': '&#xe507;',
		'i-flip-horizontal': '&#xe508;',
		'i-flip-vertical': '&#xe509;',
		'i-rotate': '&#xe50a;',
		'i-rotate-right': '&#xe50b;',
		'i-rotate-left': '&#xe50c;',
		'i-brush': '&#xe50d;',
		'i-palette': '&#xe50e;',
		'i-paint': '&#xe50f;',
		'i-line': '&#xe510;',
		'i-brightness-contrast': '&#xe511;',
		'i-saturation': '&#xe512;',
		'i-invert-colors': '&#xe513;',
		'i-transperancy': '&#xe514;',
		'i-greyscale': '&#xe515;',
		'i-blur': '&#xe516;',
		'i-sharpen': '&#xe517;',
		'i-shape': '&#xe518;',
		'i-round-corners': '&#xe519;',
		'i-front-element': '&#xe51a;',
		'i-back-element': '&#xe51b;',
		'i-forward-element': '&#xe51c;',
		'i-backward-element': '&#xe51d;',
		'i-align-left-element': '&#xe51e;',
		'i-align-center-element': '&#xe51f;',
		'i-align-right-element': '&#xe520;',
		'i-align-top-element': '&#xe521;',
		'i-align-middle-element': '&#xe522;',
		'i-align-bottom-element': '&#xe523;',
		'i-thumbnails-up': '&#xe524;',
		'i-thumbnails-right': '&#xe525;',
		'i-thumbnails-down': '&#xe526;',
		'i-thumbnails-left': '&#xe527;',
		'i-full-screen': '&#xe528;',
		'i-full-screen-exit': '&#xe529;',
		'i-reset-color': '&#xe52a;',
		'i-page-properties': '&#xe600;',
		'i-bold': '&#xe601;',
		'i-italic': '&#xe602;',
		'i-underline': '&#xe603;',
		'i-font-family': '&#xe604;',
		'i-foreground-color': '&#xe605;',
		'i-convert-lowercase': '&#xe606;',
		'i-convert-uppercase': '&#xe607;',
		'i-strikethrough': '&#xe608;',
		'i-sub-script': '&#xe609;',
		'i-sup-script': '&#xe60a;',
		'i-div': '&#xe60b;',
		'i-all': '&#xe60c;',
		'i-h1': '&#xe60d;',
		'i-h2': '&#xe60e;',
		'i-h3': '&#xe60f;',
		'i-h4': '&#xe610;',
		'i-h5': '&#xe611;',
		'i-h6': '&#xe612;',
		'i-list-ordered': '&#xe613;',
		'i-list-unordered': '&#xe614;',
		'i-indent-increase': '&#xe615;',
		'i-indent-decrease': '&#xe616;',
		'i-insert-up': '&#xe617;',
		'i-insert-middle': '&#xe618;',
		'i-insert-down': '&#xe619;',
		'i-align-top': '&#xe61a;',
		'i-align-middle': '&#xe61b;',
		'i-align-bottom': '&#xe61c;',
		'i-align-left': '&#xe61d;',
		'i-align-center': '&#xe61e;',
		'i-align-right': '&#xe61f;',
		'i-align-justify': '&#xe620;',
		'i-align-remove': '&#xe621;',
		'i-text-wrap': '&#xe622;',
		'i-rule-horizontal': '&#xe623;',
		'i-table-align-top-left': '&#xe624;',
		'i-table-align-top-center': '&#xe625;',
		'i-table-align-top-right': '&#xe626;',
		'i-table-align-middle-left': '&#xe627;',
		'i-table-align-middle-center': '&#xe628;',
		'i-table-align-middle-right': '&#xe629;',
		'i-table-align-bottom-left': '&#xe62a;',
		'i-table-align-bottom-center': '&#xe62b;',
		'i-table-align-bottom-right': '&#xe62c;',
		'i-table-align-remove': '&#xe62d;',
		'i-borders-all': '&#xe62e;',
		'i-borders-outside': '&#xe62f;',
		'i-borders-inside': '&#xe630;',
		'i-borders-inside-horizontal': '&#xe631;',
		'i-borders-inside-vertical': '&#xe632;',
		'i-border-top': '&#xe633;',
		'i-border-bottom': '&#xe634;',
		'i-border-left': '&#xe635;',
		'i-border-right': '&#xe636;',
		'i-border-no': '&#xe637;',
		'i-borders-show-hide': '&#xe638;',
		'i-form': '&#xe639;',
		'i-form-element': '&#xe63a;',
		'i-code-snippet': '&#xe63b;',
		'i-select-all': '&#xe63c;',
		'i-button': '&#xe63d;',
		'i-select-box': '&#xe63e;',
		'i-calendar-date': '&#xe63f;',
		'i-group-box': '&#xe640;',
		'i-textarea': '&#xe641;',
		'i-textbox': '&#xe642;',
		'i-textbox-hidden': '&#xe643;',
		'i-password': '&#xe644;',
		'i-paragraph-add': '&#xe645;',
		'i-edit-tools': '&#xe646;',
		'i-template-manager': '&#xe647;',
		'i-change-manually': '&#xe648;',
		'i-track-changes': '&#xe649;',
		'i-track-changes-enable': '&#xe64a;',
		'i-track-changes-accept': '&#xe64b;',
		'i-track-changes-accept-all': '&#xe64c;',
		'i-track-changes-reject': '&#xe64d;',
		'i-track-changes-reject-all': '&#xe64e;',
		'i-document-manager': '&#xe64f;',
		'i-custom-icon': '&#xe650;',
		'i-dictionary-add': '&#xe651;',
		'i-image-light-dialog': '&#xe652;',
		'i-image-edit': '&#xe653;',
		'i-image-map-editor': '&#xe654;',
		'i-comment': '&#xe655;',
		'i-comment-remove': '&#xe656;',
		'i-comments-remove-all': '&#xe657;',
		'i-silverlight': '&#xe658;',
		'i-media-manager': '&#xe659;',
		'i-video-external': '&#xe65a;',
		'i-flash-manager': '&#xe65b;',
		'i-find-and-replace': '&#xe65c;',
		'i-copy': '&#xe65d;',
		'i-cut': '&#xe65e;',
		'i-paste': '&#xe65f;',
		'i-paste-as-html': '&#xe660;',
		'i-paste-from-word': '&#xe661;',
		'i-paste-from-word-strip-file': '&#xe662;',
		'i-paste-html': '&#xe663;',
		'i-paste-markdown': '&#xe664;',
		'i-paste-plain-text': '&#xe665;',
		'i-apply-format': '&#xe666;',
		'i-clear-css': '&#xe667;',
		'i-copy-format': '&#xe668;',
		'i-strip-all-formating': '&#xe669;',
		'i-strip-css-format': '&#xe66a;',
		'i-strip-font-elements': '&#xe66b;',
		'i-strip-span-elements': '&#xe66c;',
		'i-strip-word-formatting': '&#xe66d;',
		'i-format-code-block': '&#xe66e;',
		'i-style-builder': '&#xe66f;',
		'i-module-manager': '&#xe670;',
		'i-hyperlink-light-dialog': '&#xe671;',
		'i-hyperlink-globe': '&#xe672;',
		'i-hyperlink-globe-remove': '&#xe673;',
		'i-hyperlink-email': '&#xe674;',
		'i-anchor': '&#xe675;',
		'i-table-light-dialog': '&#xe676;',
		'i-table': '&#xe677;',
		'i-table-properties': '&#xe678;',
		'i-table-cell': '&#xe679;',
		'i-table-cell-properties': '&#xe67a;',
		'i-table-column-insert-left': '&#xe67b;',
		'i-table-column-insert-right': '&#xe67c;',
		'i-table-row-insert-above': '&#xe67d;',
		'i-table-row-insert-below': '&#xe67e;',
		'i-table-column-delete': '&#xe67f;',
		'i-table-row-delete': '&#xe680;',
		'i-table-cell-delete': '&#xe681;',
		'i-table-delete': '&#xe682;',
		'i-cells-merge': '&#xe683;',
		'i-cells-merge-horizontally': '&#xe684;',
		'i-cells-merge-vertically': '&#xe685;',
		'i-cell-split-horizontally': '&#xe686;',
		'i-cell-split-vertically': '&#xe687;',
		'i-table-unmerge': '&#xe688;',
		'i-pane-freeze': '&#xe689;',
		'i-row-freeze': '&#xe68a;',
		'i-column-freeze': '&#xe68b;',
		'i-toolbar-float': '&#xe68c;',
		'i-spell-checker': '&#xe68d;',
		'i-validation-xhtml': '&#xe68e;',
		'i-validation-data': '&#xe68f;',
		'i-toggle-full-screen-mode': '&#xe690;',
		'i-formula-fx': '&#xe691;',
		'i-sum': '&#xe692;',
		'i-symbol': '&#xe693;',
		'i-dollar': '&#xe694;',
		'i-percent': '&#xe695;',
		'i-custom-format': '&#xe696;',
		'i-decimal-increase': '&#xe697;',
		'i-decimal-decrease': '&#xe698;',
		'i-font-size': '&#xe699;',
		'i-image-absolute-position': '&#xe69a;',
		'i-globe-outline': '&#xe700;',
		'i-globe': '&#xe701;',
		'i-marker-pin': '&#xe702;',
		'i-marker-pin-target': '&#xe703;',
		'i-pin': '&#xe704;',
		'i-unpin': '&#xe705;',
		'i-share': '&#xe800;',
		'i-user': '&#xe801;',
		'i-inbox': '&#xe802;',
		'i-blogger': '&#xe803;',
		'i-blogger-box': '&#xe804;',
		'i-delicious': '&#xe805;',
		'i-delicious-box': '&#xe806;',
		'i-digg': '&#xe807;',
		'i-digg-box': '&#xe808;',
		'i-email': '&#xe809;',
		'i-email-box': '&#xe80a;',
		'i-facebook': '&#xe80b;',
		'i-facebook-box': '&#xe80c;',
		'i-google': '&#xe80d;',
		'i-google-box': '&#xe80e;',
		'i-google-plus': '&#xe80f;',
		'i-google-plus-box': '&#xe810;',
		'i-linkedin': '&#xe811;',
		'i-linkedin-box': '&#xe812;',
		'i-myspace': '&#xe813;',
		'i-myspace-box': '&#xe814;',
		'i-pinterest': '&#xe815;',
		'i-pinterest-box': '&#xe816;',
		'i-reddit': '&#xe817;',
		'i-reddit-box': '&#xe818;',
		'i-stumble-upon': '&#xe819;',
		'i-stumble-upon-box': '&#xe81a;',
		'i-tell-a-friend': '&#xe81b;',
		'i-tell-a-friend-box': '&#xe81c;',
		'i-tumblr': '&#xe81d;',
		'i-tumblr-box': '&#xe81e;',
		'i-twitter': '&#xe81f;',
		'i-twitter-box': '&#xe820;',
		'i-yammer': '&#xe821;',
		'i-yammer-box': '&#xe822;',
		'i-behance': '&#xe823;',
		'i-behance-box': '&#xe824;',
		'i-dribbble': '&#xe825;',
		'i-dribbble-box': '&#xe826;',
		'i-rss': '&#xe827;',
		'i-rss-box': '&#xe828;',
		'i-vimeo': '&#xe829;',
		'i-vimeo-box': '&#xe82a;',
		'i-youtube': '&#xe82b;',
		'i-youtube-box': '&#xe82c;',
		'i-folder': '&#xe900;',
		'i-folder-open': '&#xe901;',
		'i-folder-add': '&#xe902;',
		'i-folder-up': '&#xe903;',
		'i-folder-more': '&#xe904;',
		'i-aggregate-fields': '&#xe905;',
		'i-file': '&#xe906;',
		'i-file-add': '&#xe907;',
		'i-file-txt': '&#xe908;',
		'i-file-csv': '&#xe909;',
		'i-file-excel': '&#xe90a;',
		'i-file-word': '&#xe90b;',
		'i-file-mdb': '&#xe90c;',
		'i-file-ppt': '&#xe90d;',
		'i-file-pdf': '&#xe90e;',
		'i-file-psd': '&#xe90f;',
		'i-file-flash': '&#xe910;',
		'i-file-config': '&#xe911;',
		'i-file-ascx': '&#xe912;',
		'i-file-bac': '&#xe913;',
		'i-file-zip': '&#xe914;',
		'i-film': '&#xe915;',
		'i-css3': '&#xe916;',
		'i-html5': '&#xe917;',
		'i-html': '&#xe918;',
		'i-css': '&#xe919;',
		'i-js': '&#xe91a;',
		'i-exe': '&#xe91b;',
		'i-csproj': '&#xe91c;',
		'i-vbproj': '&#xe91d;',
		'i-cs': '&#xe91e;',
		'i-vb': '&#xe91f;',
		'i-sln': '&#xe920;',
		'i-cloud': '&#xe921;',
		'i-file-horizontal': '&#xe922;',
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
		c = c.match(/i-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
