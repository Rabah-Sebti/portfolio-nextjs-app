import { useEffect, useState } from "react";
// export const useMediaQuery = (query) => {
//   const [matches, setMatches] = useState(false);

//   const updateMatches = () => {
//     const mediaQueryList = window.matchMedia(query);
//     setMatches(mediaQueryList.matches);
//   };

//   useEffect(() => {
//     updateMatches();
//     const mediaQueryList = window.matchMedia(query);
//     mediaQueryList.addEventListener("change", updateMatches);

//     return () => {
//       mediaQueryList.removeEventListener("change", updateMatches);
//     };
//   }, [query]);

//   return matches;
// };
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window !== "undefined") {
      const updateMatches = () => {
        const mediaQueryList = window.matchMedia(query);
        setMatches(mediaQueryList.matches);
      };

      updateMatches();

      const mediaQueryList = window.matchMedia(query);
      mediaQueryList.addEventListener("change", updateMatches);

      return () => {
        mediaQueryList.removeEventListener("change", updateMatches);
      };
    } else {
      // If window is not available (during SSR), set matches to false
      setMatches(false);
    }
  }, [query]);

  return matches;
};
