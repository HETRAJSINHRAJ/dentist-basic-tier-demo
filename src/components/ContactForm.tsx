'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Phone number validation regex - supports multiple formats:
// (123) 456-7890, 123-456-7890, 1234567890, +1 123 456 7890, etc.
const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/;

// Custom phone validation function
const validatePhone = (phone: string) => {
  // Remove all non-digit characters to count actual digits
  const digitsOnly = phone.replace(/\D/g, '');

  // Must have at least 10 digits
  if (digitsOnly.length < 10) {
    return false;
  }

  // Must match the phone regex pattern
  return phoneRegex.test(phone);
};

// Zod validation schema for contact form
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),

  email: z
    .string()
    .email('Please enter a valid email address')
    .max(100, 'Email must be less than 100 characters')
    .toLowerCase(),

  phone: z
    .string()
    .min(1, 'Phone number is required')
    .refine(validatePhone, {
      message: 'Please enter a valid phone number with at least 10 digits (e.g., (123) 456-7890)',
    }),

  service: z
    .string()
    .min(1, 'Please select a service'),

  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  // Initialize React Hook Form with Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur', // Validate on blur for better UX
    reValidateMode: 'onChange', // Re-validate on change after first validation
  });

  // Watch message field for character count
  const messageValue = watch('message', '');

  // Format phone number as user types (optional auto-formatting)
  const formatPhoneNumber = (value: string) => {
    // Remove all non-digit characters
    const phoneNumber = value.replace(/\D/g, '');

    // Format based on length
    if (phoneNumber.length <= 3) {
      return phoneNumber;
    } else if (phoneNumber.length <= 6) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    } else if (phoneNumber.length <= 10) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
    } else {
      // Handle numbers with country code
      return `+${phoneNumber.slice(0, phoneNumber.length - 10)} (${phoneNumber.slice(-10, -7)}) ${phoneNumber.slice(-7, -4)}-${phoneNumber.slice(-4)}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setValue('phone', formatted, { shouldValidate: true });
  };

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Call our API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSuccess(true);
        toast.success('Message sent successfully! We\'ll get back to you soon.');

        // Reset form after 2 seconds
        setTimeout(() => {
          reset();
          setIsSuccess(false);
        }, 2000);
      } else {
        // Handle specific error messages
        if (response.status === 429) {
          toast.error('Too many requests. Please try again later.');
        } else if (result.error) {
          toast.error(result.error);
        } else {
          throw new Error('Form submission failed');
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name">Full Name *</Label>
        <Input
          id="name"
          type="text"
          placeholder="John Doe"
          {...register('name')}
          disabled={isSubmitting}
          className={`transition-transform focus:scale-[1.01] ${
            errors.name ? 'border-destructive focus-visible:ring-destructive' : ''
          }`}
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p
            id="name-error"
            className="text-sm text-destructive font-medium animate-in fade-in-50 slide-in-from-top-1"
            role="alert"
            aria-live="polite"
          >
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          {...register('email')}
          disabled={isSubmitting}
          className={`transition-transform focus:scale-[1.01] ${
            errors.email ? 'border-destructive focus-visible:ring-destructive' : ''
          }`}
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p
            id="email-error"
            className="text-sm text-destructive font-medium animate-in fade-in-50 slide-in-from-top-1"
            role="alert"
            aria-live="polite"
          >
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number *</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="(123) 456-7890"
          {...register('phone')}
          onChange={handlePhoneChange}
          disabled={isSubmitting}
          className={`transition-transform focus:scale-[1.01] ${
            errors.phone ? 'border-destructive focus-visible:ring-destructive' : ''
          }`}
          aria-invalid={errors.phone ? 'true' : 'false'}
          aria-describedby={errors.phone ? 'phone-error phone-hint' : 'phone-hint'}
          autoComplete="tel"
          inputMode="tel"
        />
        <p id="phone-hint" className="text-xs text-muted-foreground">
          Formats accepted: (123) 456-7890, 123-456-7890, 1234567890
        </p>
        {errors.phone && (
          <p
            id="phone-error"
            className="text-sm text-destructive font-medium animate-in fade-in-50 slide-in-from-top-1"
            role="alert"
            aria-live="polite"
          >
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Service */}
      <div className="space-y-2">
        <Label htmlFor="service">Service Interested In *</Label>
        <Select
          onValueChange={(value) => setValue('service', value, { shouldValidate: true })}
          disabled={isSubmitting}
        >
          <SelectTrigger
            className={`transition-transform focus:scale-[1.01] ${
              errors.service ? 'border-destructive focus-visible:ring-destructive' : ''
            }`}
            aria-invalid={errors.service ? 'true' : 'false'}
            aria-describedby={errors.service ? 'service-error' : undefined}
          >
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="General Checkup">General Checkup</SelectItem>
            <SelectItem value="Teeth Cleaning">Teeth Cleaning</SelectItem>
            <SelectItem value="Dental Implants">Dental Implants</SelectItem>
            <SelectItem value="Teeth Whitening">Teeth Whitening</SelectItem>
            <SelectItem value="Orthodontics">Orthodontics (Braces/Invisalign)</SelectItem>
            <SelectItem value="Root Canal">Root Canal Treatment</SelectItem>
            <SelectItem value="Cosmetic Dentistry">Cosmetic Dentistry</SelectItem>
            <SelectItem value="Emergency Care">Emergency Care</SelectItem>
            <SelectItem value="Pediatric Dentistry">Pediatric Dentistry</SelectItem>
            <SelectItem value="Oral Surgery">Oral Surgery</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
        {errors.service && (
          <p
            id="service-error"
            className="text-sm text-destructive font-medium animate-in fade-in-50 slide-in-from-top-1"
            role="alert"
            aria-live="polite"
          >
            {errors.service.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          placeholder="Tell us about your dental needs or any questions you have..."
          {...register('message')}
          disabled={isSubmitting}
          className={`min-h-[120px] transition-transform focus:scale-[1.01] ${
            errors.message ? 'border-destructive focus-visible:ring-destructive' : ''
          }`}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error message-count' : 'message-count'}
        />
        <p id="message-count" className="text-xs text-muted-foreground">
          {messageValue?.length || 0}/1000 characters
        </p>
        {errors.message && (
          <p
            id="message-error"
            className="text-sm text-destructive font-medium animate-in fade-in-50 slide-in-from-top-1"
            role="alert"
            aria-live="polite"
          >
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Privacy Notice */}
      <p className="text-xs text-muted-foreground">
        * Required fields. Your information is kept confidential and will only be used to 
        respond to your inquiry.
      </p>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full relative overflow-hidden group transition-all duration-300"
      >
        {/* Animated gradient background on hover */}
        <span className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <span className="relative flex items-center justify-center">
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : isSuccess ? (
            <>
              <CheckCircle2 className="mr-2 h-4 w-4 animate-bounce" />
              Sent Successfully!
            </>
          ) : (
            'Send Message'
          )}
        </span>
      </Button>
    </form>
  );
}