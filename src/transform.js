function run(input) {
  if (!input.rss || !input.rss.channel || !input.rss.channel.item) {
    return input;
  }

  var items = input.rss.channel.item;
  if (!Array.isArray(items)) {
    items = [items];
  }

  var now = new Date().getTime();

  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var pubTime = new Date(item.pubDate).getTime();
    var diffMinutes = Math.floor((now - pubTime) / 60000);
    var diffHours = Math.floor(diffMinutes / 60);
    var diffDays = Math.floor(diffHours / 24);

    if (diffMinutes < 1) {
      item.time_ago = "Just now";
    } else if (diffMinutes < 60) {
      item.time_ago = diffMinutes + "m ago";
    } else if (diffHours < 24) {
      item.time_ago = diffHours + "h ago";
    } else {
      item.time_ago = diffDays + "d ago";
    }
  }

  return input;
}