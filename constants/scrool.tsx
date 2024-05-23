import React, { useState, useEffect } from "react";
import { IconButton } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";

const ScrollToTopButton = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Corrected scrollTo method
  };

  return (
    <>
      {showScroll && (
        <IconButton
          aria-label="Scroll to top"
          icon={<ArrowUpIcon />}
          onClick={scrollToTop}
          position="fixed"
          bottom="20px"
          right="20px"
          borderRadius="full"
          size="lg"
        />
      )}
    </>
  );
};

export default ScrollToTopButton;
