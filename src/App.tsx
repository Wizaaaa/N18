import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import Home1 from "./pages/Home1";
import Home2 from "./pages/Home2";
import Home3 from "./pages/Home3";
import Home4 from "./pages/Home4";
import Home5 from "./pages/Home5";
import Home6 from "./pages/Home6";
import Home7 from "./pages/Home7";
import Home8 from "./pages/Home8";
import Home9 from "./pages/Home9";
import Home95 from "./pages/Home95";
import Home10 from "./pages/Home10";
import Hadanka from "./pages/hadanka";

// Definice animací mimo komponentu (pro lepší čitelnost)
const pageVariants = {
  initial: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

function AnimatedRoutes() {
  const location = useLocation();
  
  // Získáme směr z navigace (výchozí je 1, tedy doprava)
  const direction = location.state?.direction ?? 1;

  return (
    /* custom předává směr do variants i pro odcházející prvek */
    <AnimatePresence mode="popLayout" custom={direction}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper direction={direction}>
              <Home />
            </PageWrapper>
          }
        />

        <Route
          path="/1"
          element={
            <PageWrapper direction={direction}>
              <Home1 />
            </PageWrapper>
          }
        />
        
        <Route
          path="/2"
          element={
            <PageWrapper direction={direction}>
              <Home2 />
            </PageWrapper>
          }
        />
                
        <Route
          path="/3"
          element={
            <PageWrapper direction={direction}>
              <Home3 />
            </PageWrapper>
          }
        />
                        
        <Route
          path="/4"
          element={
            <PageWrapper direction={direction}>
              <Home4 />
            </PageWrapper>
          }
        />
                                
        <Route
          path="/5"
          element={
            <PageWrapper direction={direction}>
              <Home5 />
            </PageWrapper>
          }
        />
                                        
        <Route
          path="/6"
          element={
            <PageWrapper direction={direction}>
              <Home6 />
            </PageWrapper>
          }
        />
                                                
        <Route
          path="/7"
          element={
            <PageWrapper direction={direction}>
              <Home7 />
            </PageWrapper>
          }
        />
                                                        
        <Route
          path="/8"
          element={
            <PageWrapper direction={direction}>
              <Home8 />
            </PageWrapper>
          }
        />
                                                                
        <Route
          path="/9"
          element={
            <PageWrapper direction={direction}>
              <Home9 />
            </PageWrapper>
          }
        />
                                                                        
        <Route
          path="/9-5"
          element={
            <PageWrapper direction={direction}>
              <Home95 />
            </PageWrapper>
          }
        />
                                                                                
        <Route
          path="/10"
          element={
            <PageWrapper direction={direction}>
              <Home10 />
            </PageWrapper>
          }
        />
                                                                                        
        <Route
          path="/hadanka"
          element={
            <PageWrapper direction={direction}>
              <Hadanka />
            </PageWrapper>
          }
        />
        
      </Routes>
    </AnimatePresence>
  );
}

// Pomocný obal pro animaci, aby se kód Routes neopakoval
function PageWrapper({ children, direction }: { children: React.ReactNode, direction: number }) {
  return (
    <motion.div
      custom={direction}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-0 w-full h-full"
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    /* overflow-hidden je klíčový, aby stránky při odjezdu netvořily scrollbar */
    <div className="w-full h-screen overflow-hidden bg-[#A76363]">
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}