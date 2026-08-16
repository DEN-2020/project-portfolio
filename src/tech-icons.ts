// Precision Vector Logos for Every Distinct Tech Stack Tag

export const getTechIcon = (tech: string): string => {
  const t = tech.toLowerCase().trim();

  // 1. Luau (Official Luau / Lua blue circle with orbiting moon)
  if (t === 'luau' || t === 'lua') {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14">
      <circle cx="12" cy="12" r="9" fill="#000080"/>
      <circle cx="15.5" cy="8.5" r="3.2" fill="#00a2ff"/>
      <circle cx="19.5" cy="4.5" r="1.5" fill="#fff"/>
      <text x="7" y="16" fill="#fff" font-size="7" font-weight="900" font-family="sans-serif">LU</text>
    </svg>`;
  }

  // 2. Roblox Studio (Official Blue Studio Tilt Icon)
  if (t.includes('roblox studio')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14" fill="#00a2ff">
      <rect x="3.5" y="3.5" width="17" height="17" rx="3.5" transform="rotate(-15 12 12)" fill="#00a2ff"/>
      <rect x="9.5" y="9.5" width="5" height="5" rx="1" transform="rotate(-15 12 12)" fill="#0d1b2a"/>
    </svg>`;
  }

  // 3. Game Mechanics / Gamedev
  if (t.includes('game')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14" fill="#f43f5e">
      <path d="M6 11H4a1 1 0 01-1-1V8a1 1 0 011-1h2m12 4h2a1 1 0 001-1V8a1 1 0 00-1-1h-2M6 12v6a2 2 0 002 2h8a2 2 0 002-2v-6M9 15h6M8 9h1m6 0h1" stroke="#f43f5e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <circle cx="16.5" cy="11.5" r="1" fill="#f43f5e"/>
      <circle cx="18.5" cy="13.5" r="1" fill="#f43f5e"/>
    </svg>`;
  }

  // 4. React & React 19 & React UI (Cyan Atom)
  if (t.includes('react')) {
    return `<svg class="tech-icon" viewBox="-11.5 -10.23174 23 20.46348" width="14" height="14" fill="#00d8ff">
      <circle cx="0" cy="0" r="2.05" fill="#00d8ff"/>
      <g stroke="#00d8ff" stroke-width="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>`;
  }

  // 5. TypeScript (Official Blue Badge)
  if (t.includes('typescript')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14">
      <rect width="24" height="24" rx="4" fill="#3178c6"/>
      <path d="M4 8h8v2.5H9.5V19H6.5V10.5H4V8zm9 3.5c1 0 2.2-.4 3.1-1l.9 2c-.9.7-2.3 1.2-3.8 1.2-3 0-4.5-1.5-4.5-4 0-2.6 1.8-4.2 4.4-4.2 1.5 0 2.8.5 3.7 1.1l-.9 2c-.8-.5-1.7-.8-2.6-.8-1.4 0-2.2.8-2.2 2 0 1.2.7 1.7 1.9 1.7z" fill="#fff" transform="matrix(0.9 0 0 0.9 1 1)"/>
    </svg>`;
  }

  // 6. JavaScript (Official Yellow Square)
  if (t.includes('javascript')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14">
      <rect width="24" height="24" rx="4" fill="#f7df1e"/>
      <path d="M6 18.5l2.2-1.3c.4.8.9 1.4 1.8 1.4.9 0 1.5-.4 1.5-1.4V11H14v6.2c0 2.4-1.4 3.5-3.6 3.5-2 0-3.3-1-3.9-2.2zm9.1-1.3l2.2-1.3c.6 1 1.4 1.7 2.6 1.7 1.1 0 1.8-.5 1.8-1.3 0-.9-.7-1.3-2-1.8l-.7-.3c-2-.8-3.3-1.9-3.3-4.1 0-2 1.6-3.6 4-3.6 1.7 0 3 .6 3.9 2.2l-2.1 1.3c-.4-.8-1-1.2-1.8-1.2-.9 0-1.5.5-1.5 1.1 0 .8.6 1.1 1.8 1.6l.7.3c2.4 1 3.5 2 3.5 4.3 0 2.5-1.9 3.8-4.4 3.8-2.4 0-4-1.1-4.7-2.7z" fill="#000" transform="matrix(0.8 0 0 0.8 2 2)"/>
    </svg>`;
  }

  // 7. Python (Official Blue & Gold Snakes)
  if (t === 'python' || t.startsWith('python')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14">
      <path d="M11.9 2c-5 0-4.7 2.2-4.7 2.2l.1 2.3h4.8v.7H5.2S2 6.8 2 11.9c0 5.1 2.8 4.9 2.8 4.9h1.7v-2.4s-.1-2.8 2.8-2.8h4.7s2.7.1 2.7-2.6V4.7s.4-2.7-4.8-2.7zm-2.6 1.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" fill="#3776ab"/>
      <path d="M12.1 22c5 0 4.7-2.2 4.7-2.2l-.1-2.3h-4.8v-.7h6.9s3.2.4 3.2-4.7c0-5.1-2.8-4.9-2.8-4.9h-1.7v2.4s.1 2.8-2.8 2.8H10s-2.7-.1-2.7 2.6v4.3s-.4 2.7 4.8 2.7zm2.6-1.5c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" fill="#ffd438"/>
    </svg>`;
  }

  // 8. Node.js (Official Green Hexagon)
  if (t.includes('node')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14" fill="#5fa04e">
      <path d="M12 2l10 5.8v11.6L12 25.2 2 19.4V7.8L12 2zm0 2.3L4 8.9v9.2l8 4.6 8-4.6V8.9l-8-4.6z" transform="matrix(0.85 0 0 0.85 1.8 1)"/>
    </svg>`;
  }

  // 9. C# (Official Hex Purple Badge)
  if (t === 'c#') {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14">
      <rect width="24" height="24" rx="4" fill="#9b4993"/>
      <text x="50%" y="68%" text-anchor="middle" fill="#fff" font-size="11" font-family="system-ui, sans-serif" font-weight="900">C#</text>
    </svg>`;
  }

  // 10. .NET (Official Purple .NET Infinity Loop)
  if (t === '.net') {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14">
      <rect width="24" height="24" rx="4" fill="#512bd4"/>
      <text x="50%" y="68%" text-anchor="middle" fill="#fff" font-size="9.5" font-family="system-ui, sans-serif" font-weight="900">.NET</text>
    </svg>`;
  }

  // 11. WPF / WinUI (Windows App Window)
  if (t.includes('wpf') || t.includes('winui')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14" fill="#6366f1">
      <rect x="2" y="3" width="20" height="18" rx="3" fill="none" stroke="#6366f1" stroke-width="2"/>
      <line x1="2" y1="8" x2="22" y2="8" stroke="#6366f1" stroke-width="1.5"/>
      <circle cx="5" cy="5.5" r="1" fill="#6366f1"/>
      <circle cx="8" cy="5.5" r="1" fill="#6366f1"/>
    </svg>`;
  }

  // 12. Windows Tray (Windows 11 Grid Blue)
  if (t.includes('windows tray') || t.includes('windows')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14" fill="#0078d4">
      <rect x="3" y="3" width="8.5" height="8.5" rx="1"/>
      <rect x="12.5" y="3" width="8.5" height="8.5" rx="1"/>
      <rect x="3" y="12.5" width="8.5" height="8.5" rx="1"/>
      <rect x="12.5" y="12.5" width="8.5" height="8.5" rx="1"/>
    </svg>`;
  }

  // 13. Tailwind CSS & Tailwind v4 (Cyan Wave)
  if (t.includes('tailwind')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14" fill="#38bdf8">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.975 12 6.001 12z"/>
    </svg>`;
  }

  // 14. Vite (Purple & Yellow Lightning)
  if (t.includes('vite')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14">
      <path d="M21.5 3.5L12.7 20.8a1 1 0 01-1.8 0L2.5 3.5a1 1 0 011.3-1.4l8.2 4 8.2-4a1 1 0 011.3 1.4z" fill="#41d1ff"/>
      <path d="M15.5 2l-6.8 3.3L12 15l3.5-13z" fill="#bd34fe"/>
      <path d="M12.5 7.5l-2.7 5.5 3.2-.8-1.8 5.3 4.8-6.5-3.3.5 1.8-4z" fill="#ffea00"/>
    </svg>`;
  }

  // 15. Astro (Orange Rocket/Flame)
  if (t.includes('astro')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14" fill="#ff5d01">
      <path d="M8.5 18.5c-.8.8-1.5 2.1-1.5 3.5 1.4 0 2.7-.7 3.5-1.5l1.5-1.5-2-2-1.5 1.5zm7-7l-6 6 2 2 6-6c1.7-1.7 2.5-4 2.5-6.5 0-1.5-.5-3-1.5-4-1-1-2.5-1.5-4-1.5-2.5 0-4.8.8-6.5 2.5l-6 6 2 2 6-6c1.3-1.3 3.1-2 5-2 1.1 0 2.2.4 3 1.2.8.8 1.2 1.9 1.2 3 0 1.9-.7 3.7-2 5z"/>
    </svg>`;
  }

  // 16. Android (Official Bugdroid Green)
  if (t.includes('android')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14" fill="#3ddc84">
      <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v6c0 .83.67 1.5 1.5 1.5S5 16.33 5 15.5v-6C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5zm-4.97-4.84l1.3-1.3a.49.49 0 00-.7-.7l-1.48 1.48C13.85 2.24 12.95 2 12 2c-.96 0-1.86.24-2.66.64L7.86.66a.49.49 0 00-.7.7l1.3 1.3C6.83 3.73 5.73 5.46 5.56 7.5h12.87c-.16-2.04-1.26-3.77-2.9-4.84zM9 5.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75zm6 0c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75z"/>
    </svg>`;
  }

  // 17. Docker (Official Blue Whale)
  if (t.includes('docker')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14" fill="#2496ed">
      <path d="M13.8 7.3h2.3v2.2h-2.3zm-3 0h2.3v2.2h-2.3zm-3 0h2.3v2.2H7.8zm6 3h2.3v2.2h-2.3zm-3 0h2.3v2.2h-2.3zm-3 0h2.3v2.2H7.8zm-3 0h2.3v2.2H4.8zm17.6 2.3c-.6-.4-1.5-.5-2.2-.2-.2-.5-.5-.9-.9-1.2l-.7-.5-.4.7c-.4.7-.4 1.5-.2 2.2-.8.5-2 .5-2.8.5H2.4c-.4 1.7.2 3.8 1.6 5.1 1.7 1.6 4.3 2.1 6.6 2.1 5.3 0 10.2-2.5 12.2-7.8.8 0 1.5-.3 1.8-.7l.3-.4-.9-.8z"/>
    </svg>`;
  }

  // 18. PyTorch (Official Flame)
  if (t.includes('pytorch')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14" fill="#ee4c2c">
      <path d="M13.5 2.5L12 4l1.5 1.5 2.2-2.2c-.6-.4-1.4-.7-2.2-.8zm-4.8 3c-3 3-3.4 7.6-1.1 11.1l-1.8 1.8c-3.3-4.4-2.8-10.6 1.4-14.4l1.5 1.5zm7.6 1.5l1.5 1.5c2.4 2.8 2.6 6.9.7 10l1.8 1.8c2.9-4.2 2.5-9.9-1.3-13.8l-2.7.5zM12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"/>
    </svg>`;
  }

  // 19. CUDA (Nvidia Green Logo)
  if (t.includes('cuda')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14" fill="#76b900">
      <rect width="24" height="24" rx="4" fill="#76b900"/>
      <path d="M12 5c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 11.5c-1 1-2.2 1.5-3.5 1.5s-2.5-.5-3.5-1.5l1.4-1.4c.6.6 1.3.9 2.1.9s1.5-.3 2.1-.9l1.4 1.4z" fill="#000"/>
    </svg>`;
  }

  // 20. Firebase Firestore (Amber Flame)
  if (t.includes('firebase')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14">
      <path d="M4.5 18.5L6.8 4.2a.6.6 0 011.1-.2l3.4 6.3-6.8 8.2z" fill="#ffa000"/>
      <path d="M4.5 18.5l9.7-14.3a.6.6 0 011.1.2l2.2 4.1-13 10z" fill="#f57c00"/>
      <path d="M12 21.5l7.5-4.2-2-11.5a.6.6 0 00-1-.3L4.5 18.5 12 21.5z" fill="#ffca28"/>
    </svg>`;
  }

  // 21. Cloud Functions (GCP Yellow Function)
  if (t.includes('cloud functions')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14" fill="#ea4335">
      <rect width="24" height="24" rx="4" fill="#ea4335"/>
      <text x="50%" y="68%" text-anchor="middle" fill="#fff" font-size="10" font-family="monospace" font-weight="900">f(x)</text>
    </svg>`;
  }

  // 22. HTML5 (Orange Shield)
  if (t.includes('html')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14">
      <path d="M3 2l1.8 20.2L12 24l7.2-1.8L21 2H3zm14.6 6.2h-7.8l.2 2.4h7.4l-.6 6.7-4.8 1.3-4.8-1.3-.3-3.6h2.4l.2 1.8 2.5.7 2.5-.7.3-3.1H7.2L6.5 6.2h11.3l-.2 2z" fill="#e34f26"/>
    </svg>`;
  }

  // 23. CSS3 (Blue Shield)
  if (t === 'css3') {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14">
      <path d="M3 2l1.8 20.2L12 24l7.2-1.8L21 2H3zm14.6 6.2h-7.8l.2 2.4h7.4l-.6 6.7-4.8 1.3-4.8-1.3-.3-3.6h2.4l.2 1.8 2.5.7 2.5-.7.3-3.1H7.2L6.5 6.2h11.3l-.2 2z" fill="#1572b6"/>
    </svg>`;
  }

  // 24. CSS Modules
  if (t.includes('css modules')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14" fill="#0284c7">
      <rect x="3" y="3" width="7" height="7" rx="1" fill="#0284c7"/>
      <rect x="14" y="3" width="7" height="7" rx="1" fill="#38bdf8"/>
      <rect x="3" y="14" width="7" height="7" rx="1" fill="#38bdf8"/>
      <rect x="14" y="14" width="7" height="7" rx="1" fill="#0284c7"/>
    </svg>`;
  }

  // 25. Modern CSS / Responsive CSS
  if (t.includes('modern css') || t.includes('responsive css')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14" fill="#2563eb">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.2l7 3.9v7.8l-7 3.9-7-3.9V8.1l7-3.9z"/>
    </svg>`;
  }

  // 26. Gemini AI API (Four-pointed Star)
  if (t.includes('gemini')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14" fill="#8ab4f8">
      <path d="M12 2L14.4 8.6L21 11L14.4 13.4L12 20L9.6 13.4L3 11L9.6 8.6L12 2Z"/>
    </svg>`;
  }

  // 27. AI Voice Synthesis (Audio Waveform + Voice)
  if (t.includes('voice')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14" fill="#a855f7">
      <path d="M12 2a3 3 0 00-3 3v6a3 3 0 006 0V5a3 3 0 00-3-3zm5 9a5 5 0 01-10 0H5a7 7 0 006 6.92V21h2v-3.08A7 7 0 0019 11h-2z"/>
    </svg>`;
  }

  // 28. AI Tooling
  if (t.includes('ai tooling')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14" fill="#6366f1">
      <path d="M12 2a2 2 0 012 2v1h4a2 2 0 012 2v4h-1a2 2 0 00-2 2 2 2 0 002 2h1v4a2 2 0 01-2 2h-4v-1a2 2 0 00-2-2 2 2 0 00-2 2v1H6a2 2 0 01-2-2v-4h1a2 2 0 002-2 2 2 0 00-2-2H4V7a2 2 0 012-2h4V4a2 2 0 012-2z"/>
    </svg>`;
  }

  // 29. 3D Neural Synthesis (Wireframe Cube + AI Spark)
  if (t.includes('neural') || t.includes('synthesis')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14" fill="#ec4899">
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" fill="none" stroke="#ec4899" stroke-width="2"/>
      <circle cx="12" cy="12" r="2.5" fill="#ec4899"/>
    </svg>`;
  }

  // 30. Blender 3D & Blender Pipeline (Official Blender Orange & Blue)
  if (t.includes('blender')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14" fill="#ea7600">
      <path d="M12 2a5 5 0 00-5 5c0 .6.1 1.2.3 1.7L3.6 10.4a1 1 0 00.6 1.8h8.6a4.5 4.5 0 100-9zm0 6a2 2 0 110-4 2 2 0 010 4zm4.5 8a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
    </svg>`;
  }

  // 31. Playwright & Playwright CI (Official Mask)
  if (t.includes('playwright')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14" fill="#45ba4b">
      <path d="M12 3a9 9 0 00-9 9c0 3.5 2 6.5 5 8v-3a6 6 0 118 0v3c3-1.5 5-4.5 5-8a9 9 0 00-9-9zm-2 9a2 2 0 110-4 2 2 0 010 4zm4 0a2 2 0 110-4 2 2 0 010 4z"/>
    </svg>`;
  }

  // 32. Pandas (Official White/Cyan/Navy Bar-Grid)
  if (t === 'pandas') {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14">
      <rect width="24" height="24" rx="4" fill="#130754"/>
      <rect x="5" y="11" width="3.5" height="8" fill="#e70488" rx="1"/>
      <rect x="10.2" y="5" width="3.5" height="14" fill="#ffca00" rx="1"/>
      <rect x="15.5" y="8" width="3.5" height="11" fill="#00d1b2" rx="1"/>
    </svg>`;
  }

  // 33. NumPy (Official Blue 3D Matrix)
  if (t === 'numpy') {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14">
      <rect width="24" height="24" rx="4" fill="#013243"/>
      <path d="M5 8l7-4 7 4v8l-7 4-7-4V8z" fill="none" stroke="#4dabf7" stroke-width="2"/>
      <line x1="12" y1="4" x2="12" y2="20" stroke="#4dabf7" stroke-width="1.5"/>
    </svg>`;
  }

  // 34. Quantitative Modeling & Backtesting Engine
  if (t.includes('quantitative') || t.includes('backtesting')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14" fill="#10b981">
      <path d="M3 3v18h18M7 14l4-4 4 4 5-6" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round"/>
    </svg>`;
  }

  // 35. Trading Math (Sigma Equation)
  if (t.includes('trading math') || t.includes('math')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14">
      <rect width="24" height="24" rx="4" fill="#0f172a"/>
      <path d="M6 6h12l-7 6 7 6H6" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  }

  // 36. WireGuard (Dragon Red Shield)
  if (t.includes('wireguard')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14" fill="#88171a">
      <rect width="24" height="24" rx="4" fill="#88171a"/>
      <path d="M12 4L5 7v5c0 4.5 3 8.7 7 9.8 4-1.1 7-5.3 7-9.8V7l-7-3zm0 4a3 3 0 110 6 3 3 0 010-6z" fill="#fff"/>
    </svg>`;
  }

  // 37. Tailscale (Official 9-dot grid)
  if (t.includes('tailscale')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14">
      <rect width="24" height="24" rx="4" fill="#2d3748"/>
      <circle cx="7" cy="7" r="2" fill="#fff"/>
      <circle cx="12" cy="7" r="2" fill="#fff"/>
      <circle cx="17" cy="7" r="2" fill="#fff"/>
      <circle cx="7" cy="12" r="2" fill="#fff"/>
      <circle cx="12" cy="12" r="2" fill="#fff"/>
      <circle cx="7" cy="17" r="2" fill="#fff"/>
    </svg>`;
  }

  // 38. Mesh VPN & Network Routing
  if (t.includes('mesh vpn') || t.includes('network')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14" fill="#a855f7">
      <circle cx="12" cy="5" r="3" fill="#a855f7"/>
      <circle cx="5" cy="18" r="3" fill="#a855f7"/>
      <circle cx="19" cy="18" r="3" fill="#a855f7"/>
      <line x1="12" y1="5" x2="5" y2="18" stroke="#a855f7" stroke-width="1.5"/>
      <line x1="12" y1="5" x2="19" y2="18" stroke="#a855f7" stroke-width="1.5"/>
      <line x1="5" y1="18" x2="19" y2="18" stroke="#a855f7" stroke-width="1.5"/>
    </svg>`;
  }

  // 39. Proxy Middleware & Streaming Protocols
  if (t.includes('proxy') || t.includes('streaming')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14" fill="#06b6d4">
      <circle cx="12" cy="12" r="2" fill="#06b6d4"/>
      <path d="M16.24 7.76a6 6 0 010 8.49M7.76 7.76a6 6 0 000 8.49M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" stroke="#06b6d4" stroke-width="1.5" stroke-linecap="round" fill="none"/>
    </svg>`;
  }

  // 40. WASAPI Audio & DSP Algorithms & AudioStabilizator
  if (t.includes('wasapi') || t.includes('dsp') || t.includes('stabilizator') || t.includes('audio')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14" fill="#10b981">
      <rect x="3" y="10" width="2" height="4" rx="1" fill="#10b981"/>
      <rect x="7" y="6" width="2" height="12" rx="1" fill="#10b981"/>
      <rect x="11" y="3" width="2" height="18" rx="1" fill="#10b981"/>
      <rect x="15" y="8" width="2" height="8" rx="1" fill="#10b981"/>
      <rect x="19" y="11" width="2" height="2" rx="1" fill="#10b981"/>
    </svg>`;
  }

  // 41. FFmpeg GPU (Official FFmpeg Green Zigzag)
  if (t.includes('ffmpeg')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14" fill="#007800">
      <rect width="24" height="24" rx="4" fill="#005500"/>
      <path d="M4 6h8l-4 6h8l-8 6h12" fill="none" stroke="#00ff00" stroke-width="2" stroke-linecap="round"/>
    </svg>`;
  }

  // 42. Media APIs
  if (t.includes('media')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14" fill="#f59e0b">
      <rect x="2" y="4" width="20" height="16" rx="3" fill="none" stroke="#f59e0b" stroke-width="2"/>
      <polygon points="10,8 16,12 10,16" fill="#f59e0b"/>
    </svg>`;
  }

  // 43. PWA (Mobile Screen App)
  if (t.includes('pwa')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14" fill="#8b5cf6">
      <rect x="5" y="2" width="14" height="20" rx="3" fill="none" stroke="#8b5cf6" stroke-width="2"/>
      <circle cx="12" cy="18" r="1.2" fill="#8b5cf6"/>
      <path d="M9 6h6" stroke="#8b5cf6" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`;
  }

  // 44. GitHub Pages (Official GitHub Octocat)
  if (t.includes('github')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14" fill="#f0f6fc">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>`;
  }

  // 45. SEO & Social Cards & SEO Optimization
  if (t.includes('seo')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14" fill="#06b6d4">
      <circle cx="10.5" cy="10.5" r="6.5" stroke="#06b6d4" stroke-width="2" fill="none"/>
      <path d="M15.5 15.5l5 5M8 12l2-3 2 2 3-4" stroke="#06b6d4" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </svg>`;
  }

  // 46. SSR (Server-Side Fast Paint)
  if (t.includes('ssr')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14" fill="#14b8a6">
      <rect x="2" y="3" width="20" height="7" rx="2" fill="none" stroke="#14b8a6" stroke-width="1.8"/>
      <rect x="2" y="14" width="20" height="7" rx="2" fill="none" stroke="#14b8a6" stroke-width="1.8"/>
      <circle cx="6" cy="6.5" r="1" fill="#14b8a6"/>
      <circle cx="6" cy="17.5" r="1" fill="#14b8a6"/>
      <path d="M14 6.5h4M14 17.5h4" stroke="#14b8a6" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`;
  }

  // 47. PowerShell (Terminal Prompt)
  if (t.includes('powershell')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14" fill="#0284c7">
      <rect width="24" height="24" rx="4" fill="#002456"/>
      <path d="M5 6l6 6-6 6M12 18h7" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </svg>`;
  }

  // 48. i18n / Localization
  if (t.includes('i18n') || t.includes('ar/en/ru') || t.includes('lang')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14" fill="#f59e0b">
      <circle cx="12" cy="12" r="9" stroke="#f59e0b" stroke-width="1.8" fill="none"/>
      <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" stroke="#f59e0b" stroke-width="1.5" fill="none"/>
    </svg>`;
  }

  // 49. Motion (Framer / Motion Geometric Logo)
  if (t.includes('motion')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14" fill="#f43f5e">
      <path d="M4 2h16l-8 10zM4 12h8l-8 10zM12 12l8 10H4z" fill="#f43f5e"/>
    </svg>`;
  }

  // 50. VFX & Particle Systems
  if (t.includes('vfx') || t.includes('particle')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14" fill="#d946ef">
      <circle cx="12" cy="12" r="3" fill="#d946ef"/>
      <circle cx="12" cy="4" r="1.5" fill="#d946ef"/>
      <circle cx="12" cy="20" r="1.5" fill="#d946ef"/>
      <circle cx="4" cy="12" r="1.5" fill="#d946ef"/>
      <circle cx="20" cy="12" r="1.5" fill="#d946ef"/>
      <circle cx="6" cy="6" r="1" fill="#d946ef"/>
      <circle cx="18" cy="18" r="1" fill="#d946ef"/>
    </svg>`;
  }

  // 51. Gallery Engine
  if (t.includes('gallery')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14" fill="#e11d48">
      <rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="#e11d48" stroke-width="2"/>
      <circle cx="8.5" cy="8.5" r="1.5" fill="#e11d48"/>
      <polyline points="21 15 16 10 5 21" stroke="#e11d48" stroke-width="1.8" fill="none"/>
    </svg>`;
  }

  // 52. Responsive UI
  if (t.includes('responsive ui') || t.includes('ui')) {
    return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14" fill="#3b82f6">
      <rect x="2" y="4" width="13" height="16" rx="2" fill="none" stroke="#3b82f6" stroke-width="1.8"/>
      <rect x="17" y="9" width="5" height="11" rx="1.5" fill="none" stroke="#3b82f6" stroke-width="1.8"/>
    </svg>`;
  }

  // Default fallback code tag icon
  return `<svg class="tech-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>`;
};
