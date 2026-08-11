import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Placeholder({ title }: { title: string }) {
  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center gap-4 py-20 text-center">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
        <MessageCircle className="h-6 w-6" />
      </span>
      <h1 className="font-heading text-3xl font-semibold">{title}</h1>
      <p className="max-w-md text-muted-foreground">
        This page is ready to be designed. Keep prompting to tell us what
        should go here.
      </p>
      <Button asChild variant="outline" className="mt-2 rounded-full">
        <Link to="/">Back to shop</Link>
      </Button>
    </div>
  );
}
