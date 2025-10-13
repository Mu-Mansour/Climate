import { Facebook, Github, Linkedin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ContactSection() {
  return (
    <Card className='h-full'>
      <CardHeader className='pb-2'>
        <CardTitle className='text-base font-semibold'>Contact Us</CardTitle>
      </CardHeader>

      <CardContent className='space-y-6 text-sm'>
        {/* Contact Info */}
        <div>
          <p className='text-muted-foreground mb-1'>
            Feel free to drop us a line at:
          </p>
          <a
            href='mailto:muhamad.mansour19@gmail.com
?subject=Contact'
            className='font-semibold hover:underline'
          >
            Muhamad.Mansour19@gmail.com
          </a>
        </div>

        {/* Social Links */}
        <div>
          <p className='text-muted-foreground mb-3'>
            Find Us On Social Networks
          </p>
          <div className='flex flex-wrap gap-3'>
            <a
              href='https://www.linkedin.com/in/mohammed--mansour/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 rounded-md border border-border px-3 py-2 transition hover:bg-accent'
            >
              <Linkedin className='h-4 w-4 text-blue-500' />
              <span>LinkedIn</span>
            </a>

            <a
              href='https://www.facebook.com/share/17YV33dZWL/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 rounded-md border border-border px-3 py-2 transition hover:bg-accent'
            >
              <Facebook className='h-4 w-4 text-blue-900' />
              <span>Facebook</span>
            </a>

            <a
              href='https://github.com/Mu-Mansour'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 rounded-md border border-border px-3 py-2 transition hover:bg-accent'
            >
              <Github className='h-4 w-4 text-muted-foreground' />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
