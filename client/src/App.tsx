import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Process from "@/pages/Process";
import Contact from "@/pages/Contact";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

function Router() {
  // Scroll to top when route changes
  const handleRouteChange = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("pushstate", handleRouteChange);
    window.addEventListener("popstate", handleRouteChange);
    
    return () => {
      window.removeEventListener("pushstate", handleRouteChange);
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/process" component={Process} />
        <Route path="/contact" component={Contact} />
        {/* Fallback to 404 */}
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}

export default App;
