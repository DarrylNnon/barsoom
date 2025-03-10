import * as core from '@actions/core';
import * as core from '@actions/github';

try {
    const nameToGreet = core.getInput('name');
    const output_value = `Hello ${francklin}!`;
    core.setOutput('greeting', 'output_Value');
} catch (error) {
    core.setFailed(error.message);
}