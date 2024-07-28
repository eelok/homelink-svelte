const routeTranslations = {
    'en': {
      'Welcome': 'Welcome',
      'Coffee Machine': 'Coffee Machine',
      'Restaurants': 'Restaurants',
      'Excursions': 'Excursions',
      'Trash & Recycling': 'Trash & Recycling',
      'Before You Leave': 'Before You Leave',
      'House Rules': 'House Rules',
      'Troubleshooting': 'Troubleshooting',
      'Emergency': 'Emergency',
      'Transportation': 'Transportation',
      'Getting To': 'Getting To'
    },
    'de': {
      'Welcome': 'Willkommen',
      'Coffee Machine': 'Kaffeemaschine',
      'Restaurants': 'Restaurants',
      'Excursions': 'Ausflüge',
      'Trash & Recycling': 'Müll & Recycling',
      'Before You Leave': 'Vor der Abreise',
      'House Rules': 'Hausregeln',
      'Troubleshooting': 'Problembehebung',
      'Emergency': 'Notfall',
      'Transportation': 'Verkehrsmittel',
      'Getting To': 'Anreise',
    }
  };
  
  const baseRoutes = [
    {
      'title': 'Welcome',
      'url': '/'
    },
    {
      'title': 'Getting To',
      'url': '/getting-to'
    },

    {
      'title': 'Transportation',
      'url': '/transportation'
    },   
    {
      'title': 'Restaurants',
      'url': '/restaurants'
    },
    {
      'title': 'Excursions',
      'url': '/excursions'
    },
    {
      'title': 'Trash & Recycling',
      'url': '/garbage'
    },
    {
      'title': 'House Rules',
      'url': '/house-rules'
    },
    {
      'title': 'Coffee Machine',
      'url': '/coffee-machine'
    },
    {
      'title': 'Troubleshooting',
      'url': '/troubleshooting'
    },
    {
      'title': 'Emergency',
      'url': '/emergency'
    },
    {
      'title': 'Before You Leave',
      'url': '/departure'
    },
  ];
  
  export function getRoutes(lang) {
    // Default to English if the requested language is not available
    const language = lang || 'en';
    const translations = routeTranslations[language];
    
    return baseRoutes.map(route => ({      
      title: translations[route.title] || route.title, // Fallback to English if translation is missing
      url: `/${language}${route.url}`
    }));
  }