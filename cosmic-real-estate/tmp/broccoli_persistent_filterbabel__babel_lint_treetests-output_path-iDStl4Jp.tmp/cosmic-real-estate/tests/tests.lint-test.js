define('cosmic-real-estate/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/real-estate-listing-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/real-estate-listing-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/format-price-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/format-price-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/format-upvotes-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/format-upvotes-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/listing-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/listing-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/listings-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/listings-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/listings/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/listings/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/listings/listing-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/listings/listing-test.js should pass ESLint\n\n');
  });
});