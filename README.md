# Orange Hat Website

A modern, responsive website for Orange Hat - an organization dedicated to empowering children and communities in Nigeria through education, mentorship, and sustainable development programs.

## 🌟 Features

- **Modern React Architecture**: Built with React 19, TypeScript, and Vite
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Smooth Animations**: Framer Motion for engaging user interactions
- **Form Handling**: Comprehensive form validation and submission
- **Error Boundaries**: Robust error handling and user feedback
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Accessibility**: WCAG compliant design patterns
- **Type Safety**: Full TypeScript implementation

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/orangehat/website.git
   cd orangehat-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your configuration:
   ```env
   VITE_API_BASE_URL=https://api.orangehat.org
   VITE_CONTACT_EMAIL=info@orangehat.org
   VITE_PHONE_NUMBER=+234-XXX-XXX-XXXX
   # Add other variables as needed
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Project Structure

```
orangehat-website/
├── components/          # Reusable UI components
│   ├── ErrorBoundary.tsx
│   ├── Newsletter.tsx
│   └── ...
├── pages/              # Page components
│   ├── HomePage.tsx
│   ├── ContactPage.tsx
│   └── ...
├── utils/              # Utility functions
│   ├── api.ts          # API calls
│   ├── validation.ts   # Form validation
│   └── constants.ts    # App constants
├── data/               # Static data
│   ├── programs.ts
│   └── stats.ts
├── hooks/              # Custom React hooks
│   └── useScrollTo.ts
├── types.ts            # TypeScript type definitions
├── App.tsx             # Main app component
└── index.tsx           # App entry point
```

## 🎨 Styling

This project uses Tailwind CSS with custom configuration:

- **Primary Colors**: Orange Hat (#F97316), Green Hat (#059669), Cream (#FFFBEB)
- **Typography**: Inter font family
- **Responsive**: Mobile-first approach
- **Custom Components**: Reusable utility classes

## 📝 Forms & API Integration

### Form Handling

All forms include:
- Real-time validation
- Error handling
- Loading states
- Success feedback
- Accessibility features

### API Integration

Forms are connected to backend APIs through the `utils/api.ts` module:

- Contact form submission
- Newsletter subscription
- Volunteer applications
- Partnership inquiries
- Donation processing

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_API_BASE_URL` | Backend API URL | Yes |
| `VITE_CONTACT_EMAIL` | Organization email | Yes |
| `VITE_PHONE_NUMBER` | Contact phone number | Yes |
| `VITE_FACEBOOK_URL` | Facebook page URL | No |
| `VITE_INSTAGRAM_URL` | Instagram profile URL | No |
| `VITE_YOUTUBE_URL` | YouTube channel URL | No |
| `VITE_GA_TRACKING_ID` | Google Analytics ID | No |

### Customization

1. **Colors**: Update `tailwind.config.js` for brand colors
2. **Content**: Modify data files in `/data` directory
3. **Images**: Replace placeholder images in `/public/images`
4. **Social Links**: Update environment variables

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Deployment Options

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder
- **Railway**: Use the provided railway.json configuration
- **Traditional Hosting**: Upload `dist` folder contents

### Environment Setup

Ensure all environment variables are configured in your deployment platform.

## 🧪 Testing

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use semantic commit messages
- Ensure responsive design
- Add proper error handling
- Include accessibility features
- Write meaningful component names

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:

- **Email**: info@orangehat.org
- **Website**: https://orangehat.org
- **Issues**: GitHub Issues tab

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- All contributors and supporters of Orange Hat

---

**Made with ❤️ for Orange Hat Organization**