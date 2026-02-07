import { useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Team from "@/pages/Team";
import Contact from "@/pages/Contact";
import ScrollToTop from "@/components/ScrollToTop";
import SocialSidebar from "@/components/SocialSidebar";
import WhatsAppPopup from "@/components/WhatsAppPopup";
import GhazalPopup from "@/components/GhazalPopup";

import Shivachatrapati from "@/pages/Shivachatrapati";

function RedirectToHome() {
  const [, setLocation] = useLocation();
  useEffect(() => {
    setLocation("/");
  }, [setLocation]);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/scan" component={RedirectToHome} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/shivachatrapati" component={Shivachatrapati} />
      {/* <Route path="/team" component={Team} /> */}
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <ScrollToTop />
        {/* <GhazalPopup /> */}
        <SocialSidebar />
        <WhatsAppPopup />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
