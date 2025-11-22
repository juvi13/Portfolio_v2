import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/contact-dialog";

export function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 md:px-6">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Get In Touch</h2>
        <p className="max-w-2xl mx-auto text-muted-foreground">
          Have a project in mind or just want to say hello? Let's connect.
        </p>
        <ContactDialog>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Connect
          </Button>
        </ContactDialog>
      </div>
    </section>
  );
}
