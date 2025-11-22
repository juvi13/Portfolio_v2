"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactDialog({ children, email }: { children: React.ReactNode, email: string }) {
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\n\nMessage: ${message}`)}`;

    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-md glass-card p-6">
                 <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">Contact Me</DialogTitle>
                    <DialogDescription>
                        Fill out the form below and I'll get back to you as soon as possible.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                    <div className="space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name..." />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="subject">Subject</Label>
                            <Input id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Project Inquiry" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your message here..." className="min-h-[120px]" />
                        </div>
                    </div>
                     <div className="h-full w-full overflow-hidden rounded-lg min-h-[200px] md:min-h-0">
                        <iframe
                            className="w-full h-full"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58962.635586094446!2d88.30615338432386!3d22.535501384584997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1763837223171!5m2!1sen!2sin"
                            allowFullScreen={true}
                            loading="lazy"
                            title="Google Map of Kolkata"
                        ></iframe>
                    </div>
                </div>
                <DialogFooter>
                    <a href={mailtoLink} className="w-full">
                        <Button type="submit" className="w-full">Send Message via Email</Button>
                    </a>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
