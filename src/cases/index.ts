#!/usr/bin/env node

/**
 * CLI dispatcher for running test cases under clinic.js profiling
 * 
 * Usage:
 *   vite-node src/cases/index.ts <version> [test-case]
 *   vite-node src/cases/index.ts beta
 *   vite-node src/cases/index.ts v3 simple-download
 *   TEST_CASE=simple-download vite-node src/cases/index.ts beta
 * 
 * Arguments:
 *   version     - Required. Version to test (e.g., beta, v3, v4)
 *   test-case   - Optional. Test case name (default: "simple-download")
 *                 Can also be set via TEST_CASE env var
 */

import { toCamelCase, toPascalCase } from "./utils.js";

const version = process.argv[2];
const testCase = process.argv[3] || process.env.TEST_CASE || 'simple-download';

if (!version) {
    console.error('❌ Error: version argument is required');
    console.error('Usage: vite-node src/cases/index.ts <version> [test-case]');
    console.error('Example: vite-node src/cases/index.ts beta simple-download');
    process.exit(1);
}



// e.g., "simple-download" + "beta" -> "simpleDownloadBeta"
const functionName = toCamelCase(testCase) + toPascalCase(version);
const modulePath = `./${testCase}/versions/${version}.js`;

console.log(`🚀 Starting test case: ${testCase}, version: ${version}`);
console.log(`📦 Loading module: ${modulePath}`);
console.log(`🎯 Calling function: ${functionName}()`);
console.log('');

async function runTest() {
    try {
        const startTime = Date.now();

        // Dynamic import
        const module = await import(modulePath);

        if (typeof module[functionName] !== 'function') {
            throw new Error(
                `Function "${functionName}" not found in ${modulePath}.\n` +
                `Available exports: ${Object.keys(module).join(', ')}`
            );
        }

        // Execute the test
        await module[functionName]();

        const duration = Date.now() - startTime;
        console.log('');
        console.log(`✅ Test completed successfully in ${duration}ms`);
        
        // Give clinic bubbleprof time to properly flush async_hooks trace data
        // before process exit. Without this delay, bubbleprof's streams get
        // "premature close" errors because process.exit() interrupts the flush.
        await new Promise(resolve => setTimeout(resolve, 5000));
        process.exit(0);
    } catch (error) {
        console.error('');
        console.error(`❌ Test failed:`, error);
        process.exit(1);
    }
}

runTest().catch((error) => {
    console.error('');
    console.error(`❌ Unexpected error:`, error);
    process.exit(0);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('');
    console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(0);
});


process.on('uncaughtException', (error) => {
    console.error('');
    console.error('❌ Uncaught Exception:', error);
    process.exit(0);
});