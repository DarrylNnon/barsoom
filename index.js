import * as core from '@actions/core';

const nameToGreet = core.getInput('name');
const output_value = `Hello ${name} from Barsoom!`;
core.setOutput('greeting', 'output_Value');