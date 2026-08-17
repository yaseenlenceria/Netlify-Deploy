import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import MeetEricaPage from "@/pages/MeetEricaPage";
import ServicesPage from "@/pages/ServicesPage";
import TestimonialsPage from "@/pages/TestimonialsPage";
import ContactPage from "@/pages/ContactPage";
import PrivacyPage from "@/pages/PrivacyPage";
import NotFound from "@/pages/not-found";
import {
  BestWeddingPlannerPage,
  DestinationWeddingPlannerPage,
  InternationalWeddingPlannerPage,
  OnTheDayWeddingCoordinatorPage,
  WeddingPlannerBookPage,
  WeddingPlannerCostPage,
  WeddingPlannerOliviaPage,
  WeddingPlannerPricePage,
} from "@/pages/SeoLandingPage";
import { SocialProofToast } from "@/components/SocialProofToast";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollToTop } from "@/components/ScrollToTop";

const queryClient = new QueryClient();

function Router() {
  return (
    <>
    <ScrollToTop />
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/meet-erica" component={MeetEricaPage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/testimonials" component={TestimonialsPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/wedding-planner-in-ireland-price" component={WeddingPlannerPricePage} />
      <Route path="/wedding-planner-in-ireland-cost" component={WeddingPlannerCostPage} />
      <Route path="/best-wedding-planner-in-ireland" component={BestWeddingPlannerPage} />
      <Route path="/wedding-planner-book" component={WeddingPlannerBookPage} />
      <Route path="/destination-wedding-planner" component={DestinationWeddingPlannerPage} />
      <Route path="/international-wedding-planner" component={InternationalWeddingPlannerPage} />
      <Route path="/on-the-day-wedding-coordinator" component={OnTheDayWeddingCoordinatorPage} />
      <Route path="/wedding-planner-olivia" component={WeddingPlannerOliviaPage} />
      <Route path="/privacy-policy" component={PrivacyPage} />
      <Route component={NotFound} />
    </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
          <SocialProofToast />
          <WhatsAppButton />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
