import { createSelector } from '@reduxjs/toolkit';

const popupData = state => state.popupManager.popup;

export const formattedPopupsData = createSelector(
    popupData,
    data => data
);
