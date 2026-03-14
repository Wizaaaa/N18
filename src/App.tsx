import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import Home1 from "./pages/Home1";

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