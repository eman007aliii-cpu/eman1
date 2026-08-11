import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="container flex min-h-[70vh] flex-col items-center justify-center gap-4 py-20 text-center">
      <p className="font-heading text-6xl font-semibold text-primary">404</p>
      <h1 className="font-heading text-2xl font-semibold">Page not found</h1>
      <p className="max-w-md text-muted-foreground">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Button asChild className="mt-2 rounded-full">
        <Link to="/">Return to shop</Link>
      </Button>
    </div>
  );
};

export default NotFound;
