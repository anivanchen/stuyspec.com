import { createSelector } from "reselect";

import {
  getIllustratorFromSlug,
  getPhotographerFromSlug,
} from "../users/selectors";

export const getMedia = state => state.media.media;

export const getIllustratorIllustrations = createSelector(
  [getIllustratorFromSlug, getMedia],
  (illustrator, media) => {
    return Object.filter(media, mediaObject => {
      return (
        mediaObject.userId === illustrator.id &&
        mediaObject.mediaType === "illustration"
      );
    });
  },
);

export const getPhotographerPhotographs = createSelector(
  [getPhotographerFromSlug, getMedia],
  (photographer, media) => {
    console.log(photographer);
    return Object.filter(media, mediaObject => {
      return (
        mediaObject.userId === photographer.id &&
        mediaObject.mediaType === "photograph"
      );
    });
  },
);
