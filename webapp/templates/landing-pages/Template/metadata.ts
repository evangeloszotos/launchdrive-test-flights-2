import { TextField } from "@mui/material";

export const metadata = {
  id: "template-1",
  setup: {
    color: [
      { name: "Primary", defaultValue: "red", hint: "" },
      { name: "Secondary", defaultValue: "red", hint: "" },
    ],
    fonts: [],
  },
  landingPage: [
    {
      name: "Hero Section",
      inputs: [
        {
          id: "82e53243-44b9-40b8-8278-4848b77f720a",
          name: "headline",
          component: TextField,
          props: { label: "Email" },
          validation: ["email"],
        },
        {
          id: "15bb7420-f843-4130-ae55-63533b23668d",
          name: "subline",
          component: TextField,
          props: { label: "Password" },
          validation: ["password"],
        },
      ],
    },
    {
      name: "Benefits",
      inputs: [
        {
          id: "4eb57302-64c4-4d22-a64b-850988180098",
          name: "headline",
          component: TextField,
          props: { label: "Email" },
          validation: ["email"],
        },
        {
          id: "cdf7ec0b-59af-46cc-aab1-ef3fb8aa6e1b",
          name: "subline",
          component: TextField,
          props: { label: "Password" },
          validation: ["password"],
        },
      ],
    },
    {
      name: "Benefits",
      inputs: [
        {
          id: "4eb57302-64c4-4d22-a64b-850988180098",
          name: "headline",
          component: TextField,
          props: { label: "Email" },
          validation: ["email"],
        },
        {
          id: "cdf7ec0b-59af-46cc-aab1-ef3fb8aa6e1b",
          name: "subline",
          component: TextField,
          props: { label: "Password" },
          validation: ["password"],
        },
      ],
    },
  ],
};
