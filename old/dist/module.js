System.register(["@grafana/data", "app/plugins/sdk", "./warp10-datasource", "./warp10-config.controller", "./warp10-query.controller", "./warp10-annotation.controller"], function (exports_1, context_1) {
    "use strict";
    var data_1, sdk_1, warp10_datasource_1, warp10_config_controller_1, warp10_query_controller_1, warp10_annotation_controller_1, plugin;
    var __moduleName = context_1 && context_1.id;
    function getCSSPath(sheet) {
        return "plugins/ovh-warp10-datasource/style/" + sheet + ".css";
    }
    return {
        setters: [
            function (data_1_1) {
                data_1 = data_1_1;
            },
            function (sdk_1_1) {
                sdk_1 = sdk_1_1;
            },
            function (warp10_datasource_1_1) {
                warp10_datasource_1 = warp10_datasource_1_1;
            },
            function (warp10_config_controller_1_1) {
                warp10_config_controller_1 = warp10_config_controller_1_1;
            },
            function (warp10_query_controller_1_1) {
                warp10_query_controller_1 = warp10_query_controller_1_1;
            },
            function (warp10_annotation_controller_1_1) {
                warp10_annotation_controller_1 = warp10_annotation_controller_1_1;
            }
        ],
        execute: function () {
            exports_1("Datasource", warp10_datasource_1.default);
            exports_1("ConfigCtrl", warp10_config_controller_1.default);
            exports_1("QueryCtrl", warp10_query_controller_1.default);
            exports_1("AnnotationsQueryCtrl", warp10_annotation_controller_1.default);
            sdk_1.loadPluginCss({
                dark: getCSSPath('dark'),
                light: getCSSPath('light')
            });
            exports_1("plugin", plugin = data_1.DataSourcePlugin(warp10_datasource_1.default));
        }
    };
});
