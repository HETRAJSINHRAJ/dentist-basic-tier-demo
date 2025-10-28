# DentalCare - Informative Dental Practice Website

A modern, responsive dental practice website built with Next.js 15, TypeScript, Tailwind CSS, and Resend email service.

## Features

- **Home Page**: Hero section, services overview, team showcase, testimonials carousel, and call-to-action
- **About Page**: Practice story, detailed team profiles, certifications, and office tour gallery
- **Services Page**: Filterable service cards with pricing and detailed descriptions
- **Gallery Page**: Category-based photo gallery with lightbox functionality
- **Contact Page**: Contact form with validation, business hours, Google Maps integration

## Tech Stack

- **Frontend**: Next.js 15.5, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Next.js API Routes with Resend email service
- **Email Service**: Resend (for contact form submissions)
- **Deployment**: Vercel-ready
- **Form Validation**: Zod with server-side validation
- **UI Components**: shadcn/ui with custom dental theme

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Resend account (free tier available at https://resend.com)

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd dental-care
```

2. Install dependencies
```bash
npm install
# or
bun install
```

3. Set up Resend Email Service

   a. Create a free account at [Resend](https://resend.com)

   b. Get your API key:
      - Go to [API Keys](https://resend.com/api-keys)
      - Click "Create API Key"
      - Copy your API key (it starts with `re_`)

   c. (Optional) Add and verify your domain:
      - Go to [Domains](https://resend.com/domains)
      - Add your domain and follow DNS verification steps
      - This allows you to send emails from your own domain
      - For testing, you can use the default `onboarding@resend.dev` sender

4. Configure environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Resend credentials:

```env
RESEND_API_KEY=re_your_api_key_here
ADMIN_EMAIL=admin@yourdomain.com
```

Replace:
- `RESEND_API_KEY` with your actual Resend API key
- `ADMIN_EMAIL` with the email address where you want to receive contact form submissions

5. Run the development server

```bash
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
src/
├── app/
│   ├── about/          # About page
│   ├── services/       # Services page
│   ├── gallery/        # Gallery page
│   ├── contact/        # Contact page
│   ├── api/
│   │   └── contact/    # Contact form API route with Resend
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Home page
│   ├── sitemap.ts      # XML sitemap
│   └── robots.ts       # Robots.txt
├── components/
│   ├── ui/             # shadcn/ui components
│   ├── Navbar.tsx      # Navigation component
│   ├── Footer.tsx      # Footer component
│   ├── ServiceCard.tsx # Service display card
│   ├── DentistCard.tsx # Dentist profile card
│   ├── TestimonialCard.tsx # Testimonial card
│   └── ContactForm.tsx # Contact form with validation
└── lib/
    └── utils.ts        # Utility functions
```

## Key Features

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly navigation

### SEO Optimized
- Meta tags for all pages
- Open Graph support
- XML sitemap
- Robots.txt configuration

### Accessibility
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- High contrast ratios

### Contact Form
- Server-side validation with Zod
- Email delivery via Resend API
- Rate limiting (5 submissions per hour per IP)
- Success/error toast notifications
- Required field validation
- XSS protection and input sanitization

## Deployment

### Deploy to Vercel

1. Push your code to GitHub

2. Import your repository in [Vercel](https://vercel.com)

3. Add environment variables in Vercel project settings:
   - `RESEND_API_KEY`: Your Resend API key
   - `ADMIN_EMAIL`: Email address to receive contact form submissions

4. Deploy!

**Note**: Make sure to add your production domain to Resend and update the `from` field in `src/app/api/contact/route.ts` to use your verified domain instead of `onboarding@resend.dev`.

## Customization

### Colors
Edit `src/app/globals.css` to customize the color scheme:
- Primary color (dental blue): `--primary`
- Secondary colors
- Background colors

### Content
- Update team member information in `src/app/about/page.tsx`
- Modify services in `src/app/services/page.tsx`
- Change contact information in `src/components/Footer.tsx` and `src/app/contact/page.tsx`

### Images
Replace Unsplash placeholder images with your own:
- Team photos
- Office photos
- Treatment photos
- Before/after photos

## Email Configuration

### Resend Setup

The contact form uses Resend to send emails. Here's what you need to know:

1. **Free Tier**: Resend offers 100 emails/day for free, perfect for small to medium dental practices
2. **API Key**: Get your API key from https://resend.com/api-keys
3. **Domain Verification** (Optional but recommended):
   - Add your domain in Resend dashboard
   - Add DNS records to verify ownership
   - Send emails from your own domain (e.g., `contact@yourdentalpractice.com`)

### Email Template

The contact form sends beautifully formatted HTML emails with:
- Contact information (name, email, phone, service)
- Message content
- Timestamp and IP address for security
- Reply-to header set to the sender's email for easy responses

### Rate Limiting

To prevent spam, the API implements rate limiting:
- Maximum 5 submissions per hour per IP address
- Returns 429 status code when limit is exceeded
- Automatic cleanup of old rate limit records

## License

This project is licensed under the MIT License.

## Support

For questions or issues, please open an issue in the GitHub repository.