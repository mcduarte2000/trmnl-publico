function run(input) {
  const topicUrl = input.trmnl?.plugin_settings?.custom_fields_values?.topic;
  
  const topicMap = {
    "http://feeds.feedburner.com/PublicoRSS": "Geral",
    "http://feeds.feedburner.com/PublicoCiencias": "Ciência",
    "http://feeds.feedburner.com/Publicocultura": "Cultura",
    "http://feeds.feedburner.com/PublicoEcosfera": "Ecosfera",
    "http://feeds.feedburner.com/PublicoEconomia": "Economia",
    "http://feeds.feedburner.com/PublicoLocal": "Local",
    "http://feeds.feedburner.com/Publico-Media": "Media",
    "http://feeds.feedburner.com/PublicoMundo": "Mundo",
    "http://feeds.feedburner.com/PublicoP3": "P3",
    "http://feeds.feedburner.com/PublicoSociedade": "Sociedade",
    "http://feeds.feedburner.com/PublicoTecnologia": "Tecnologia"
  };
  
  return {
    rss: input.rss,
    topic_label: topicMap[topicUrl] || "Geral"
  };
}