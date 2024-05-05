Blockly.Blocks['block_maker_esp32_4wdcar_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Maker-ESP32 四驅德中小車 初始化");
    this.appendDummyInput()
        .appendField("左前輪(M1)")
        .appendField("腳位1")
        .appendField(new Blockly.FieldTextInput("27"), "M1_1")
        .appendField("腳位2")
        .appendField(new Blockly.FieldTextInput("13"), "M1_2")
        .appendField("左後輪(M2)")
        .appendField("腳位1")
        .appendField(new Blockly.FieldTextInput("4"), "M2_1")
        .appendField("腳位2")
        .appendField(new Blockly.FieldTextInput("2"), "M2_2");
    this.appendDummyInput()
        .appendField("右前輪(M3)")
        .appendField("腳位1")
        .appendField(new Blockly.FieldTextInput("17"), "M3_1")
        .appendField("腳位2")
        .appendField(new Blockly.FieldTextInput("12"), "M3_2")
        .appendField("右後輪(M4)")
        .appendField("腳位1")
        .appendField(new Blockly.FieldTextInput("15"), "M4_1")
        .appendField("腳位2")
        .appendField(new Blockly.FieldTextInput("14"), "M4_2");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};