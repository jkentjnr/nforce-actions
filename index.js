module.exports = function(nforce, name) {
  // throws if the plugin already exists
  var customActionsPlugin = nforce.plugin(name || 'customActions');

  /* flow call */

  customActionsPlugin.fn('runFlow', function(data, callback) {
    var opts = this._getOpts(data, callback, { singleProp: 'url' });
    opts.resource = '/actions/custom/flow/' + opts.flow.name;
    opts.method = 'POST';
    opts.body = JSON.stringify({ inputs: [ opts.flow.params || {} ] });
    return this._apiRequest(opts, opts.callback);
  });

  customActionsPlugin.fn('listFlows', function(data, callback) {
    var opts = this._getOpts(data, callback, { singleProp: 'url' });
    opts.resource = '/actions/custom/flow';
    opts.method = 'GET';
    return this._apiRequest(opts, opts.callback);
  });

};
