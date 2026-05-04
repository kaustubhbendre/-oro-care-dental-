# 🎨 Customization Guide - Oro-Care Dental Clinic

Learn how to customize every part of your website to match your clinic's brand.

---

## 🏥 Clinic Information

### Update Basic Info
Edit `src/components/Contact.jsx`:

```jsx
// Change clinic address, phone, email
const hours = [
  { day: 'Monday – Friday', time: '10:00 AM – 9:00 PM' },
  { day: 'Saturday', time: '10:00 AM – 6:00 PM' },
  { day: 'Sunday', time: 'Closed' },
];
```

Edit `src/components/Navbar.jsx`:
```jsx
<a href="tel:+919967869453" className="nav-phone">
  <Phone size={16} />
  <span>+91 99678 69453</span>  {/* Change your number */}
</a>
```

### Update Doctor Info
Edit `src/components/About.jsx`:

```jsx
<motion.h2 className="heading-lg">
  Dr. Shashank Kumar  {/* Change doctor name */}
</motion.h2>

<motion.p className="about-intro">
  With over 15 years of dedicated service... {/* Update bio */}
</motion.p>
```

### Update Services
Edit `src/components/Services.jsx`:

```jsx
const services = [
  { 
    icon: '🦷', 
    title: 'Teeth Cleaning', 
    desc: 'Professional scaling and polishing...',
    color: '#e8f4fd' 
  },
  // Add or remove services
];
```

---

## 🎨 Colors & Branding

### Change Color Scheme
Edit `src/styles/global.css`:

```css
:root {
  /* Main colors */
  --ocean: #0a4a6e;        /* Primary - Change to your brand color */
  --ocean-light: #0d6ea3;
  --ocean-dark: #062d44;
  --teal: #00b4d8;         /* Accent - Change for highlights */
  --cream: #f8f5ef;        /* Background */
  --white: #ffffff;
  --gold: #c9a84c;         /* Highlights */
  
  /* Text colors */
  --text-dark: #1e2a38;
  --text-mid: #4a5568;
  --text-light: #8899aa;
  
  /* Alerts */
  --error: #e53e3e;
  --success: #38a169;
}
```

### Logo & Icons
Currently uses emoji 🦷 in Navbar. To change:

Edit `src/components/Navbar.jsx`:
```jsx
<div className="logo-icon">
  <span>🦷</span>  {/* Change to your logo emoji */}
</div>
```

For custom SVG logo, replace with image:
```jsx
<div className="logo-icon">
  <img src="/your-logo.svg" alt="Logo" />
</div>
```

---

## 🔤 Fonts

### Change Typography
Edit `src/styles/global.css`:

```css
:root {
  --font-display: 'Playfair Display', serif;   /* Headings */
  --font-body: 'DM Sans', sans-serif;          /* Body text */
  --font-accent: 'Cormorant Garamond', serif;  /* Quotes */
}
```

Available Google Fonts alternatives:
- **Display:** Merriweather, Lora, EB Garamond
- **Body:** Inter, Poppins, Work Sans
- **Accent:** Merriweather, Lora, Old Standard TT

Update in `public/index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;600;700&display=swap" rel="stylesheet" />
```

---

## 📸 Add Images

### Hero Section Image
Edit `src/components/Hero.jsx` - Replace emoji card with image:

```jsx
<motion.div className="hero-visual">
  <img 
    src="/doctor-photo.jpg" 
    alt="Doctor" 
    className="doctor-photo"
  />
</motion.div>
```

### Background Images
Edit component `.css` in `<style>` tags:

```css
.hero {
  background-image: url('/your-image.jpg');
  background-size: cover;
  background-position: center;
}
```

### Store Images
Create `src/assets/` folder:
```
src/
└── assets/
    ├── doctor.jpg
    ├── clinic.jpg
    ├── logo.svg
    └── team-photos/
```

Import and use:
```jsx
import doctorPhoto from '../assets/doctor.jpg';

<img src={doctorPhoto} alt="Doctor" />
```

---

## ⭐ Reviews & Testimonials

### Update Patient Reviews
Edit `src/components/Reviews.jsx`:

```jsx
const reviews = [
  {
    name: 'Priya Sharma',
    initials: 'PS',
    color: '#0a4a6e',
    rating: 5,
    text: 'They made a treatment plan that suited me...',
    service: 'Teeth Whitening',
    date: '2 weeks ago',
  },
  // Add more reviews here
];
```

### Add Your Own Reviews
Update from Google Reviews or patient feedback:
1. Copy review text
2. Create initials
3. Assign color
4. Add service name and date

---

## 📅 Appointment Form

### Change Available Times
Edit `src/components/AppointmentForm.jsx`:

```jsx
const timeSlots = [
  '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '2:00 PM', '2:30 PM',
  // Add or remove time slots
];
```

### Change Services
```jsx
const services = [
  'Teeth Cleaning', 
  'Teeth Whitening', 
  'Root Canal Treatment',
  // Add your services
];
```

---

## 🗺️ Map & Location

### Update Google Maps
Edit `src/components/Contact.jsx`:

```jsx
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.0!2d72.8777!3d19.1197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c90ca9d46b83%3A0x7b5f455949c70d4d!2sOro-Care%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1"
  width="100%"
  height="100%"
/>
```

Get embed code:
1. Go to Google Maps
2. Search your clinic
3. Click "Share" → "Embed a map"
4. Copy iframe and paste here

### Update Address
```jsx
<p className="info-val">
  Your Clinic Name<br />
  123 Your Street<br />
  City – 400000
</p>
```

---

## 🎯 Hero Section

### Headline
Edit `src/components/Hero.jsx`:

```jsx
<motion.h1 className="heading-xl hero-title">
  Your Smile,<br />
  <span className="gradient-text">Our Passion</span>
</motion.h1>
```

### Description
```jsx
<motion.p className="hero-desc">
  Expert dental care with a gentle touch. Dr. Shashank Kumar and the Oro-Care team 
  are committed to giving you the smile you deserve...
</motion.p>
```

### Stats
```jsx
<motion.div className="stat-card stat-1">
  <span className="stat-num">15+</span>
  <span className="stat-label">Years Experience</span>
</motion.div>
```

---

## 📧 Contact Information

### Update Email
Edit components with email links:

```jsx
<a href="mailto:your@email.com" className="contact-chip">
  <Mail size={16} />
  your@email.com
</a>
```

### Update Phone
```jsx
<a href="tel:+911234567890" className="nav-phone">
  <Phone size={16} />
  <span>+91 12345 67890</span>
</a>
```

---

## 🎨 Button Styles

### Customize Buttons
Edit `src/styles/global.css`:

```css
.btn-primary {
  background: var(--ocean);
  padding: 14px 32px;
  border-radius: var(--radius-full);
  /* Customize colors, padding, border-radius */
}

.btn-outline {
  border: 2px solid var(--ocean);
  /* Customize border, colors */
}
```

---

## ✨ Animations

### Adjust Animation Speed
Edit individual component `<style>` sections:

```jsx
<motion.div
  animate={{ y: [0, -8, 0] }}
  transition={{ 
    duration: 3,  /* Change speed here */
    repeat: Infinity 
  }}
>
```

Values:
- `duration: 1` = Fast
- `duration: 3` = Normal
- `duration: 5+` = Slow

### Disable Animations (Mobile)
Add to `global.css`:
```css
@media (max-width: 768px) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

---

## 🔄 Meta Tags (SEO)

### Update Page Title & Description
Edit `public/index.html`:

```html
<meta name="description" content="Oro-Care Dental Clinic - Expert dental care in Mumbai" />
<title>Oro-Care Dental Clinic | Dr. Shashank Kumar</title>
```

### Social Media Preview
Add Open Graph tags:

```html
<meta property="og:title" content="Oro-Care Dental Clinic" />
<meta property="og:description" content="Best dental care in Andheri East" />
<meta property="og:image" content="/preview-image.jpg" />
<meta property="og:url" content="https://yoursite.com" />
```

---

## 🔔 Notifications (When Using Database)

### Customize Booking Messages
Edit `src/components/AppointmentForm.jsx`:

```jsx
toast.success('Appointment booked! We\'ll confirm shortly.');
toast.error('Something went wrong. Please call us directly.');
```

---

## 📝 Content Updates

### Hero Tag
```jsx
<span className="section-tag">⭐ Rated 5.0 · 140+ Happy Patients</span>
```

### Section Tags
```jsx
<span className="section-tag">Meet The Doctor</span>
<span className="section-tag">What We Offer</span>
<span className="section-tag">Patient Stories</span>
```

---

## 💾 Save & Test

After making changes:

```bash
# See changes live (already running)
# Browser auto-refreshes on save

# When ready to test fully:
npm run build

# Deploy
vercel
```

---

## 🚀 Best Practices

- ✅ Test on mobile before deploying
- ✅ Spell-check all text
- ✅ Update copyright year in footer
- ✅ Test all links work
- ✅ Verify phone numbers are correct
- ✅ Check email addresses are active
- ✅ Test form submission works

---

## 🆘 Need Help?

If something breaks:

1. Check browser console: `F12` → Console tab
2. Compare with original files
3. Undo changes: `Ctrl+Z`
4. Restart dev server: Stop and `npm start`

---

**Happy customizing! 🦷✨**
