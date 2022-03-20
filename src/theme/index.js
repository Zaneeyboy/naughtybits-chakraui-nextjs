// jshint esversion:9
import {
  extendTheme,
  withDefaultColorScheme,
  theme as base,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme(
  {
    fonts: {
      heading: "Montserrat,sans-serif",
      body: "Inter,sans-serif",
    },
    components: {
      IconButton: {
        baseStyle: {
          borderRadius: "4px",
        },
      },

      Button: {
        variants: {
          banner: (props) => ({
            borderRadius: "4px",
            _focus: {
              ring: 2,
              ringColor: "purple.400",
            },
            color: "gray.800",
            backgroundColor: mode("purple.200", "purple.200")(props),
            padding: "2.5% 3.5%",
            _hover: {
              backgroundColor: mode("purple.500", "purple.500")(props),
              color: "gray.50",
            },
            _active: {
              backgroundColor: mode("purple.700", "purple.700")(props),
              color: "gray.50",
            },
          }),
          primary: (props) => ({
            borderRadius: "4px",
            _focus: {
              ring: 2,
              ringColor: "purple.400",
            },
            color: mode("gray.100", "gray.800")(props),
            backgroundColor: mode("purple.500", "purple.200")(props),
            padding: "2% 5%",
            _hover: {
              color: mode("gray.100", "gray.800")(props),
              backgroundColor: mode("purple.600", "purple.300")(props),
            },
            _active: {
              backgroundColor: mode("purple.700", "purple.400")(props),
            },
          }),
        },
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: "purple",
    components: ["Button"],
  })
);

export default theme;
