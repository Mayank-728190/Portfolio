'use server';

import { z } from 'zod';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' })
    .max(500, { message: 'Message must be less than 500 characters.' }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Validation failed. Please check your input.',
      success: false,
    };
  }

  try {
    await addDoc(collection(db, 'contactMessages'), {
      name: validatedFields.data.name,
      email: validatedFields.data.email,
      message: validatedFields.data.message,
      submittedAt: serverTimestamp(),
    });
    return {
      message: 'Thank you! Your message has been sent.',
      success: true,
      errors: {},
    };
  } catch (error) {
    console.error('Error adding document: ', error);
    return {
      message: 'Something went wrong. Please try again later.',
      success: false,
      errors: {},
    };
  }
}
