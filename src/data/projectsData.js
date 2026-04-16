// ================================================
// Comprehensive Project Data — A-to-Z details
// ================================================

const projectsData = [
  {
    id: 'sports-vhnsnc',
    slug: 'sports-vhnsnc',
    title: 'Sports Vhnsnc',
    tagline: 'Indoor Stadium Membership Management System',
    icon: 'task_alt',
    color: '#3b82f6',          // primary blue
    colorName: 'primary',
    gradient: 'from-blue-500 to-cyan-400',
    heroGradient: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #1e3a5f 100%)',

    // ── Overview ──
    overview:
      'Sports Vhnsnc is a full-stack indoor stadium membership management system designed and built for V.H.N. Senthikumara Nadar College (VHNSNC). It digitizes the entire membership lifecycle — from student/staff registration and fee tracking to court slot booking and attendance monitoring. This is a real-time, production-grade application currently in active use by the college.',

    // ── Client / Context ──
    client: 'V.H.N. Senthikumara Nadar College (VHNSNC)',
    clientUrl: 'https://vhnsnc.edu.in/',
    projectType: 'Real-Time Production Application',
    duration: '3 months',
    teamSize: '1 (Solo Developer)',
    status: 'Live & In Use',
    year: '2025',

    // ── Key Features ──
    features: [
      {
        icon: 'person_add',
        title: 'Member Registration',
        description: 'Complete registration system for students and staff with ID verification, photo upload, and profile management.',
      },
      {
        icon: 'payments',
        title: 'Fee Management',
        description: 'Automated fee tracking with payment history, due date reminders, and receipt generation for membership renewals.',
      },
      {
        icon: 'event_available',
        title: 'Court Slot Booking',
        description: 'Real-time slot availability display with conflict prevention. Members can book badminton, table tennis, and gym slots.',
      },
      {
        icon: 'fact_check',
        title: 'Attendance Tracking',
        description: 'Digital check-in/check-out system with daily/weekly/monthly attendance reports and analytics.',
      },
      {
        icon: 'admin_panel_settings',
        title: 'Admin Dashboard',
        description: 'Comprehensive admin panel with member statistics, revenue reports, facility usage analytics, and member management.',
      },
      {
        icon: 'notifications_active',
        title: 'Push Notifications',
        description: 'Automated reminders for fee dues, booking confirmations, and announcements from the sports department.',
      },
    ],

    // ── Tech Stack Breakdown ──
    techStack: [
      {
        name: 'Flutter',
        role: 'Frontend Framework',
        description: 'Cross-platform UI framework used to build a single codebase that runs natively on both Android and iOS with smooth 60fps animations.',
        icon: 'smartphone',
      },
      {
        name: 'Dart',
        role: 'Programming Language',
        description: 'The primary language powering the Flutter application — object-oriented, optimized for UI, and compiled ahead-of-time for native performance.',
        icon: 'my_location',
      },
      {
        name: 'PHP',
        role: 'Backend API',
        description: 'RESTful API endpoints built with PHP handling authentication, CRUD operations, business logic, and server-side validation.',
        icon: 'settings_api',
      },
      {
        name: 'MySQLi',
        role: 'Database',
        description: 'Relational database managing members, bookings, payments, and attendance records with optimized queries and indexing.',
        icon: 'database',
      },
    ],

    // ── Architecture ──
    architecture: {
      description: 'The system follows a classic client-server architecture. The Flutter app communicates with PHP REST APIs over HTTP, which interface with a MySQL database hosted on the college server.',
      layers: [
        { name: 'Presentation', detail: 'Flutter UI with Material Design 3 components' },
        { name: 'Business Logic', detail: 'Dart services + PHP API controllers' },
        { name: 'Data Access', detail: 'MySQLi prepared statements with parameterized queries' },
        { name: 'Database', detail: 'MySQL with normalized tables and foreign key constraints' },
      ],
    },

    // ── Challenges & Solutions ──
    challenges: [
      {
        problem: 'Concurrent Booking Conflicts',
        solution: 'Implemented database-level locking and transaction management to prevent double-booking of court slots during peak hours.',
      },
      {
        problem: 'Offline Data Sync',
        solution: 'Built a local SQLite cache in Flutter so attendance and booking data syncs when the network becomes available.',
      },
      {
        problem: 'Fee Calculation Complexity',
        solution: 'Designed a flexible fee structure engine that handles different rates for students vs. staff, monthly vs. yearly plans, and special discount periods.',
      },
    ],

    // ── What I Learned ──
    learnings: [
      'Production-grade database design with normalization and indexing',
      'Building RESTful APIs with proper authentication and error handling',
      'Managing state in Flutter with Provider pattern',
      'Deploying and maintaining a live application used by real users',
      'Handling edge cases in booking systems (time zones, overlaps, cancellations)',
    ],

    // ── Links ──
    links: {
      live: null,
      github: null,
      demo: null,
    },
  },

  // ════════════════════════════════════════════════
  {
    id: 'kare-transport',
    slug: 'kare-transport',
    title: 'Kare Transport Tracking',
    tagline: 'Real-Time College Bus Tracking System',
    icon: 'partly_cloudy_day',
    color: '#14b8a6',          // secondary teal
    colorName: 'secondary',
    gradient: 'from-teal-500 to-emerald-400',
    heroGradient: 'linear-gradient(135deg, #14b8a6 0%, #10b981 50%, #064e3b 100%)',

    // ── Overview ──
    overview:
      'Kare Transport Tracking System is a real-time Android application that enables students to track college buses live on a map. Built with Jetpack Compose and backed by Firebase, the app provides accurate GPS positions of buses, estimated arrival times, and route visualization — helping students plan their commute efficiently from home to college and back.',

    // ── Client / Context ──
    client: 'Kalasalingam Academy of Research and Education',
    clientUrl: null,
    projectType: 'Android Application',
    duration: '2.5 months',
    teamSize: '2 Developers',
    status: 'Completed',
    year: '2025',

    // ── Key Features ──
    features: [
      {
        icon: 'my_location',
        title: 'Live Bus Tracking',
        description: 'Real-time GPS tracking showing exact bus positions on Google Maps with smooth marker animations and heading indicators.',
      },
      {
        icon: 'route',
        title: 'Route Visualization',
        description: 'Interactive polyline routes drawn on the map showing the complete bus path with stops highlighted and color-coded.',
      },
      {
        icon: 'schedule',
        title: 'ETA Predictions',
        description: 'Estimated arrival time calculations based on current bus position, speed, and route distance using the Google Directions API.',
      },
      {
        icon: 'notification_important',
        title: 'Proximity Alerts',
        description: 'Geofence-based notifications that alert students when their bus is approaching their pickup/drop-off point.',
      },
      {
        icon: 'directions_bus',
        title: 'Bus Directory',
        description: 'Complete list of all college buses with route numbers, driver info, capacity, and real-time occupancy status.',
      },
      {
        icon: 'history',
        title: 'Trip History',
        description: 'Historical trip data showing past routes, timings, and delays for reference and accountability.',
      },
    ],

    // ── Tech Stack Breakdown ──
    techStack: [
      {
        name: 'Jetpack Compose',
        role: 'UI Framework',
        description: 'Modern declarative UI toolkit for Android, enabling reactive and composable UI components with less boilerplate code.',
        icon: 'palette',
      },
      {
        name: 'Firebase',
        role: 'Backend Services',
        description: 'Realtime Database for live GPS data streaming, Cloud Functions for server logic, and Firebase Auth for user authentication.',
        icon: 'local_fire_department',
      },
      {
        name: 'IoT (GPS Module)',
        role: 'Hardware Integration',
        description: 'NEO-6M GPS modules installed in buses transmit coordinates to Firebase via ESP32 microcontrollers over cellular networks.',
        icon: 'sensors',
      },
      {
        name: 'Google Maps SDK',
        role: 'Map Rendering',
        description: 'Android Maps SDK for rendering interactive maps with custom markers, polylines, and geofence regions.',
        icon: 'map',
      },
    ],

    // ── Architecture ──
    architecture: {
      description: 'An IoT-powered architecture where GPS modules in buses push location data to Firebase Realtime Database. The Android app subscribes to real-time updates and renders them on Google Maps.',
      layers: [
        { name: 'IoT Layer', detail: 'ESP32 + NEO-6M GPS module → MQTT → Firebase' },
        { name: 'Cloud Layer', detail: 'Firebase Realtime DB + Cloud Functions' },
        { name: 'Application Layer', detail: 'Jetpack Compose + Google Maps SDK' },
        { name: 'Notification Layer', detail: 'Firebase Cloud Messaging (FCM)' },
      ],
    },

    // ── Challenges & Solutions ──
    challenges: [
      {
        problem: 'GPS Accuracy in Dense Areas',
        solution: 'Implemented Kalman filtering to smooth GPS readings and reduce jitter caused by signal multipath in urban environments.',
      },
      {
        problem: 'Battery Drain on IoT Devices',
        solution: 'Optimized GPS polling frequency — high frequency during movement, low frequency when stationary — reducing power consumption by 40%.',
      },
      {
        problem: 'Real-time Data Latency',
        solution: 'Used Firebase Realtime Database listeners with offline persistence, achieving sub-second location updates on the client.',
      },
    ],

    // ── What I Learned ──
    learnings: [
      'IoT hardware integration with mobile applications',
      'Real-time data streaming with Firebase Realtime Database',
      'Google Maps SDK advanced features (custom overlays, geofencing)',
      'Jetpack Compose state management with flows and coroutines',
      'Battery optimization strategies for always-on tracking apps',
    ],

    // ── Links ──
    links: {
      live: null,
      github: null,
      demo: null,
    },
  },

  // ════════════════════════════════════════════════
  {
    id: 'soil-monitoring',
    slug: 'soil-monitoring',
    title: 'Soil Monitoring System',
    tagline: 'IoT-Powered Agricultural Soil Analysis',
    icon: 'forum',
    color: '#a855f7',          // accent purple
    colorName: 'accent',
    gradient: 'from-purple-500 to-pink-400',
    heroGradient: 'linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #581c87 100%)',

    // ── Overview ──
    overview:
      'The Soil Monitoring System is an IoT-based Android application that provides real-time monitoring of soil conditions for agricultural use. It collects data from field sensors (moisture, temperature, pH, nutrient levels) and presents actionable insights on a Kotlin-based Android dashboard — empowering farmers to make data-driven irrigation and fertilization decisions.',

    // ── Client / Context ──
    client: 'Academic Project / Agricultural IoT',
    clientUrl: null,
    projectType: 'IoT + Android Application',
    duration: '2 months',
    teamSize: '3 Members',
    status: 'Completed',
    year: '2024',

    // ── Key Features ──
    features: [
      {
        icon: 'water_drop',
        title: 'Moisture Monitoring',
        description: 'Real-time soil moisture levels with threshold-based alerts. Visual gauge displays current saturation percentage.',
      },
      {
        icon: 'thermostat',
        title: 'Temperature Tracking',
        description: 'Continuous soil and ambient temperature monitoring with historical graphs showing daily and weekly trends.',
      },
      {
        icon: 'science',
        title: 'pH Level Analysis',
        description: 'Soil acidity/alkalinity measurement with crop-specific recommendations for optimal pH ranges.',
      },
      {
        icon: 'bar_chart',
        title: 'Analytics Dashboard',
        description: 'Interactive charts and graphs showing soil health trends over time with exportable reports in PDF format.',
      },
      {
        icon: 'alarm',
        title: 'Smart Alerts',
        description: 'Configurable threshold alerts for critical conditions — dry soil, extreme temperatures, or pH imbalance — sent via push notifications.',
      },
      {
        icon: 'cloud_sync',
        title: 'Cloud Data Sync',
        description: 'All sensor data backed up to Firebase Cloud, accessible from any device with historical data retention for analysis.',
      },
    ],

    // ── Tech Stack Breakdown ──
    techStack: [
      {
        name: 'Kotlin',
        role: 'Android Development',
        description: 'Modern, concise, and safe programming language for Android. Used with Android SDK and coroutines for async operations.',
        icon: 'code_blocks',
      },
      {
        name: 'Firebase',
        role: 'Cloud Backend',
        description: 'Realtime Database for live sensor data storage, Cloud Functions for data processing, and Authentication for user management.',
        icon: 'local_fire_department',
      },
      {
        name: 'IoT Sensors',
        role: 'Data Collection',
        description: 'Capacitive soil moisture sensor, DHT22 temperature/humidity sensor, and pH meter connected to Arduino/ESP32 boards.',
        icon: 'sensors',
      },
      {
        name: 'MPAndroidChart',
        role: 'Data Visualization',
        description: 'Charting library for rendering real-time line graphs, bar charts, and gauge visualizations of sensor data.',
        icon: 'insert_chart',
      },
    ],

    // ── Architecture ──
    architecture: {
      description: 'Field-deployed sensors connect to an ESP32 microcontroller that pushes readings to Firebase. The Android app subscribes to data changes and renders live dashboards with charts and alerts.',
      layers: [
        { name: 'Sensor Layer', detail: 'Moisture + Temp + pH sensors → Arduino/ESP32' },
        { name: 'Communication', detail: 'ESP32 Wi-Fi → Firebase Realtime Database' },
        { name: 'Cloud Processing', detail: 'Firebase Cloud Functions for aggregation & alerts' },
        { name: 'Presentation', detail: 'Kotlin Android app with MPAndroidChart' },
      ],
    },

    // ── Challenges & Solutions ──
    challenges: [
      {
        problem: 'Sensor Calibration Drift',
        solution: 'Implemented periodic auto-calibration routines and a moving-average filter to smooth noisy sensor readings over time.',
      },
      {
        problem: 'Power in Remote Fields',
        solution: 'Designed a solar-powered sensor node with deep-sleep modes on ESP32, achieving weeks of battery life on a single charge.',
      },
      {
        problem: 'Data Visualization Performance',
        solution: 'Optimized chart rendering by downsampling historical data for zoomed-out views and loading full resolution only when zooming in.',
      },
    ],

    // ── What I Learned ──
    learnings: [
      'Sensor calibration and data filtering techniques',
      'ESP32 programming and IoT communication protocols',
      'Real-time data visualization on Android',
      'Firebase security rules and database structuring',
      'Designing for low-connectivity and power-constrained environments',
    ],

    // ── Links ──
    links: {
      live: null,
      github: null,
      demo: null,
    },
  },
];

export default projectsData;
