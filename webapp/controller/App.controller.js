sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function(Controller, MessageToast, JSONModel, ResourceModel) {
	"use strict";

	return Controller.extend("sap.ui.bootcamp.controller.App", {
		
		onInit : function () {
		// set data model on view
		var oData = {
			field : {
				username : "Username"
			}
		};
		
		var i18nModel = new ResourceModel({
			bundleName: "sap.ui.bootcamp.i18n.i18n"
		});
		this.getView().setModel(i18nModel, "i18n");

		var oModel = new JSONModel(oData);
		this.getView().setModel(oModel);
		},

		onLoginPress: function(){
			// read msg from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/field/username");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);
			// show message
			MessageToast.show(sMsg);
			// var oUsername = this.getView().byId("username").getValue();
			// var oPassword = this.getView().byId("password").getValue();
			//console.log(oUserName);

			// if (oUsername.length === 0 || oPassword.length === 0){
			// 	MessageToast.show("Please fill in all fields");
			// }
			// else if(oUsername.length > 8 || oUsername.length < 6){
			// 	MessageToast.show("Username must be 6 to 8 characters ONLY");
			// }
			// else if(oPassword.length > 10 || oPassword.length < 7){
			// 	MessageToast.show("Password must be 7 to 10 characters ONLY");
			// }
			// else if(oUsername !== "galvezcg"){
			// 	MessageToast.show("Incorrect username");
			// }
			// else if(oPassword !== "Today123"){
			// 	MessageToast.show("Incorrect password");
			// }
			// else
			// {
			// 	MessageToast.show("Hello " + oUsername);
			// }
		}
		
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sap.ui.bootcamp.view.App
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sap.ui.bootcamp.view.App
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sap.ui.bootcamp.view.App
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sap.ui.bootcamp.view.App
		 */
		//	onExit: function() {
		//
		//	}

	});

});