const routeTranslations = {
    'en': {
      'Welcome': 'Welcome',
      'Coffee Machine': 'Coffee Machine',
      'Restaurants': 'Restaurants',
      'Excursions': 'Excursions',
      'Trash & Recycling': 'Trash & Recycling',
      'Before You Leave': 'Before You Leave'
    },
    'de': {
      'Welcome': 'Willkommen',
      'Coffee Machine': 'Kaffeemaschine',
      'Restaurants': 'Restaurants',
      'Excursions': 'Ausflüge',
      'Trash & Recycling': 'Müll & Recycling',
      'Before You Leave': 'Vor der Abreise'
    },
    'es': {
      'Welcome': 'Bienvenido',
      'Coffee Machine': 'Máquina de Café',
      'Restaurants': 'Restaurantes',
      'Excursions': 'Excursiones',
      'Trash & Recycling': 'Basura y Reciclaje',
      'Before You Leave': 'Antes de Partir'
    },
    'it': {
      'Welcome': 'Benvenuto',
      'Coffee Machine': 'Macchina del Caffè',
      'Restaurants': 'Ristoranti',
      'Excursions': 'Escursioni',
      'Trash & Recycling': 'Rifiuti e Riciclaggio',
      'Before You Leave': 'Prima di Partire'
    }
  };
  
  const baseRoutes = [
    {
      'title': 'Welcome',
      'url': '/'
    },
    {
      'title': 'Transportation',
      'url': '/transportation'
    },
    {
      'title': 'Coffee Machine',
      'url': '/coffee-machine'
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
      'title': 'Before You Leave',
      'url': '/departure'
    }
  ];
  
  export function getRoutes(lang) {
    // Default to English if the requested language is not available
    const translations = routeTranslations[lang] || routeTranslations['en'];
    
    return baseRoutes.map(route => ({
      ...route,
      title: translations[route.title] || route.title, // Fallback to English if translation is missing
      url: `/${lang}${route.url}`
    }));
  }