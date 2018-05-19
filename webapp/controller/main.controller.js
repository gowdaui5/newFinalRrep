sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("cm.controller.main", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf view.main
		 */
		onInit: function() {
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.loadData("localData.json");
			sap.ui.getCore().setModel(oModel);
		},
		onPress: function() {
			var oMod = this.getView().getModel();
			if (oMod.getProperty("/empDetails/enable") === false) {
				oMod.setProperty("/empDetails/enable", true);
			} else {
				oMod.setProperty("/empDetails/enable", false);
			}

		},
		onChange: function() {
			var oMode = sap.ui.getCore().getModel();
			var oP = oMode.getProperty("/empDetails/empName");
			var oTxt = this.getView().byId("idTxt");
			oTxt.setText(oP);
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf view.main
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf view.main
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf view.main
		 */
		//	onExit: function() {
		//
		//	}

	});

});