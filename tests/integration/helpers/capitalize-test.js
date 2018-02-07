import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { find } from 'ember-native-dom-helpers';
import hbs from 'htmlbars-inline-precompile';

module('helper:capitalize', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    this.set('inputValue', '1234');

    await render(hbs`{{capitalize inputValue}}`);

    assert.equal(find('*').textContent.trim(), '1234');
  });
});

