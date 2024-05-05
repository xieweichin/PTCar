Blockly.JavaScript['block_maker_esp32_4wdcar_init'] = function(block) {
  var text_m1_1 = block.getFieldValue('M1_1');
  var text_m1_2 = block.getFieldValue('M1_2');
  var text_m2_1 = block.getFieldValue('M2_1');
  var text_m2_2 = block.getFieldValue('M2_2');
  var text_m3_1 = block.getFieldValue('M3_1');
  var text_m3_2 = block.getFieldValue('M3_2');
  var text_m4_1 = block.getFieldValue('M4_1');
  var text_m4_2 = block.getFieldValue('M4_2');
  // TODO: Assemble JavaScript into code variable.
  
  Blockly.Arduino.definitions_['<Arduino.h>'] = '#include <Arduino.h>';

  Blockly.Arduino.setups_['M1'] = '// M1 馬達腳位設定';
  Blockly.Arduino.setups_['M1_1'] = 'pinMode('+ text_m1_1 +', OUTPUT);';
  Blockly.Arduino.setups_['M1_2'] = 'pinMode('+ text_m1_2 +', OUTPUT);';

  Blockly.Arduino.setups_['M2'] = '// M2 馬達腳位設定';
  Blockly.Arduino.setups_['M2_1'] = 'pinMode('+ text_m1_1 +', OUTPUT);';
  Blockly.Arduino.setups_['M2_2'] = 'pinMode('+ text_m1_2 +', OUTPUT);';

  Blockly.Arduino.setups_['M3'] = '// M3 馬達腳位設定';
  Blockly.Arduino.setups_['M3_1'] = 'pinMode('+ text_m1_1 +', OUTPUT);';
  Blockly.Arduino.setups_['M3_2'] = 'pinMode('+ text_m1_2 +', OUTPUT);';

  Blockly.Arduino.setups_['M4'] = '// M4 馬達腳位設定';
  Blockly.Arduino.setups_['M4_1'] = 'pinMode('+ text_m1_1 +', OUTPUT);';
  Blockly.Arduino.setups_['M4_2'] = 'pinMode('+ text_m1_2 +', OUTPUT);';

  var code = '';
  return code;
};