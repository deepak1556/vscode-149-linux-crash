import * as path from 'path';

import { runTests } from '../../lib/index';

const CRASH_DIR = path.resolve(__dirname, '../../../../../crash');

async function go() {
	try {
		const extensionDevelopmentPath = path.resolve(__dirname, '../../../');
		const extensionTestsPath = path.resolve(__dirname, './suite');

		await runTests({
			extensionDevelopmentPath,
			extensionTestsPath,
      launchArgs: [`--crash-reporter-directory=${CRASH_DIR}`]
		});
	} catch (err) {
		console.error('Failed to run tests');
		console.error(err);
		process.exit(1);
	}
}

go();
