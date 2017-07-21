'use strict';

// Native
const fs = require('fs');
const path = require('path');

// Packages
const test = require('ava');
const tmp = require('tmp');

// Ours
const nodecgApiContext = require('../../lib/util/nodecg-api-context');

tmp.setGracefulCleanup();
const tmpobj = tmp.dirSync({unsafeCleanup: true});
const tmpPath = tmpobj.name;
nodecgApiContext.set({
	bundleConfig: {
		cachePath: tmpPath
	}
});

const computeHash = require('../../lib/util/compute-hash');
const isCached = require('../../lib/cache/is-cached');

// Unit under test
const addToCache = require('../../lib/cache/add-to-cache');

test.after('remove tmp dir', () => {
	tmpobj.removeCallback();
});

test('files added to the cache are done so with md5', async t => {
	const buffer = fs.readFileSync(path.resolve(__dirname, '../fixtures/pexels-photo-472457.jpeg'));
	const md5hash = computeHash(buffer);
	await addToCache(buffer, {fileName: 'foo', hash: md5hash});
	t.true(await isCached(md5hash));
});
