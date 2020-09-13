import * as path from 'path';

import { runTests } from '../../lib/index';

async function go() {
	try {
		const extensionDevelopmentPath = path.resolve(__dirname, '../../../');
		const extensionTestsPath = path.resolve(__dirname, './suite');

		await runTests({
			extensionDevelopmentPath,
			extensionTestsPath,
			version: '1.48.2',
			launchArgs: ['--disable-gpu']
		});
	} catch (err) {
		console.error('Failed to run tests');
		console.error(err);
		process.exit(1);
	}
}

go();
