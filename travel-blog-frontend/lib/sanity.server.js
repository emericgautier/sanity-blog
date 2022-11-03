import { createClient } from "next-sanity";
import { config } from "./config";

export const sanityClient = createClient(config);

export const previewClient = createClient({
  ...config,
  useCdn: false,
  token:
    "skZynNzmDC4Yp5vqRO3FMESklUj9Ha8EmI6qwkS27GPwseYysK6oPi4jJCfdaldZG5uaj7trPf7OQOLagMPDhFcJfj1JeFXaaE0Xs9M7hOdf9yzAMeIBhQTkqe9PFtfJO4QK4CJtZhV2Bqda6HEZM2dAwFDxT1NuuPBlhHq0obWQjPiW0JHT",
});

export const getClient = (usePreview) =>
  usePreview ? previewClient : sanityClient;
