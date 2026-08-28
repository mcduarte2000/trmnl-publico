function run(input) {
  // Pass through RSS data from response
  // topic_label is handled in shared.liquid via plugin_settings
  if (input.rss) {
    return { rss: input.rss };
  }
  if (input.IDX_0 && input.IDX_0.rss) {
    return { rss: input.IDX_0.rss };
  }
  return input;
}